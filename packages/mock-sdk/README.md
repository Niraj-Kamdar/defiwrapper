# Defiwrapper Mock SDK

This is a mock version of the defiwrapper core-sdk

## Usage

You can use this SDKs directly in your React app by first installing:

```console
yarn add @web3api/react @web3api/client
```

You can then import the Web3 API Client hook and query `mock-sdk` in your component as shown in following examples:

Here are the common configs that you need to use during client query.
```ts
const CONFIGS = {
    envs: [
      {
        uri: "ens/rinkeby/ethereum.token.resolvers.defiwrapper.eth"
        commons: {},
        query: {
          connection: {
            networkNameOrChainId: "MAINNET",
          },
        },
        mutation: {}
      },
      {
        uri: "w3://ens/rinkeby/covalent.account.resolvers.defiwrapper.eth",
        query: {
          apiKey: "ckey_910089969da7451cadf38655ede",
          chainId: 1,
        },
        common: {},
        mutation: {},
      }
    ],
    redirects: [
      {
        to: "w3://ens/rinkeby/ethereum.token.resolvers.defiwrapper.eth",
        from: "w3://ens/ethereum.token-resolvers.defiwrapper.eth",
      };
    ]
  }
```

1. getAccountBalance

```js
import { useWeb3ApiClient } from '@web3api/react';

const w3Client = useWeb3ApiClient();
const query = {
  uri: 'ens/rinkeby/mock.defiwrapper.eth',
  query: `
  query GetAccountBalance($accountAddress: String!) {
    getAccountBalance(accountAddress: $accountAddress)
  }
  `,
  variables: {
    accountAddress: "0x1234..."
  },
  config: CONFIGS
};

async function fetch() {
  const result = (await w3Client.query(
    query,
  ));
  ... // Do something
}
```

2. getTransactions
```js
import { useWeb3ApiClient } from '@web3api/react';

const w3Client = useWeb3ApiClient();
const query = {
  uri: 'ens/rinkeby/mock.defiwrapper.eth',
  query: `
  query GetTransactions($account: String!, $currency: String!) {
    getTransactions(
      accountAddress: $account
      vsCurrency: $currency # This will be moved to env of account-resolver
    )
  }
  `,
  variables: {
    accountAddress: "0x1234...",
    vsCurrency: "USD"
  },
  config: CONFIGS
};

async function fetch() {
  const result = (await w3Client.query(
    query,
  ));
  ... // Do something
}
```

3. getTokenTransfers

```js
import { useWeb3ApiClient } from '@web3api/react';

const w3Client = useWeb3ApiClient();
const query = {
  uri: 'ens/rinkeby/mock.defiwrapper.eth',
  query: `
  query GetTokenTransfers($account: String!, $token: String!, $currency: String!) {
    getTokenTransfers(
      accountAddress: $account
      tokenAddress: $token
      vsCurrency: $currency # This will be moved to env of account-resolver
    )
  }
  `,
  variables: {
    accountAddress: "0x1234...",
    tokenAddress: "0xToken...",
    vsCurrency: "USD",
  },
  config: CONFIGS
};

async function fetch() {
  const result = (await w3Client.query(
    query,
  ));
  ... // Do something
}
```

You can also specify following options while making request to above endpoints:

```graphql
type Options {
  pagination: PaginationOptions
  blockRange: BlockRangeOptions
}

type PaginationOptions {
  page: Int!
  perPage: Int!
}

type BlockRangeOptions {
  startBlock: Int # default: 0
  endBlock: Int # default: latest
}
```

Here's the example of making a query with above options

```js
import { useWeb3ApiClient } from '@web3api/react';

const w3Client = useWeb3ApiClient();
const query = {
  uri: 'ens/rinkeby/mock.defiwrapper.eth',
  query: `
  query GetTokenTransfers($account: String!, $token: String!, $currency: String!, $options: Options) {
    getTokenTransfers(
      accountAddress: $account
      tokenAddress: $token
      vsCurrency: $currency # This will be moved to env of account-resolver
      options: $options
    )
  }
  `,
  variables: {
    accountAddress: "0x1234...",
    tokenAddress: "0xToken...",
    vsCurrency: "USD",
    options: {
      pagination: {
        page: 1,
        perPage: 5,
      },
      blockRange: {
        startBlock: 120000,
        endBlock: 240000
      }
    }
  },
  config: CONFIGS
};

async function fetch() {
  const result = (await w3Client.query(
    query,
  ));
  ... // Do something
}
```
