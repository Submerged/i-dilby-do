import * as React from "react"
import {Box, SimpleGrid, Link, chakra} from "@chakra-ui/react";
import "@fontsource/oswald"
import "@fontsource/allura"
import "@fontsource/bonheur-royale"

const HeaderBox = chakra(Box, {
    baseStyle:{
        fontFamily: `Ruluko, sans-serif`,
        fontSize: '20px'
    }
});

export const Header = () => {
    return (
        <Box>
            <Box textAlign='center' fontFamily={`'Sacramento', sans-serif`} fontSize={{ base: '42px', sm: '60px', md: '72px', lg: '80px' }} color='custom.4'>Charlotte & Dylan</Box>
            <SimpleGrid columns={{base: 2, sm: 2, md: 2, lg:4, xl: 4}} textAlign='center' color='custom.4' pt={4} pb={4}>
                <HeaderBox><Link>Invitation</Link></HeaderBox>
                <HeaderBox><Link>Schedule</Link></HeaderBox>
                <HeaderBox><Link>RSVP</Link></HeaderBox>
                <HeaderBox><Link>Accommodations</Link></HeaderBox>
            </SimpleGrid>
        </Box>
    );
}