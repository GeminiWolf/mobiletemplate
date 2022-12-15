import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const colors = {
    brand: {
        primary: '#6941C6',
        secondary: '#F5F5F5',
        tertiary: '#989595',
        text: '#0F0303'
    },
   
  }
  
  const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
  
  export const theme = extendTheme({
    colors,
    config
  });
  