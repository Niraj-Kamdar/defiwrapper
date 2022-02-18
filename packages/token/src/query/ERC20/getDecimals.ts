import { Box } from "as-container";

import { Ethereum_Connection, Ethereum_Query } from "../../query/w3";

export function getDecimals(address: string, connection: Ethereum_Connection): Box<i32> | null {
  const decimalsResult = Ethereum_Query.callContractView({
    address: address,
    method: "function decimals() external view returns (uint8)",
    args: [],
    connection: connection,
  });

  if (decimalsResult.isOk) {
    const decimals = decimalsResult.unwrap();
    if (decimals) return Box.from(I32.parseInt(decimals));
  }

  return null;
}
