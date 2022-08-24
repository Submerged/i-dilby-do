import * as React from "react"
import {Box, SimpleGrid, Link, chakra} from "@chakra-ui/react";
import "@fontsource/oswald"
import "@fontsource/allura"
import "@fontsource/bonheur-royale"

const HeaderBox = chakra(Box, {
    baseStyle:{
        fontFamily: `Ruluko, sans-serif`,
        fontSize: '16px'
    }
});

export const Header = () => {
    return (
<<<<<<< HEAD
        <Box p={4}>
            <Box textAlign='center' fontFamily={`'Sacramento', sans-serif`} fontSize={84} color='custom.4'>Charlotte & Dylan</Box>
=======
        <Box >
            <Box p={50} textAlign='center' fontFamily={`'Sacramento', sans-serif`} fontSize={{ base: '24px', md: '40px', lg: '56px' }} bgGradient='radial(custom.8, custom.8, custom.8, custom.8, custom.3, custom.3, custom.3)' color='custom.4'>Charlotte & Dylan</Box>
>>>>>>> 26e75d4e47a93f73d768f1cb240bdb6a36415e31
            <SimpleGrid columns={{base: 2, sm: 2, md: 2, lg:4, xl: 4}} textAlign='center' color='custom.4' pt={4}>
                <HeaderBox><Link>Invitation</Link></HeaderBox>
                <HeaderBox><Link>Schedule</Link></HeaderBox>
                <HeaderBox><Link>RSVP</Link></HeaderBox>
                <HeaderBox><Link>Accommodations</Link></HeaderBox>
            </SimpleGrid>
        </Box>
    );
}