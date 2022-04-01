import { Web3ApiClientConfig } from "@web3api/client-js";

export function getClientConfig(
  defaultConfigs: Partial<Web3ApiClientConfig>,
): Partial<Web3ApiClientConfig> {
  const env = {
    uri: "w3://ipfs/QmWNW25E3M23Uf4ftePoKopuoVtcUSz4DHKFqKfbsz7XBP",
    common: {
      connection: {
        node: null,
        networkNameOrChainId: "1",
      },
    },
    query: {},
    mutation: {},
  };
  defaultConfigs.envs = defaultConfigs.envs ? [...defaultConfigs.envs, env] : [env];
  return defaultConfigs;
}
