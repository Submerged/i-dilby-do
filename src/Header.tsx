import * as React from "react"
import {Box, SimpleGrid, Link, chakra} from "@chakra-ui/react";
import "@fontsource/oswald"
import "@fontsource/allura"
import "@fontsource/bonheur-royale"

const HEIGHT = '30px';
const HeaderBox = chakra(Box, {
    baseStyle:{
        height: HEIGHT,
        fontFamily: `Ruluko, sans-serif`,
        fontSize: '16px'
    }
});

export const Header = () => {
    return (
        <Box p={4}>
            <Box textAlign='center' fontFamily={`'Sacramento', sans-serif`} fontSize={84} color='custom.4'>Charlotte & Dylan</Box>
            <SimpleGrid columns={{base: 2, sm: 2, md: 2, lg:4, xl: 4}} textAlign='center' color='custom.4' pt={4}>
                <HeaderBox><Link>Invitation</Link></HeaderBox>
                <HeaderBox><Link>Schedule</Link></HeaderBox>
                <HeaderBox><Link>RSVP</Link></HeaderBox>
                <HeaderBox><Link>Accommodations</Link></HeaderBox>
            </SimpleGrid>
        </Box>
    );
}