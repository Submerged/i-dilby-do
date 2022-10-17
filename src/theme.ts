import { extendTheme  } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
      global:{
          body: {
              fontSize: [15, 15, 22],
              bg: '#EFEFEF',
          },
          h1: {
              fontSize: [15, 30, 50],
          },
          h2: {
              fontSize: [20, 20, 30],
          },
          h3: {
              fontSize: [18, 18, 24],
          },
      }
    },
});