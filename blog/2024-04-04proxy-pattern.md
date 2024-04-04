---
slug: proxy-pattern
title: Extending program behaviour using a Proxy Pattern
authors: [febo]
tags: [solana, program, interface, extensions]
---

*...and defining a program interface in the process.*

:::tip TL;DR

- Nifty Asset program provides a program interface for developers to fully customise its behaviour.
- Follows a simpler and yet more powerful pattern than "hooks".
- No changes are required on the program to support new behaviour.
- Client SDK makes using it nearly as trivial as using Nifty Asset directly.

:::

### Introduction

The standard method for extending the behaviour of a program to execute custom logic on Solana involves using "hooks," which are program-defined callbacks. These callbacks allow a program to incorporate custom logic from a predetermined "hooked" program via Cross-Program Invocation (CPI). This method was first introduced by the Token Extensions program (also known as SPL Token-2022) and its Transfer Hook extension – its purpose is to be able to execute custom logic every time a token from a particular mint is transferred,  including logic that could "block" the transfer of the token.

<p align="center">
    <figure>
        <img
        src={require('/img/proxy-pattern/hook-pattern.jpg').default}
        alt="Hook Pattern"
        width="500"
        />
        <figcaption><b>The Hook pattern:</b> Program B is a <i>hook</i> on Program A. Program A includes custom logic to invoke Program B.</figcaption>
    </figure>
</p>

The Transfer Hook extension defines a common interface that programs must implement to receive transfer CPI callbacks when a token from a specific mint account is transferred. This callback is guaranteed to occur every time a mint with a transfer hook is transferred. Although this method enables various use cases, including deciding whether a transfer should succeed or not, it has an two important limitations: (1) the target program must embed the logic for hooks, and (2) the hooked program cannot write additional data to an account owned by the target program or perform any other instruction involving the target program. The second limitation arrises from the rule that prohibits program reentry – e.g., if Program A invokes Program B, Program B cannot invoke Program A. While it is possible that a program (Program B) returns data from a CPI call, deciding what to do with the data requires custom logic on the target program (Program A) and the types of actions to be performed will always be limited by the existing logic – new "actions" can only happen if the logic for them is added on Program A.

### Enter a new pattern: Proxy

For those who are already familiar with design patterns for object-oriented programming, a "<i>Proxy provides a surrogate or placeholder for another object to control access to it</i>". Replace "another object" by "another program", and now we have a pattern to gate access to a program. Going back to the initial example of the mint account, our aim is to have a Program B that defines custom behaviour any time Program A is called to transfer a token from a specific mint. In this case, Program B acts as a proxy to Program A. In other words, we flip the "hook" model upside-down and invert its order: Program B (the one that adds custom logic) receives the instruction, performs any custom logic and forwards the instruction to Program A (the one that actually performs the transfer).

<p align="center">
    <figure>
        <img
        src={require('/img/proxy-pattern/proxy-pattern.jpg').default}
        alt="Proxy Pattern"
        width="500"
        />
        <figcaption><b>The Hook pattern:</b> Program B is a hook on Program A. Program A includes custom logic to invoke Program B.</figcaption>
    </figure>
</p>

This pattern offers two significant benefits. First, it removes the limitations on CPIs from Program B to Program A, allowing Program B to make CPI calls that write additional data to accounts controlled by Program A. Second, Program A is not required to incorporate any custom logic for "hooks" and it does not even need to be aware of any additional logic that was performed.

You might be wondering how to ensure that the proxy program (Program B) is always invoked when an account from Program A is being manipulated. The answer is Program Derived Addresses (PDAs) combined with a simple rule: when Program A is manipulating a "proxied" account – an account that was created as a PDA from Program B – it always requires the account to be a signer. Since a PDA can only be signed by the program from which it was derived, this guarantees that the instruction must be going through the proxy program – the proxy program (Program B) adds the PDA signature for the account before forwarding the instruction to Program A.

For the Proxy pattern to work, the proxy program (Program B) supports the same instructions layout as the target program (Program A) and can add any custom logic when processing these instructions.

We now have a generic pattern to create extensible programs and, in the process, we defined a way to specify program interfaces – it is possible to compose programs together sharing the same interface to add additional behaviour.

### Putting it all together

Nifty Asset is the first program implementing the Proxy pattern to allow developers extend its behaviour. This is achieved by:

1. Using a "Proxy" extension to identify accounts that are "proxied" – these accounts will be required to be a signer on instructions that manipulate them. The extension stores the information for clients to determine the address (`pubkey`) of the proxy program; it also includes the `seeds` and `bump` information for a proxy program to add a signature for the account. 

<p align="center">
    <figure>
        <img
        src={require('/img/proxy-pattern/proxy-extension.png').default}
        alt="Proxy Extension"
        width="300"
        />
    </figure>
</p>

2. Providing a program interface so proxy programs can parse Nifty Asset instructions. Proxy programs implement handlers for each of these instructions to add custom behaviour; the program can also decide that some instructions are not allowed and therefore cannot be executed. The main purpose of the proxy program is to sign the instruction on behalf of the asset account – the address of the asset account is a PDA of the proxy program, so it is the only program that can sign the instruction. Without its signature, the Nifty Asset program will not execute an instruction manipulating a "proxied" asset.

<p align="center">
    <figure>
        <img
        src={require('/img/proxy-pattern/processor.png').default}
        alt="Processor"
        width="500"
        />
    </figure>
</p>

3. Extending the JavaScript SDK to support executing instructions using a proxy. This is as simple as executing instructions directly on Nifty Asset program. Every instruction builder has an optional "proxy" argument, which corresponds to the address of the proxy program to use when one is needed.

<p align="center">
    <figure>
        <img
        src={require('/img/proxy-pattern/sdk-proxy.png').default}
        alt="SDK"
        width="450"
        />
    </figure>
</p>

The GitHub [⎘repository](https://github.com/nifty-oss/asset) includes an example of a proxy program that tracks the number of times an asset has been transferred and changes the colour of its on-chain image on every transfer.

### Summary

The Proxy pattern provides a simple, non-intrusive, yet powerful way to extend the behaviour of a program. It allows adding custom behaviour without requiring modifications to the program and avoids limitations of CPI reentrancy and use of return data.

Nifty Asset now provides a program interface for developers to build on top and fully customise its behaviour.