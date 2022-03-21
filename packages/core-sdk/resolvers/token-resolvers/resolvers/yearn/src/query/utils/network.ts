import { Ethereum_Connection, Ethereum_Network, Ethereum_Query } from "../w3";

export function getChainId(connection: Ethereum_Connection): i32 {
  const networkRes = Ethereum_Query.getNetwork({ connection });
  if (networkRes.isErr) {
    return 0;
  }
  const network: Ethereum_Network = networkRes.unwrap();
  return network.chainId;
}
