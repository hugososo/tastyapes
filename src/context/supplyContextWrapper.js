import React, { useState, useMemo, useEffect } from 'react'
import { SupplyContext } from "./appContext";
import { useTotalSupply } from '../hooks/utils.js'
import { ethers } from "ethers";
import tastyApesAbi from "../abi/TastyApes.json";
import { contractAddress } from "../contract/contract";

const SupplyContextWrapper = (props) => {

  let etherscan = process.env.REACT_APP_ETHERSCAN;
  let infura = process.env.REACT_APP_INFURA;
  let alchemy = process.env.REACT_APP_ALCHEMY;
  let pocket = process.env.REACT_APP_POCKET;

  const [supply, setSupply] = useState(useTotalSupply());
  const supplyMemo = useMemo(() => ({ supply, setSupply }), [supply, setSupply]);
  const provider = ethers.getDefaultProvider('homestead', {
    etherscan: { etherscan },
    infura: { infura },
    alchemy: { alchemy },
    pocket: { pocket }
  });

  const contract = new ethers.Contract(contractAddress, tastyApesAbi, provider);

  const fetchSupply = () => {
    setInterval(async () => {
      let value = await contract.totalSupply();
      setSupply(value.toString());
    }, 10000)
  }

  useEffect(() => {
    fetchSupply();
  }, []);

  return (
    <SupplyContext.Provider value={supplyMemo}>
      {props.children}
    </SupplyContext.Provider>
  );
}

export default SupplyContextWrapper;
