import { V1_LENDING_PROTOCOL_ID, V1_UNISWAP_PROTOCOL_ID } from "../constants";
import {
  env,
  Ethereum_Connection,
  Ethereum_Query,
  Input_getTokenComponents,
  Interface_Token,
  Interface_TokenComponent,
  QueryEnv,
  Token_Query,
  Token_Token,
  Token_TokenType,
} from "../w3";

function fetchUnderlyingTokenAddress(
  token: Token_Token,
  connection: Ethereum_Connection,
  protocolId: string,
): string {
  // v1 protocols use a different function name, but abi is otherwise like v2
  const fun: string =
    protocolId == V1_LENDING_PROTOCOL_ID || protocolId == V1_UNISWAP_PROTOCOL_ID
      ? "underlyingAssetAddress"
      : "UNDERLYING_ASSET_ADDRESS";
  const res = Ethereum_Query.callContractView({
    address: token.address,
    method: `function ${fun}() view returns (address)`,
    args: null,
    connection: connection,
  });
  if (res.isErr) {
    throw new Error("Invalid Aave protocol token: " + token.address);
  }
  return res.unwrap();
}

export function getTokenComponents(input: Input_getTokenComponents): Interface_TokenComponent {
  if (env == null) throw new Error("env is not set");
  const connection = (env as QueryEnv).connection;

  const token = Token_Query.getToken({
    address: input.tokenAddress,
    m_type: Token_TokenType.ERC20,
  }).unwrap();

  if (!token) {
    throw new Error(`Token ${input.tokenAddress} is not a valid ERC20 token`);
  }

  const underlyingTokenAddress: string = fetchUnderlyingTokenAddress(
    token,
    connection,
    input.protocolId,
  );

  const components: Interface_TokenComponent[] = [];
  let unresolvedComponents: i32;
  const underlyingToken: Interface_Token = changetype<Interface_Token>(
    Token_Query.getToken({
      address: underlyingTokenAddress,
      m_type: Token_TokenType.ERC20,
    }),
  );
  if (underlyingToken) {
    unresolvedComponents = 0;
    components.push({
      tokenAddress: underlyingTokenAddress,
      unresolvedComponents: 0,
      components: [],
      rate: "1",
    });
  } else {
    unresolvedComponents = 1;
  }

  return {
    tokenAddress: token.address,
    unresolvedComponents: unresolvedComponents,
    components: components,
    rate: "1",
  };
}
