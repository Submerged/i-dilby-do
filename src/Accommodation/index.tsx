import {Box, Container, Center, Stack, Text, Link} from "@chakra-ui/react";
import * as React from "react";

export const Accommodation = () => {
    return (
        <Container id="accommodations" maxWidth='100vw' p={0} pt={10}>
            <Center sx={{textAlign: 'center'}}>
                <Box width='100%' bg='#CCC' pb={[50,50,100]} pt={[20]}>
                    <Text as='h2'>Accommodation</Text>
                    <Text textAlign='center' p={[2,10,10]}>
                        For more information on The Wilds Resort, check out {' '}
                        <Link href= 'https://thewilds.ca' isExternal color='teal.500'>
                            their website.
                        </Link>
                        <br/>
                        To book accommodations, please use wedding reservation code: WOOLFREY/PERRY.
                    </Text>
                    <Text as='h2'>
                        COVID Protocols
                    </Text>
                    <Center textAlign='center' color='custom.4'>
                        <br/>
                        At this time, we do not intend to have any COVID protocols in place, but feel free to do what feels safe for you.
                        <br />
                        Mask wearing, etc, is currently optional in Newfoundland.
                    </Center>
                </Box>
            </Center>
        </Container>
    );
}