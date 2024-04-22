---
sidebar_label: 'Proxy'
sidebar_position: 8
---

# Proxy

In addition to extensions, Nifty Asset implements the [⎘Proxy Pattern](/blog/proxy-pattern) to allow developers extens the program behaviour. The `Proxy` extension is used to identify accounts that are "proxied" – these accounts will be required to be a signer on instructions that manipulate them. The extension stores the information for clients to determine the address of the proxy program; it also includes the `seeds` and `bump` information for a proxy program to add a signature for the account.