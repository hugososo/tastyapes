import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useContractFunction, useCall, useEthers } from "@usedapp/core";
import tastyApesAbi from "../abi/TastyApes.json";
import { contractAddress } from "../contract/contract";import { useEffect, useLayoutEffect, useRef } from 'react'

const contractInterface = new ethers.utils.Interface(tastyApesAbi);
const contract = new Contract(contractAddress, contractInterface);

export function useTotalSupply() {
  const { value, error } = useCall(contractAddress && {
    contract: new Contract(contractAddress, contractInterface),
    method: 'totalSupply',
    args: []
  }) ?? {}
  if(error) {
    return undefined
  }
  return value?.[0];
}

export function useBalanceOf() {
  const { account } = useEthers();
  const { value, error } = useCall(account && contractAddress && {
    contract: new Contract(contractAddress, contractInterface),
    method: 'balanceOf',
    args: [account || '0x0000000000000000000000000000000000000000']
  }) ?? {}
  if(error) {
    return undefined
  }
  return value?.[0];
}

export function useContractMethod(methodName, transactionName) {
  const { state, send, resetState } = useContractFunction(contract, methodName, {transactionName:{transactionName}});
  return { state, send, resetState };
}