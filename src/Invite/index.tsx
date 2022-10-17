import {Box, Container, Center, Stack, Text} from "@chakra-ui/react";
import * as React from "react";
export const Invite = () => {
    return <Box>
        <Container id="invite" maxWidth={1300} >
            <Center sx={{textAlign: 'center'}}>
               <Box width='100%' border='30px solid #FFF' padding={[50,50,50]} backgroundImage="url('/i-dilby-do/euc-bg.png')" backgroundSize={'cover'} backgroundPosition="center" backgroundRepeat="no-repeat">
                   <Stack spacing={10} marginBottom={160}>
                       <Text as='h1'>Charlotte & Dylan</Text>
                       <Text as='p'>Would love your presence</Text>
                       <Text as='p'>in celebrating their marriage</Text>
                       <Text as='p'>Friday |  Oct 6 | 2023</Text>
                       <Text as='p'>The Wilds Resort</Text>
                       <Text as='p'>643 Salmonier Line, Route 90 South, Holyrood, NL, A0A 2R0</Text>
                       <Text as='p'>With cocktail reception later in the evening</Text>
                   </Stack>
               </Box>
            </Center>
        </Container>
    </Box>;
}