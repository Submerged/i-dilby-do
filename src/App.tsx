import * as React from "react"
import {
    ChakraProvider,
    Box,
    Grid,
    Image,
    Center,
} from "@chakra-ui/react"
import { Header } from "./Header"
import {Main} from "./Main";
import {Footer} from "./Footer";
import {theme} from './theme';
import hero from './hero.png';
export const App = () => (
    <ChakraProvider theme={theme}>
        <Box height='100vh'>
            <Box bg='custom.3' textAlign="start" paddingLeft={[10,10,200]} paddingRight={[10,10,200]} paddingTop={10} paddingBottom={10}>
                <Grid>
                    <Header/>
                    <Center>
                        <Image borderRadius={12} maxHeight={600} objectFit='cover' src={hero} />
                    </Center>
                    <Main/>
                </Grid>
            </Box>
            <Footer/>
        </Box>
    </ChakraProvider>
)
