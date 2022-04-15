import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DAppProvider, Mainnet } from "@usedapp/core";

const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: 'https://mainnet.infura.io/v3/94fa911f0b294bd185e2229ee1b616ec'
  },
  networks: [Mainnet],
  autoConnect: false,
};

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
