import { useState } from "react";
import styles from "./styles.module.css";

// SIMD-0437 incrementally lowers `lamports_per_byte_year` from 6960 to 696.
// https://github.com/solana-foundation/solana-improvement-documents/blob/main/proposals/0437-incremental-rent-reduction.md
const BASELINE_RATE = 6960;

const STEPS = [
  { rate: 6960, label: "Before SIMD-0437" },
  { rate: 6333, label: "SIMD-0437 step 1 · live on mainnet" },
  { rate: 5080, label: "SIMD-0437 step 2" },
  { rate: 2575, label: "SIMD-0437 step 3" },
  { rate: 1322, label: "SIMD-0437 step 4" },
  { rate: 696, label: "SIMD-0437 step 5 · final target" },
];

// index into STEPS the selector opens on: the fully-rolled-out 696 target,
// the headline of the reduction. Every option is labelled with its step and
// the % it cuts from the 6960 baseline, so the live-on-mainnet step is clear.
const DEFAULT_STEP = STEPS.length - 1;

function reductionOf(rate) {
  return Math.round((1 - rate / BASELINE_RATE) * 100);
}

// Non-fungible Cost and compute-unit figures were measured on-chain by Nifty
// OSS against `lamports_per_byte_year = 6960`. The `costFungible` figures are
// derived, not measured: NFT protocols (Nifty Asset, Metaplex Core) do not
// represent fungibles, so only the two token programs carry a value. They are
// computed from documented account sizes at the baseline rate — see the note
// under the table. All Cost rows depend on the rent rate: rent is linear in the
// rate, so cost = (baseline - fee) * rate / 6960 + fee, where `fee` is the
// protocol's fixed, non-refundable creation fee (0 for the refundable-rent
// protocols). Compute-unit and structural rows are independent of rent.
//
// Column order: Nifty · Token-2022 · Metaplex Core · Metaplex Token Metadata.
const PROTOCOLS = [
  {
    key: "nifty",
    name: "Nifty Asset",
    costFungible: null, // non-fungible protocol
    costBasic: 0.00206016,
    costNft: 0.00345216,
    fee: 0,
    basicNote: "includes the ability to delegate, collection, lock/unlock and store a 35-character name",
    creationBasic: 5809,
    creationNft: 10880,
    transferBasic: 1718,
    transferNft: 2172,
    protocolFee: "◎ 0 (no fee)",
    accounts: "1",
    license: "Open (Apache 2.0)",
    devs: "Nifty OSS Team",
    governance: "Community",
    extensibility: "Extensions + Program (Proxy) Interface",
  },
  {
    key: "t22",
    name: "Token Extensions (SPL Token 2022)",
    // 1 account: a Token-2022 mint carrying its metadata inline via the
    // metadata-pointer + token-metadata extensions. No protocol fee.
    costFungible: 0.00373056,
    costBasic: 0.00350088,
    costNft: 0.00602736,
    fee: 0,
    fungibleNote: "metadata inline on the mint, one account",
    basicNote: "includes the ability to delegate, lock/unlock",
    nftNote: "no native royalty enforcement",
    creationBasic: 17530,
    creationNft: 73530,
    transferBasic: 8153,
    transferNft: 8153,
    protocolFee: "◎ 0 (no fee)",
    accounts: "2",
    license: "Open (Apache 2.0)",
    devs: "Solana Labs / Anza",
    governance: "–",
    extensibility: "Extensions",
  },
  {
    key: "core",
    name: "Metaplex Core",
    costFungible: null, // non-fungible protocol
    costBasic: 0.00291288,
    costNft: 0.0045276,
    fee: 0.0015,
    basicNote: "empty asset",
    creationBasic: 6619,
    creationNft: 66530,
    transferBasic: 8011,
    transferNft: 71436,
    protocolFee: "◎ 0.0015 on creation",
    accounts: "1",
    license: "Commercial (Metaplex NFT Open Source)",
    devs: "Metaplex Foundation",
    governance: "DAO",
    extensibility: "Plugins",
  },
  {
    key: "tm",
    name: "Token Metadata",
    // 2 accounts: a legacy SPL mint (82 B) plus a separate Metaplex Metadata
    // account (679 B), and the same non-refundable creation fee.
    costFungible: 0.01707832,
    costBasic: 0.0219812,
    costNft: 0.02342888,
    fee: 0.01,
    fungibleNote: "separate metadata account + fee",
    basicNote: "includes the ability to delegate, lock/unlock, name, uri, symbol, collection and creators",
    creationBasic: 178907,
    creationNft: 184412,
    transferBasic: 74241,
    transferNft: 114718,
    protocolFee: "◎ 0.01 on creation",
    accounts: ">= 4",
    license: "Commercial (Metaplex NFT Open Source)",
    devs: "Metaplex Foundation",
    governance: "DAO",
    extensibility: "None",
  },
];

// rent scales linearly with the rate; the protocol fee is fixed.
function costAtRate(protocol, field, rate) {
  const measured = protocol[field];
  return (measured - protocol.fee) * (rate / BASELINE_RATE) + protocol.fee;
}

function fmtSol(value) {
  // trim trailing zeros but keep the leading "0."
  let s = value.toFixed(8).replace(/0+$/, "").replace(/\.$/, "");
  return "◎ " + s;
}

// magnitude of a value relative to the cheapest (Nifty) cell in the same row
function relToNifty(value, niftyValue) {
  if (niftyValue <= 0) return null;
  return (value / niftyValue - 1) * 100;
}

function tone(pct) {
  // pct === null marks the Nifty reference column: colour it green (best).
  if (pct === null) return styles.good;
  if (pct <= 1) return styles.good;
  if (pct <= 100) return styles.warn;
  return styles.bad;
}

function fmtPct(pct) {
  if (pct === null || pct <= 1) return null;
  return `~${Math.round(pct)}% increase`;
}

export default function RentComparison() {
  const [stepIndex, setStepIndex] = useState(DEFAULT_STEP);
  const step = STEPS[stepIndex];
  const rate = step.rate;
  const reductionPct = reductionOf(rate);

  const nifty = PROTOCOLS[0];
  const niftyBasic = costAtRate(nifty, "costBasic", rate);
  const niftyNft = costAtRate(nifty, "costNft", rate);

  // The fungible row has no Nifty/Core value (they are non-fungible), so its
  // reference — the cheapest cell — is the Token-2022 mint.
  const t22 = PROTOCOLS.find((p) => p.key === "t22");
  const fungibleRef = costAtRate(t22, "costFungible", rate);

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <label htmlFor="rent-step" className={styles.controlLabel}>
          Rent rate
        </label>
        <select
          id="rent-step"
          className={styles.select}
          value={stepIndex}
          onChange={(e) => setStepIndex(Number(e.target.value))}
        >
          {STEPS.map((s, i) => {
            const pct = reductionOf(s.rate);
            return (
              <option key={s.rate} value={i}>
                {s.label} · {s.rate} lamports/byte-year
                {pct > 0 ? ` (−${pct}%)` : ""}
              </option>
            );
          })}
        </select>
        <span className={styles.rateBadge}>
          {reductionPct === 0
            ? "no reduction"
            : `${reductionPct}% cheaper rent`}
        </span>
      </div>

      <p className={styles.caption}>
        Move the selector to price the standards at each step of{" "}
        <a href="https://github.com/solana-foundation/solana-improvement-documents/blob/main/proposals/0437-incremental-rent-reduction.md">
          SIMD-0437
        </a>
        , which lowers <code>lamports_per_byte_year</code> from 6960 to 696. Only
        the <b>Cost</b> rows move with the rate — every other row is independent
        of rent. Metaplex Core and Token Metadata charge a fixed, non-refundable
        protocol fee that does <b>not</b> shrink with rent, so their share of the
        cost only grows as rent falls. The fungible row compares the two token
        programs (Nifty Asset and Metaplex Core are non-fungible).
      </p>

      <div className={styles.legend} aria-hidden="true">
        <span className={styles.legendItem}>
          <span className={`${styles.swatch} ${styles.swatchGood}`} /> cheapest in
          each row
        </span>
        <span className={styles.legendItem}>
          <span className={`${styles.swatch} ${styles.swatchWarn}`} /> up to +100%
        </span>
        <span className={styles.legendItem}>
          <span className={`${styles.swatch} ${styles.swatchBad}`} /> more than
          +100%
        </span>
      </div>

      <div className={styles.tableScroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.rowHead} />
              {PROTOCOLS.map((p) => (
                <th key={p.key} className={styles.colHead}>
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className={styles.rowHead}>
                Cost (Fungible)
                <span className={styles.subhead}>
                  a fungible token carrying name/symbol/uri metadata
                </span>
              </th>
              {PROTOCOLS.map((p) => {
                if (p.costFungible == null) {
                  return (
                    <td key={p.key} className={styles.plain}>
                      –
                    </td>
                  );
                }
                const v = costAtRate(p, "costFungible", rate);
                const pct = p.key === "t22" ? null : relToNifty(v, fungibleRef);
                return (
                  <td key={p.key} className={tone(pct)}>
                    <div className={styles.cost}>{fmtSol(v)}</div>
                    {fmtPct(pct) && <div className={styles.delta}>{fmtPct(pct)}</div>}
                    {p.fungibleNote && (
                      <div className={styles.note}>({p.fungibleNote})</div>
                    )}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className={styles.rowHead}>Cost (Basic)</th>
              {PROTOCOLS.map((p) => {
                const v = costAtRate(p, "costBasic", rate);
                const pct = p.key === "nifty" ? null : relToNifty(v, niftyBasic);
                return (
                  <td key={p.key} className={tone(pct)}>
                    <div className={styles.cost}>{fmtSol(v)}</div>
                    {fmtPct(pct) && <div className={styles.delta}>{fmtPct(pct)}</div>}
                    {p.basicNote && <div className={styles.note}>({p.basicNote})</div>}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className={styles.rowHead}>
                Cost (NFT)
                <span className={styles.subhead}>
                  name, uri, symbol, collection, delegate, lock/unlock, creators,
                  royalties (empty rule set)
                </span>
              </th>
              {PROTOCOLS.map((p) => {
                const v = costAtRate(p, "costNft", rate);
                const pct = p.key === "nifty" ? null : relToNifty(v, niftyNft);
                return (
                  <td key={p.key} className={tone(pct)}>
                    <div className={styles.cost}>{fmtSol(v)}</div>
                    {fmtPct(pct) && <div className={styles.delta}>{fmtPct(pct)}</div>}
                    {p.nftNote && <div className={styles.note}>({p.nftNote})</div>}
                  </td>
                );
              })}
            </tr>
            <ComputeRow label="Creation (Basic)" field="creationBasic" />
            <ComputeRow label="Creation (NFT)" field="creationNft" />
            <ComputeRow label="Transfer (Basic)" field="transferBasic" />
            <ComputeRow label="Transfer (NFT)" field="transferNft" />
            <PlainRow label="Protocol Fees" field="protocolFee" />
            <PlainRow label="# of accounts" field="accounts" />
            <PlainRow label="License" field="license" />
            <PlainRow label="Main Developers" field="devs" />
            <PlainRow label="Governance" field="governance" />
            <PlainRow label="Extensibility" field="extensibility" />
          </tbody>
        </table>
      </div>

      <p className={styles.footnote}>
        The <b>Basic</b> and <b>NFT</b> Cost rows and the compute-unit figures
        are the values Nifty OSS measured on-chain; all Cost rows are rescaled to
        the selected rent rate using the linear rent formula
        (<code>rent = (bytes + 128) &times; lamports_per_byte_year &times; 2</code>).
        The <b>Fungible</b> row is <i>derived</i> from documented account sizes
        rather than measured: Token-2022 is a single mint (166 B base + the
        metadata-pointer and token-metadata extensions, ≈408 B for a
        name/symbol/uri payload); Token Metadata is a legacy SPL mint (82 B) plus
        a separate Metaplex Metadata account (679 B, fixed) and the same
        non-refundable creation fee. Costs are fully refundable for Nifty Asset
        and Token Extensions (rent only); for Metaplex Core and Token Metadata the
        protocol fee is non-refundable and charged at creation.
      </p>
    </div>
  );

  function ComputeRow({ label, field }) {
    const niftyVal = nifty[field];
    return (
      <tr>
        <th className={styles.rowHead}>
          {label}
          <span className={styles.subhead}>measured in compute units</span>
        </th>
        {PROTOCOLS.map((p) => {
          const v = p[field];
          const pct = p.key === "nifty" ? null : relToNifty(v, niftyVal);
          return (
            <td key={p.key} className={tone(pct)}>
              <div className={styles.cost}>{v.toLocaleString()}</div>
              {fmtPct(pct) && <div className={styles.delta}>{fmtPct(pct)}</div>}
            </td>
          );
        })}
      </tr>
    );
  }

  function PlainRow({ label, field }) {
    return (
      <tr>
        <th className={styles.rowHead}>{label}</th>
        {PROTOCOLS.map((p) => (
          <td key={p.key} className={styles.plain}>
            {p[field]}
          </td>
        ))}
      </tr>
    );
  }
}
