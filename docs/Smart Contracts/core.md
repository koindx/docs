---
sidebar_position: 2
---

# Core

The core contract is the basis of the koindx v2 protocol, it is in charge of storing and managing the liquidity of the users, in addition to being the koindx token contract used for a specific pair.

## Addresses

This contract does not have an exact address since a new contract is uploaded every time you want to create a new pool for a specific pair.

## Events

### initialize
Event generated when a pool with a respective pair has been verified and initialized.

### mint
Event generated when liquidity is added to a pool.

### burn
Event generated when liquidity is removed from a pool.

### swap
Event generated when a token swap is made in the pool.

### sync
Event generated when the liquidity of a pool and its liquidity data are synchronized.

## Read-Only Functions

### name
Method used to know the name in the liquidity token.

### symbol
Method used to know the symbol in the liquidity token.

### decimals
Method used to know the decimal in the liquidity token.

### get_info
Method used to know the information in the liquidity token.

### total_supply
Method used to know the current supply of the liquidity token.

### balance_of
Method used to know the number of tokens that an address has.

| Params       | Description                                                                |
|--------------|----------------------------------------------------------------------------|
| owner        | The owner is the address of which you want to know how many tokens it has  |

### allowance
Method used to know how many tokens an address can spend and that the owner of the tokens is another address.

| Params       | Description                                                        |
|--------------|--------------------------------------------------------------------|
| owner        | It is the address of the owner of the tokens that you want to use  |
| spender      | It is the address which is being allowed to spend the tokens       |

### get_reserves
Method used to know the current liquidity reserves in the pool.

### get_tokens
Returns the token addresses of a pool.

| Params       | Description                                                        |
|--------------|--------------------------------------------------------------------|
| token_a      | The adress of token asset a                                        |
| token_b      | The adress of token asset a                                        |

## State-Changing Functions

### transfer
Method used to transfer liquidity tokens.

| Params     | Description                                      |
|------------|--------------------------------------------------|
| from       | It is the address that will send the tokens      |
| to         | It is the address that will receive the tokens   |
| value      | It is the amount of tokens that you want to send |


### approve
Method used to approve the use of tokens in an address if the owner is another address.

| Params       | Description                                                        |
|--------------|--------------------------------------------------------------------|
| owner        | It is the address of the owner of the tokens that you want to use  |
| spender      | It is the address which is being allowed to spend the tokens       |

### initialize
Method used to initialize a pair or pool of tokens, this method can only be called by the periphery contract.

| Params       | Description                                       |
|--------------|---------------------------------------------------|
| token_a      | Is the address of token a used to create the pool |
| token_b      | Is the address of token b used to create the pool |

### mint
Method used to mint liquidity token in the token pool, this method can only be called by the periphery contract.

| Params    | Description                                                                                                           |
|-----------|-----------------------------------------------------------------------------------------------------------------------|
| to        | It is the address that will receive the liquidity tokens                                                              |
| fee       | It is the address where the stored fees of the swaps will be sent if the fees are activated in the periphery contract |

### burn
Method used to burn liquidity token and remove liquidity from the pool, this method can only be called by the periphery contract.

| Params    | Description                                                                                                           |
|-----------|-----------------------------------------------------------------------------------------------------------------------|
| to        | It is the address where the liquidity removed from the pool will be sent                                              |
| fee       | It is the address where the stored fees of the swaps will be sent if the fees are activated in the periphery contract |

### swap
Method used to swap tokens using the liquidity of the pool, this method can only be called by the periphery contract.

| Params    | Description                                                                     |
|-----------|---------------------------------------------------------------------------------|
| to        | It is the address where the tokens will be sent after making a swap in the pool |
| amount_a  | It is the amount of token a that must leave the pool                            |
| amount_b  | It is the amount of token b that must leave the pool                            |

### skim
Method used to synchronize the number of tokens a and token b with the data that is inside the contract.

| Params    | Description                                                                                     |
|-----------|-------------------------------------------------------------------------------------------------|
| to        | It is the address where the extra tokens will be sent if the balances and reserves do not match |

### sync
Method used to synchronize the contract data based on the number of a tokens and b tokens that are in the contract.
