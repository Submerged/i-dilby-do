import {Box, Container, Center, Text} from "@chakra-ui/react";
import * as React from "react";

export const Registry = () => {
    return <Box>
        <Container id="registry" maxWidth={1000} p={0} pt={10}>
            <Center sx={{textAlign: 'center'}}>
                <Box width='100%' padding={[5,5,10]}>
                    <Text as='h2'>Registry</Text>
                    <Text>
                        <Center textAlign='center' paddingLeft={[5,5,100]} paddingRight={[5,5,100]}>
                            <br/>
                            Your presence at our wedding is the best present of all.
                            However, if you’d like to give us a gift, we would appreciate contributions toward our honeymoon fund,
                            which will help us go on our dream trip to Europe together after we get married
                        </Center>
                    </Text>
                </Box>
            </Center>
        </Container>
    </Box>;
}