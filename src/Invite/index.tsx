import {Box, Container, Center, Stack, Text} from "@chakra-ui/react";
import euc from '../euc2.png';
import { WeddingCountdown } from "../WeddingCountdown";
import * as React from "react";

export const Invite = () => {
    return <Box>
        <Container id="invite" maxWidth={1000} >
            <Center sx={{textAlign: 'center'}}>
               <Box width='100%' border='30px solid #FFF' padding={[5,5,20]}>
                   <Stack spacing={10}>
                       <Text as='h1'>Charlotte & Dylan</Text>
                       <Text as='h3'>Would love your presence</Text>
                       <Text as='h3'>in celebrating their marriage</Text>
                       <WeddingCountdown />
                       <Text as='h2'>The Wilds Resort</Text>
                       <Text as='h3'>643 Salmonier Line, Route 90 South, Holyrood, NL, A0A 2R0</Text>
                       <Text as='h3'>With cocktail reception later in the evening</Text>
                   </Stack>
               </Box>
            </Center>
        </Container>
    </Box>;
}