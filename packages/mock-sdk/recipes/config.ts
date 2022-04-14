import { Web3ApiClientConfig } from "@web3api/client-js";

export function getClientConfig(
  defaultConfigs: Partial<Web3ApiClientConfig>,
): Partial<Web3ApiClientConfig> {
  const mainEnv = {
    uri: "w3://ipfs/QmRicDYDFBHeyNhgyMqf19xt3T67WMALfxiAGj4M7FhGFf",
    common: {
      connection: {
        node: null,
        networkNameOrChainId: "1",
      },
    },
    query: {},
    mutation: {},
  };
  const covalentEnv = {
    uri: "w3://ens/rinkeby/covalent.account.resolvers.defiwrapper.eth",
    query: {
      apiKey: "ckey_910089969da7451cadf38655ede",
      chainId: 1,
    },
    common: {},
    mutation: {},
  };
  const tokenEnv = {
    uri: "w3://ens/rinkeby/ethereum.token.resolvers.defiwrapper.eth",
    query: {
      connection: {
        networkNameOrChainId: "MAINNET",
      },
    },
    common: {},
    mutation: {},
  };
  defaultConfigs.envs = defaultConfigs.envs
    ? [...defaultConfigs.envs, mainEnv, covalentEnv, tokenEnv]
    : [mainEnv, covalentEnv, tokenEnv];

  const redirect = {
    to: "w3://ens/rinkeby/ethereum.token.resolvers.defiwrapper.eth",
    from: "w3://ens/ethereum.token-resolvers.defiwrapper.eth",
  };
  defaultConfigs.redirects = defaultConfigs.redirects
    ? [...defaultConfigs.redirects, redirect]
    : [redirect];
  return defaultConfigs;
}
