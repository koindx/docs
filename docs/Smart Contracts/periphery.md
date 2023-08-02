---
sidebar_position: 1
---

# Periphery

The periphery contract is the main koindx contract, its function is to be the intermediary between the different token pools and the end user. Among its functions is to calculate the entry and exit inputs of tokens to add and remove liquidity, token swap and pool verification.

## Addresses

| Network           | Address                            |
|-------------------|------------------------------------|
| Koinos Harbinger  | 122MpHXb8aFF4xHZk6ESeHjRM5sBGLYxTc |
| Koinos Mainnet    | 14WeQjBk7F4C58xUquRGLK1KiqRjwj5Y4J |

## Read-Only Functions

### get_config

Method used to get the current Periphery contract settings, this method has no parameters.

### get_pair

Method used to obtain the contract address where a pool of a respective pair is hosted.

| Params     | Description                |
|------------|----------------------------|
| token_a    | token a used in the pool   |
| token_b    | token b used in the pool   |

### get_quote

Method used to amount the equivalent amount of a token using the amount of an asset and reserves.

| Params       | Description                                 |
|--------------|---------------------------------------------|
| amount       | Base asset with which you want to calculate |
| reserve_a    | Reserve of token a                          |
| reserve_b    | Reserve of token B                          |

### get_amount_out

Method used to calculate the amount of token that the user will receive if he enters a specified amount of token.

| Params       | Description                                 |
|--------------|---------------------------------------------|
| amount       | Base asset with which you want to calculate |
| reserve_a    | Reserve of token a                          |
| reserve_b    | Reserve of token B                          |

### get_amount_in

Method used to calculate the amount of token that the user would have to send if he enters a specific amount of token.

| Params       | Description                                 |
|--------------|---------------------------------------------|
| amount       | Base asset with which you want to calculate |
| reserve_a    | Reserve of token a                          |
| reserve_b    | Reserve of token B                          |


## State-Changing Functions

### authorize_update

Method used to allow Periphery contract updates using a hash to control updates.

| Params       | Description                                                                        |
|--------------|------------------------------------------------------------------------------------|
| hash         | It is a sha256 created with the wasm file of the contract used to allow updates of |


### set_config

Method used to update the Periphery contract settings.

| Params       | Description                                                            |
|--------------|------------------------------------------------------------------------|
| value        | These are the new configurations that the periphery contract will have |

### create_pair

Method used to create a new pool in the koindx protocol.

| Params       | Description                   |
|--------------|-------------------------------|
| token_a      | token a used for the new pool |
| token_a      | token b used for the new pool |

### add_liquidity

Method used to add liquidity to a pair.

| Params            | Description                                                  |
|-------------------|--------------------------------------------------------------|
| token_a           | token a of the pool to which you want to add liquidity    |
| token_b           | token b of the pool to which you want to add liquidity    |
| amount_a_desired  | It is the liquidity of token a desired to add to the pair    |
| amount_b_desired  | It is the liquidity of token b desired to add to the pair    |
| amount_a_min      | It is the minimum liquidity of token a entered into the pair |
| amount_b_min      | It is the minimum liquidity of token b entered into the pair |

### remove_liquidity

Method used to remove liquidity from a pair.

| Params            | Description                                                                        |
|-------------------|------------------------------------------------------------------------------------|
| token_a           | token a of the pool to which you want to add liquidity                          |
| token_b           | token b of the pool to which you want to add liquidity                          |
| liquidity         | amount of liquidity tokens that you want to burn to remove liquidity from the pair |
| amount_a_min      | Minimum token that the user wants to receive after removing tokens from the pair   |
| amount_b_min      | Minimum token that the user wants to receive after removing tokens from the pair   |

### swap_tokens_in

Method used to swap tokens using the exact input amount of tokens

| Params            | Description                                                                            |
|-------------------|----------------------------------------------------------------------------------------|
| amount_in         | Exact amount of input the user wants to exchange for x output token                    |
| amount_out_min    | Minimum number of tokens that the user wants to receive for his number of input tokens |
| path              | Route that is carried out to do the token swap can be 1 single pair or multiple pairs  |
| receiver          | Address where the output tokens will be received                                       |

### swap_tokens_out

Method used to swap tokens using the exact amount of token output

| Params            | Description                                                                        |
|-------------------|------------------------------------------------------------------------------------|
| amount_out        | Amount of output specifies that the user wants to receive                          |
| amount_in_max     | Maximum amount the user is willing to pay for x number of output tokens            |
| path              | amount of liquidity tokens that you want to burn to remove liquidity from the pair |
| receiver          | Address where the output tokens will be received                                   |
