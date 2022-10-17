import {Box, Container, Center, Stack, Text} from "@chakra-ui/react";
import euc from '../euc2.png';
import { WeddingCountdown } from "../WeddingCountdown";
import * as React from "react";

export const CoupleCrew = () => {
    return <Box>
        <Container maxWidth={1000} >
            <Center sx={{textAlign: 'center'}}>
                <Box width='100%' padding={[5,5,20]}>
                    <Stack spacing={10}>
                        <Text as='h2'>Couple & Crew</Text>
                    </Stack>
                </Box>
            </Center>
        </Container>
    </Box>;
}