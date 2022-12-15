import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);




const appId = process.env.REACT_APP_APP_ID;
const serverUrl = process.env.REACT_APP_SERVER_URL;
console.log(appId, serverUrl);
const theme = extendTheme({
  config: {
    initialColorMode: "light" 
  }
})
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    
      <BrowserRouter>
        <MoralisProvider
          appId={appId as string}
          serverUrl={serverUrl as string}
        >
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </MoralisProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
