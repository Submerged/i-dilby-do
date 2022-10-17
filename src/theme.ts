import { extendTheme  } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        primary: '#263430',
        primaryLight: '#7D8275',
        gray: '#CDCFD1',
        charcoal: '#181818',
    },
    components: {
        Button: {
            defaultProps: {
              colorScheme: 'blackAlpha',
            }
        },
        FormLabel: {
            defaultProps: {
                variant: 'text',
            }
        },
        Input: {
            defaultProps: {
                variant: 'text',
            }
        },
        NumberInput: {
            defaultProps: {
                variant: 'text',
            }
        }
    },
    styles: {
        global:{
            body: {
                fontFamily: 'Poiret One',
                color: 'primary',
                fontSize: [15, 15, 24],
                bg: '#EFEFEF',
            },
            input: {
                border: '1px solid #121212',
                _placeholder:{
                    color: '#444',
                    fontFamily: 'Open Sans',
                },
            },
            label: {
                textColor: '#222',
            },
            button: {
                colorScheme: 'red',
            },
            h1: {
                fontSize: [15, 30, 70],
                fontFamily: 'Great Vibes, cursive',
            },
            h2: {
                fontFamily: 'Sacramento, cursive',
                fontSize: [20, 24, 50],
            },
            h4: {
                fontSize: [14, 16, 22],
            },
            p: {
                fontColor: '#444444',
                fontFamily: 'Poiret One',
                fontSize: [18, 18, 24],
            },
        }
    },
});