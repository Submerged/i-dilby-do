import * as React from "react"
import {
    ChakraProvider,
    Box,
    Image,
    Center,
} from "@chakra-ui/react"
import {Footer} from "./Footer";
import {theme} from './theme';
import hero from './hero.jpg';
import { WeddingCountdown } from './WeddingCountdown';
import { Main } from './Main';
import { Header } from './Header';

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box>
            <Box height='100vh'>
                <Box width='100%'>
                    <Header/>
                </Box>
                <Box>
                    <Center position='relative'>
                        <Image maxHeight={700} objectFit='cover' src={hero} />
                        <Box position='absolute' top={0} textAlign='center' fontFamily={`'Dancing Script', sans-serif`} fontWeight={500} fontSize={{ base: '36px', sm: '30px', md: '72px', lg: '80px' }} color='custom.4'>Charlotte & Dylan</Box>
                    </Center>
                </Box>
                <Box p={20}>
                    <WeddingCountdown />
                </Box>
                <Box>
                    <Main/>
                </Box>
                <Footer/>
            </Box>
        </Box>
    </ChakraProvider>
)
