import { Web3ApiClientConfig } from "@web3api/client-js";

export function getClientConfig(
  defaultConfigs: Partial<Web3ApiClientConfig>,
): Partial<Web3ApiClientConfig> {
  const env = {
    uri: "w3://ens/rinkeby/mock.defiwrapper.eth",
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
