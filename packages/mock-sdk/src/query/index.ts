import { BigInt } from "@web3api/wasm-as";

import {
  AccountBalance,
  env,
  Ethereum_Connection,
  Ethereum_Network,
  Ethereum_Query,
  Input_getAccountBalance,
  Input_getTokenTransfers,
  QueryEnv,
  // TransactionsList,
  TransfersList,
  TransferType,
  // Input_getTransactions,
  // TransactionsList,
} from "./w3";

function getNetworkName(connection: Ethereum_Connection): string {
  const network: Ethereum_Network = Ethereum_Query.getNetwork({ connection: connection }).unwrap();
  return network.name;
}

export function getAccountBalance(input: Input_getAccountBalance): AccountBalance {
  if (!env) throw new Error("env is not set");
  const connection = (env as QueryEnv).connection;

  return {
    account: input.accountAddress,
    network: getNetworkName(connection),
    values: [
      {
        currency: "usd",
        price: "N/A",
        value: "10,765.135113993",
      },
    ],
    protocols: [
      {
        protocol: {
          id: "uniswap_v2",
          organization: "Uniswap",
          name: "Uniswap",
          adapterUri: "ens/uniswap.token-resolvers.defiwrapper.eth",
          version: "2",
          forkedFrom: null,
        },
        values: [
          {
            currency: "usd",
            price: "N/A",
            value: "10,720.855113993",
          },
        ],
        assets: [
          {
            apy: "8.67",
            apr: null,
            isDebt: false,
            balance: {
              token: {
                token: {
                  address: "0x0a965a4caf929338044c593d82d385c4c898d8c6",
                  name: "Uniswap V2",
                  symbol: "UNI-V2",
                  decimals: 18,
                  totalSupply: BigInt.fromString("3421511230657799317704"),
                },
                balance: "12",
                values: [
                  {
                    currency: "usd",
                    price: "188.8283946669",
                    value: "10,720.855113993",
                  },
                ],
              },
              unresolvedComponents: 0,
              components: [
                {
                  token: {
                    token: {
                      address: "0x35bD01FC9d6D5D81CA9E055Db88Dc49aa2c699A8",
                      name: "Friends With Benefits Pro",
                      symbol: "FWB",
                      decimals: 18,
                      totalSupply: BigInt.fromString("1000000000000000000000000"),
                    },
                    balance: "56.775651421",
                    values: [
                      {
                        currency: "usd",
                        price: "50.70",
                        value: "2,878.5255270447",
                      },
                    ],
                  },
                  unresolvedComponents: 0,
                  components: [],
                },
                {
                  token: {
                    token: {
                      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                      name: "Wrapped Ether",
                      symbol: "WETH",
                      decimals: 18,
                      totalSupply: BigInt.fromString("7025353631329550976333864"),
                    },
                    balance: "3.0003097309",
                    values: [
                      {
                        currency: "usd",
                        price: "2,613.84",
                        value: "7,842.3295869483",
                      },
                    ],
                  },
                  unresolvedComponents: 0,
                  components: [],
                },
              ],
            },
            claimableTokens: [],
          },
        ],
      },
      {
        protocol: {
          id: "sushibar_v1",
          organization: "Sushi",
          name: "Sushibar",
          adapterUri: "ens/sushibar.token-resolvers.defiwrapper.eth",
          version: "1",
          forkedFrom: null,
        },
        values: [
          {
            currency: "usd",
            price: "N/A",
            value: "44.28",
          },
        ],
        assets: [
          {
            apy: null,
            apr: null,
            isDebt: false,
            balance: {
              token: {
                token: {
                  address: "0x8798249c2e607446efb7ad49ec89dd1865ff4272",
                  name: "SushiBar",
                  symbol: "xSUSHI",
                  decimals: 18,
                  totalSupply: BigInt.fromString("68828762817907898982295808"),
                },
                balance: "12",
                values: [
                  {
                    currency: "usd",
                    price: "3.69",
                    value: "44.28",
                  },
                ],
              },
              unresolvedComponents: 0,
              components: [
                {
                  token: {
                    token: {
                      address: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
                      name: "SushiToken",
                      symbol: "SUSHI",
                      decimals: 18,
                      totalSupply: BigInt.fromString("232539564055938576031638126"),
                    },
                    balance: "15.1643835616",
                    values: [
                      {
                        currency: "usd",
                        price: "2.92",
                        value: "35.04",
                      },
                    ],
                  },
                  unresolvedComponents: 0,
                  components: [],
                },
              ],
            },
            claimableTokens: [],
          },
        ],
      },
    ],
  };
}

// export function getTransactions(input: Input_getTransactions): TransactionsList {
//   if (!env) throw new Error("env is not set");
//   const connection = env.connection as Ethereum_Connection;

//   return {};
// }

export function getTokenTransfers(input: Input_getTokenTransfers): TransfersList {
  if (!env) throw new Error("env is not set");
  const connection = (env as QueryEnv).connection;

  return {
    account: input.accountAddress,
    updatedAt: "2022-04-01T04:06:53.745976993Z",
    nextUpdateAt: "2022-04-01T04:11:53.745977273Z",
    quoteCurrency: "usd",
    network: getNetworkName(connection),
    token: {
      name: "USD Coin",
      symbol: "USDC",
      address: input.tokenAddress,
      decimals: 6,
      totalSupply: BigInt.fromString("1000000000000"),
    },
    transfers: [
      {
        transaction: {
          timestamp: "2022-02-20T16:36:43Z",
          blockHeight: 14244015,
          hash: "0x38aa0a4f1ee26b776820a63559d3d5f339b4d2330abb4154ddcf087325d85207",
          offset: 55,
          to: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          value: "0",
          m_from: "0xec4486a90371c9b66f499ff3936f29f0d5af8b7e",
          quote: "0.0",
          quoteRate: "0",
          gasInfo: {
            offered: "90000",
            spent: "48525",
            price: "46567282379",
            quote: "6.210092151066492",
            quoteRate: "2748.220703125",
          },
        },
        transfers: [
          {
            m_from: "0xec4486a90371c9b66f499ff3936f29f0d5af8b7e",
            to: "0x197e3eccd00f07b18205753c638c3e59013a92bf",
            m_type: TransferType.IN,
            value: "40000000000",
            quoteRate: "1.0454195737838745",
            quote: "41816.78295135498",
          },
        ],
      },
      {
        transaction: {
          timestamp: "2022-02-11T09:36:58Z",
          blockHeight: 14183956,
          hash: "0x0ff3a362c2f641b202038b9590ec2d2d6f9befab30c4ffb6058531af5e6b5030",
          offset: 30,
          m_from: "0xf3890b63a66dbcac1df580997d317990507e1cd3",
          to: "0xd152f549545093347a162dce210e7293f1452150",
          value: "0",
          quote: "0.0",
          quoteRate: "0",
          gasInfo: {
            offered: "522717",
            spent: "502722",
            price: "46835110783",
            quote: "70.98184770396895",
            quoteRate: "3014.72607421875",
          },
        },
        transfers: [
          {
            m_from: "0xd152f549545093347a162dce210e7293f1452150",
            to: "0x197e3eccd00f07b18205753c638c3e59013a92bf",
            m_type: TransferType.IN,
            value: "40000000000",
            quoteRate: "1.0454195737838745",
            quote: "41816.78295135498",
          },
        ],
      },
    ],
    pagination: {
      hasMore: true,
      page: 1,
      perPage: 2,
      total: 14,
    },
  };
}
