import './Mint.css';
import React, { useEffect, useState, useContext } from 'react'
import { useEthers, Mainnet } from "@usedapp/core";
import { ethers } from "ethers";
import { Alert, AlertTitle, Collapse, CircularProgress } from '@mui/material';
import { useContractMethod, useBalanceOf } from '../hooks/utils.js'
import { SupplyContext } from '../context/appContext';

const Mint = () => {

  const { activateBrowserWallet, account, chainId, error } = useEthers();
  const [mintAmount, setMintAmount] = useState(1);
  const { state, send, resetState } = useContractMethod("mint", "Mint");
  const [activateError, setActivateError] = useState('')
  const { supply, setSupply } = useContext(SupplyContext);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const balanceOf = useBalanceOf();
  const mintPrice = 0.02;
  const maxFreeMint = 555;
  const maxFreeMintPerAccount = 5;


  useEffect(() => {
    if (error || state.status === 'Exception') {
      setActivateError(error?.message ?? state?.errorMessage);
      setOpen2(false);
      setOpen(true);
      resetState();
      setTimeout(() => setOpen(false), 3000);
    }
    if (state.status === 'Success') {
      setOpen(false);
      setOpen2(true);
      resetState();
      setTimeout(() => setOpen2(false), 3000);
    }
    console.log(state);
  }, [chainId, error, state, balanceOf]);

  const handleConnectWallet = () => {
    setActivateError('')
    activateBrowserWallet()
  }

  const calculatePrice = () => {
    if (supply < maxFreeMint && !(maxFreeMintPerAccount - balanceOf <= 0)) {
      if (mintAmount >= maxFreeMintPerAccount - balanceOf) {
        return (mintAmount - (maxFreeMintPerAccount - balanceOf)) * mintPrice
      }
      return 0;
    } else {
      return mintPrice * mintAmount;
    }
  }

  const mint = () => {
    console.log("balanceof:" + balanceOf?.toString());
    console.log("price:" + calculatePrice());
    send(mintAmount, { value: ethers.utils.parseEther(calculatePrice().toString()) });
    console.log(state);
  }

  const decreaseNumber = () => {
    if (mintAmount === 1)
      return;
    setMintAmount(prevState => prevState - 1);

  }

  const increaseNumber = () => {
    if (mintAmount === 20)
      return;
    setMintAmount(prevState => prevState + 1);

  }


  return (
    <div className="mint-container">
      <Collapse in={open}>
        <Alert severity="error" className="box">
          <AlertTitle>Error</AlertTitle>
          <div className="msg">{activateError}</div>
        </Alert>
      </Collapse>
      <Collapse in={open2}>
        <Alert severity="success" className="box">
          <AlertTitle>Success</AlertTitle>
          <div className="msg">Successful Minted</div>
        </Alert>
      </Collapse>
      {
        supply ?
          <>
            <div className="number-of-nft">{supply}/5555 Minted</div>
            <span className="number-of-nft">0.02 ETH each, first 555 free</span>
            <span className="number-of-nft">5 free per wallet, 20 max per txn</span>
            {chainId !== Mainnet.chainId && <p className="warning">Please change to the correct network</p>}
            {!account && <button onClick={handleConnectWallet} className="connect-btn btn"> Connect </button>}
            {account && <p className="account">Account: {account}</p>}
            {account && chainId === Mainnet.chainId && <div className="mint-button-container">
              <div className="operand-container">
                <button id="sub" className="operand" onClick={decreaseNumber}>-</button>
                <span id="number">{mintAmount}</span>
                <button id="plus" className="operand" onClick={increaseNumber}>+</button>
              </div>
              {state.status === "Mining" ? <button onClick={mint} className="mint-btn btn" disabled>Minting...</button> : <button onClick={mint} className="mint-btn btn">Mint</button>}
            </div>}
          </>
          :
          <div className="number-of-nft"><CircularProgress color="error" /></div>
      }
    </div>
  );
}

export default Mint;
