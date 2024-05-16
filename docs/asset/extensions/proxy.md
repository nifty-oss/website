---
sidebar_label: 'Proxy'
sidebar_position: 8
---

# Proxy

In addition to extensions, Nifty Asset implements the [⎘Proxy Pattern](/blog/proxy-pattern) to allow developers extend the program behaviour. The `Proxy` extension is used to identify accounts that are "proxied" – these accounts will be required to be a signer on instructions that manipulate them. Since only the proxy program can add the signature for the account &mdash; the asset address is a PDA of the proxy program &mdash; it guarantees that it is always called on every instruction and it is allowed to perform custom logic.

The extension stores the information for clients to determine the address of the proxy program; it also includes the `seeds` and `bump` information for a proxy program to add a signature for the account.

<!-- Begin table -->
<table class="account-layout-table">
    <thead>
        <tr>
            <th><i>Field</i></th>
            <th><i>Description</i></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>program</code></td>
            <td>Proxy program address.</td>
        </tr>
        <tr>
            <td><code>seeds</code></td>
            <td>Seeds for the PDA derivation.</td>
        </tr>
        <tr>
            <td><code>bump</code></td>
            <td>Bump for the PDA derivation.</td>
        </tr>
        <tr>
            <td><code>authority</code></td>
            <td>(optional) Authority of the proxy extension. This can be used to specify an address to act as the authority of the asset since in most cases the `authority` on the asset is set to be itself.</td>
        </tr>
    </tbody>
</table>
<!-- End table -->