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
import { Invite } from './Invite';
import { Schedule } from './Schedule';
import { Rsvp } from './Rsvp';
import { Accommodation } from './Accommodation';
import { CoupleCrew } from './CoupleCrew';
import euc from "./euc2.png";

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box>
            <Box width='100%' sx={{ position: 'sticky', top: '0', zIndex:20 }}>
                <Header/>
            </Box>
            <Invite />
            <Center p={50}>
                <Image maxHeight={50} objectFit='cover' src={euc} />
            </Center>
            <Schedule />
            <Center p={50}>
                <Image maxHeight={50} objectFit='cover' src={euc} />
            </Center>
            <Rsvp />
            <Center p={50}>
                <Image maxHeight={50} objectFit='cover' src={euc} />
            </Center>
            <Accommodation />
            <CoupleCrew />
            {/*<Box>*/}
            {/*    <Center position='relative'>*/}
            {/*        <Image maxHeight={700} objectFit='cover' src={hero} borderRadius={10}/>*/}
            {/*        <Box position='absolute' top={0} textAlign='center' fontFamily={`'Dancing Script', sans-serif`} fontWeight={500} fontSize={{ base: '36px', sm: '30px', md: '72px', lg: '90px' }} color='#666'>Charlotte & Dylan</Box>*/}
            {/*    </Center>*/}
            {/*</Box>*/}
            {/*<Box p={20}>*/}
            {/*    <WeddingCountdown />*/}
            {/*</Box>*/}
            {/*<Box>*/}
            {/*    <Main/>*/}
            {/*</Box>*/}
            <Footer/>
        </Box>
    </ChakraProvider>
)
