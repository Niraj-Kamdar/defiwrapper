import { ZERO_ADDRESS } from "../constants";
import { Ethereum_Connection, Ethereum_Query, ETR_Query, ETR_TokenResolver_Token } from "../w3";

export class TokenData {
  decimals: i32;
  balance: string;
}

export function getEtherTokenData(
  token: ETR_TokenResolver_Token,
  underlyingTokenAddress: string,
  connection: Ethereum_Connection,
): TokenData | null {
  const balanceRes = Ethereum_Query.getBalance({
    connection: connection,
    address: token.address,
    blockTag: null,
  });
  if (balanceRes.isErr) {
    return null;
  }
  return {
    decimals: 18,
    balance: balanceRes.unwrap().toString(),
  };
}

export function getUnderlyingTokenData(
  token: ETR_TokenResolver_Token,
  underlyingTokenAddress: string,
  connection: Ethereum_Connection,
): TokenData | null {
  if (underlyingTokenAddress == ZERO_ADDRESS) {
    return getEtherTokenData(token, underlyingTokenAddress, connection);
  }
  // get token
  const underlyingTokenRes = ETR_Query.getToken({
    address: underlyingTokenAddress,
    m_type: "ERC20",
  });
  if (underlyingTokenRes.isErr) {
    return null;
  }
  const underlyingToken = underlyingTokenRes.unwrap();
  // get underlying token balance
  const balanceRes = Ethereum_Query.callContractView({
    connection: connection,
    address: underlyingTokenAddress,
    method: "function balanceOf(address account) public view returns (uint256)",
    args: [token.address],
  });
  if (balanceRes.isErr) {
    return null;
  }
  return {
    decimals: underlyingToken.decimals,
    balance: balanceRes.unwrap().toString(),
  };
}
