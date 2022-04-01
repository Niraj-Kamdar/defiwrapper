import { BigInt } from "@web3api/wasm-as";
import { Nullable } from "@web3api/wasm-as";

import {
  AccountBalance,
  env,
  Ethereum_Connection,
  Ethereum_Network,
  Ethereum_Query,
  Input_getAccountBalance,
  Input_getTokenTransfers,
  Input_getTransactions,
  QueryEnv,
  TransactionsList,
  TransfersList,
  TransferType,
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

export function getTransactions(input: Input_getTransactions): TransactionsList {
  if (!env) throw new Error("env is not set");
  const connection = (env as QueryEnv).connection;

  return {
    account: input.accountAddress,
    network: getNetworkName(connection),
    quoteCurrency: "USD",
    transactions: [
      {
        hash: "0xbf213c1d6350c86cbeebc6ddea8138e40d438c6a6591e3a6cd19f7422fcf4ddf",
        m_from: "0xa79e63e78eec28741e711f89a672a4c40876ebf3",
        to: "0x3b484b82567a09e2588a13d54d032153f0c0aee0",
        value: "0",
        quote: "0.0",
        gasInfo: {
          offered: "55932",
          spent: "46610",
          price: "37867674392",
          quoteRate: "2934.027587890625",
          quote: "5.178594791174604",
        },
        logs: [
          {
            contractAddress: "0x3b484b82567a09e2588a13d54d032153f0c0aee0",
            logOffset: 396,
            topics: [
              "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
              "0x000000000000000000000000a79e63e78eec28741e711f89a672a4c40876ebf3",
              "0x00000000000000000000000068b3465833fb72a70ecdf485e0e4c7bd8665fc45",
            ],
            data: "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            event: {
              name: "Approval",
              signature: "Approval(indexed address owner, indexed address spender, uint256 value)",
              params: [
                {
                  name: "owner",
                  m_type: "address",
                  indexed: true,
                  decoded: true,
                  value: "0xa79e63e78eec28741e711f89a672a4c40876ebf3",
                },
                {
                  name: "spender",
                  m_type: "address",
                  indexed: true,
                  decoded: true,
                  value: "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
                },
                {
                  name: "value",
                  m_type: "uint256",
                  indexed: false,
                  decoded: true,
                  value:
                    "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                },
              ],
            },
          },
        ],
        timestamp: "2022-02-12T13:07:36Z",
        blockHeight: 14191428,
        offset: 269,
      },
      {
        hash: "0x895df40e50f22cedfff6b835388c7bf741f0e943ab0aedbf76fdf268090506c8",
        m_from: "0x88eaf971d7babed6d13dd31d0aa7dc5c1f3f7989",
        to: "0x3b484b82567a09e2588a13d54d032153f0c0aee0",
        value: "0",
        quote: "0.0",
        gasInfo: {
          offered: "52509",
          spent: "35006",
          price: "37300015589",
          quoteRate: "3032.827392578125",
          quote: "3.9600365628209913",
        },
        logs: [
          {
            contractAddress: "0x3b484b82567a09e2588a13d54d032153f0c0aee0",
            logOffset: 344,
            topics: [
              "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
              "0x00000000000000000000000088eaf971d7babed6d13dd31d0aa7dc5c1f3f7989",
              "0x000000000000000000000000a79e63e78eec28741e711f89a672a4c40876ebf3",
            ],
            data: "0x000000000000000000000000000000000000000000062ddd47196a2efa03c000",
            event: {
              name: "Transfer",
              signature: "Transfer(indexed address from, indexed address to, uint256 value)",
              params: [
                {
                  name: "from",
                  m_type: "address",
                  indexed: true,
                  decoded: true,
                  value: "0x88eaf971d7babed6d13dd31d0aa7dc5c1f3f7989",
                },
                {
                  name: "to",
                  m_type: "address",
                  indexed: true,
                  decoded: true,
                  value: "0xa79e63e78eec28741e711f89a672a4c40876ebf3",
                },
                {
                  name: "value",
                  m_type: "uint256",
                  indexed: false,
                  decoded: true,
                  value: "7470143263100000000000000",
                },
              ],
            },
          },
        ],
        timestamp: "2022-02-05T11:27:24Z",
        blockHeight: 14145756,
        offset: 331,
      },
      {
        hash: "0x35f53e65dd6bfa4f11f290f0b19fa3e05e1c6f981732e4d805ccf57425b5ea3f",
        m_from: "0xa79e63e78eec28741e711f89a672a4c40876ebf3",
        to: "0xf1f3ca6268f330fda08418db12171c3173ee39c9",
        value: "0",
        quote: "0.0",
        gasInfo: {
          offered: "54083",
          spent: "27572",
          price: "37300015589",
          quoteRate: "3032.827392578125",
          quote: "3.1190689627521104",
        },
        logs: [],
        timestamp: "2022-02-05T11:27:24Z",
        blockHeight: 14145756,
        offset: 257,
      },
      {
        hash: "0x9baf528b5e9ed281e032007e19ecf33f5f910fecc16acb4692d5432aad47f383",
        m_from: "0xa79e63e78eec28741e711f89a672a4c40876ebf3",
        to: "0x3b484b82567a09e2588a13d54d032153f0c0aee0",
        value: "0",
        quote: "0.0",
        gasInfo: {
          offered: "56323",
          spent: "56323",
          price: "35994320201",
          quoteRate: "4061.338134765625",
          quote: "8.23358368396935",
        },
        logs: [
          {
            contractAddress: "0x3b484b82567a09e2588a13d54d032153f0c0aee0",
            logOffset: 343,
            topics: [
              "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
              "0x0000000000000000000000000000000000000000000000000000000000000000",
              "0x000000000000000000000000a79e63e78eec28741e711f89a672a4c40876ebf3",
            ],
            data: "0x0000000000000000000000000000000000000000000a8816173e7d3d9622c000",
            event: {
              name: "Transfer",
              signature: "Transfer(indexed address from, indexed address to, uint256 value)",
              params: [
                {
                  name: "from",
                  m_type: "address",
                  indexed: true,
                  decoded: true,
                  value: "0x0000000000000000000000000000000000000000",
                },
                {
                  name: "to",
                  m_type: "address",
                  indexed: true,
                  decoded: true,
                  value: "0xa79e63e78eec28741e711f89a672a4c40876ebf3",
                },
                {
                  name: "value",
                  m_type: "uint256",
                  indexed: false,
                  decoded: true,
                  value: "12731907541100000000000000",
                },
              ],
            },
          },
        ],
        timestamp: "2021-12-26T05:00:25Z",
        blockHeight: 13878775,
        offset: 169,
      },
      {
        hash: "0x9fd2eb7db94cf71ddc665b48dad42e1d00d90ace525fd6a0479f958cce8a729f",
        m_from: "0xa79e63e78eec28741e711f89a672a4c40876ebf3",
        to: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        value: "0",
        quote: "0.0",
        gasInfo: {
          offered: "99244",
          spent: "60825",
          price: "56021917429",
          quoteRate: "3942.78369140625",
          quote: "13.435166043502429",
        },
        logs: [
          {
            contractAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            logOffset: 545,
            topics: [
              "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
              "0x000000000000000000000000a79e63e78eec28741e711f89a672a4c40876ebf3",
              "0x0000000000000000000000004869abed21ab40176a55e16d1fb46087067d628b",
            ],
            data: "0x00000000000000000000000000000000000000000000000000000000945d9d55",
            event: {
              name: "Transfer",
              signature: "Transfer(indexed address from, indexed address to, uint256 value)",
              params: [
                {
                  name: "from",
                  m_type: "address",
                  indexed: true,
                  decoded: true,
                  value: "0xa79e63e78eec28741e711f89a672a4c40876ebf3",
                },
                {
                  name: "to",
                  m_type: "address",
                  indexed: true,
                  decoded: true,
                  value: "0x4869abed21ab40176a55e16d1fb46087067d628b",
                },
                {
                  name: "value",
                  m_type: "uint256",
                  indexed: false,
                  decoded: true,
                  value: "2489163093",
                },
              ],
            },
          },
        ],
        timestamp: "2021-12-23T16:29:44Z",
        blockHeight: 13862518,
        offset: 365,
      },
    ],
    pagination: { total: Nullable.fromNull<i32>(), perPage: 10, page: 1, hasMore: true },
    updatedAt: "2022-04-01T10:36:17.111543568Z",
    nextUpdateAt: "2022-04-01T10:41:17.111543858Z",
  };
}

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
          gasInfo: {
            offered: "90000",
            spent: "48525",
            price: "46567282379",
            quote: "6.210092151066492",
            quoteRate: "2748.220703125",
          },
          logs: [],
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
          gasInfo: {
            offered: "522717",
            spent: "502722",
            price: "46835110783",
            quote: "70.98184770396895",
            quoteRate: "3014.72607421875",
          },
          logs: [],
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
      total: Nullable.fromValue(14),
    },
  };
}
