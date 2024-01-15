---
sidebar_position: 1
description: KoinDX Troubleshooting guide
slug: troubleshooting
---
# Troubleshooting

## Insufficient RC

Insufficient RC is an error message which implicates that there is not enough Mana available. Mana means the available network resources that you can spend to perform transactions on Koinos blockchain.

![Insufficient RC error message](/img/doc_img/faq/faq-troubleshooting-rc-limit.jpeg)

Often people have used a too high default value of Mana to execute a transaction and maybe have cancelled the transaction to change something. In this case the Mana could still be locked and unavailable for usage for 60 blocks (block finality on Koinos).
So **if you receive this error**, try to lower the amount of Mana used for the transaction. Wallets like Kondor have a check function that calculates the right amount of Mana for you. If you still receive this error, try to wait for ~ 2 minutes until block finality has been reached and your Mana is available again.

## Liquidity position does not appear

If you have provided liquidity and your position does not show up, try to import your position again.
A bug can occur that you have to reload the page until your imported position shows up. You can read more about [importing your position](protocol/liquidity.md#import-position)

## I can't find a specific token

KoinDX maintains a default token list which only includes selected assets. If you want to trade an asset that has not been added to our token list, please check out [the custom token guide](getting-started/custom_tokens.md)

## V1 liquidity

If you are an early KoinDX user and still have liquidity in the KoinDX v1 protocols, please consider removing it and migrating to our new protocol.
We provide a [v1 interface](https://v1-remove.koindx.com) that can be used to remove the liquidity.
