# Smart contract Wallet Account Abstraction (ERC4337)

This project uses `ERC4337` standard to create Smart wallet for a user and also has functionalities that allows users to deposit funds, receive Fund, and view the Balance

## Overview-Description

The project uses a `WalletFactory`, to create a smart contract `Wallet` for every user who wants to Create a Wallet.
The factory contract deploys instances of the child contract to create wallet for each user

The `Smart Wallet Dapp`, allows you to create smart wallets. It has a factory contract that spurns smart wallets for users. This smart wallet is tie to a user EOA, thus a user can deposit funds into it, send out funds to any wallet as well as view the user's balance.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
