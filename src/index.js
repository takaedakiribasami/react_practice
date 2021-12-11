import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import theme from "./theme/theme"
import { ChakraProvider } from "@chakra-ui/react"

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS={false}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  rootElement
);
