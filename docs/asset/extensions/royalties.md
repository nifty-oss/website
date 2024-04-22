---
sidebar_label: 'Royalties'
sidebar_position: 9
---

# Royalties

Nifty Asset encodes royalty enforcement directly into its transfer instruction using a system of composable `Constraint`s that can be used to create restrictions such as an Allowlist or Denylist, ensuring creators receive a portion of the proceeds from secondary sales. This is done via the `Royalties` extension, where creators can configure the royalties percentage and constraints. These can be used to exclude or include specific programs as valid owners of the asset, similar to the approach used by Programmable NFTs in the Metaplex standard.