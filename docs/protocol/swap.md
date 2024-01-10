---
sidebar_position: 1
---

# AMM/Swap

This section explains to you what a swap is and how you do a swap on KoinDX.

## What is a swap?

![KoinDX swap page](/img/doc_img/swap/koindx-swap-not-connected.jpg)

A swap is a very simple way to trade assets on KoinDX.

On KoinDX you don't trade directly on a peer to peer basis with other KoinDX users. You will use our the liquidity locked into our trading protocol instead.
You are trading against the liquidity pools which contain the necessary liquidity for the token pairs. The market price is not set by users, it is calculated by an algorithm. This is called Automated Market Makter (AMM).

This liquidity comes from other users who provide liquidity at KoinDX. Check the [liquidity page](liquidity.md) to learn more about it.

This sounds much more complex than it is in reality. Learn how to swap assets on KoinDX in the next section.

## A look at the swap user interface

![KoinDX swap progress entered numbers](/img/doc_img/swap/koindx-swap-connected-trading-example.jpg)

1. **Token Selection**: The top part of the interface allows you to select the cryptocurrency you want to swap. In this case, the user has selected KOIN. The balance indicates that the user has 420 KOIN available. If you have selected a trading pair, then you can begin to set the input amount of the token you want to trade.

2. **Input Amount**: Enter the amount of KOIN you wish to swap. Adding a number will update the input field of the other token. You will see directly what you can receive for this trade. Notice also the slippage for your trade and also the number of the maximum send amount.

3. **Convenience Features**: There are "MAX" and "HALF" buttons, which allow you to quickly choose to swap all or half of your available KOIN.

4. **Output Token and Amount**: Below, the interface shows the output token, which is USDT in this case. The amount you will receive for the swap is calculated automatically, shown here as approximately 16.92 USDT.

5. **Balance Check**: The user's USDT balance is shown (69 USDT), which is unaffected by the swap until it is executed.

6. **Swap Confirmation**: The central button labeled "SWAP" is presumably what you would press to initiate the swap process. Your wallet will ask you to sign the transaction. After signing, your transaction will be processed.

7. **Transaction Details**: At the bottom, there are important transaction details:
   - **Price Impact**: The effect your trade will have on the market price, shown as negligible.
   - **Slippage**: The maximum price change you're willing to accept.
   - **Exchange Rate**: The current exchange rate for KOIN to USDT.
   - **Fee**: The fee for the transaction in KOIN.
   - **Minimum Received**: The minimum amount of USDT you will receive after the swap, accounting for price fluctuations and fees.

## How do I swap assets on KoinDX?

If you want to swap an asset on KoinDX, navigate to the [swap page](https://koindx.com/swap?utm_source=koindx-docs).

1. [connect](../getting-started/connect.md) your cryptocurrency wallet to the DEX platform.
2. Ensure you have sufficient balance of the token you want to swap.
3. Select the token you want to swap from and the token you want to receive.
4. Enter the amount to swap or use the "MAX" or "HALF" buttons for convenience.
5. Review the transaction details carefully.
6. Click the "SWAP" button to initiate the swap.
7. Confirm the transaction in your wallet, agreeing to the used network resources (Mana) and any other permissions requested by the DEX.
8. Wait for the transaction to be processed on the blockchain network.
9. Once the transaction is confirmed, your new token balance should reflect the swap.

Be aware of the potential risks, such as price fluctuations and network congestion, which can affect the final amount received. Always double-check transaction details before confirming the swap.
