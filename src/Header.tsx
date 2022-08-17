import * as React from "react"
import {Box, SimpleGrid, Link, chakra} from "@chakra-ui/react";
import "@fontsource/oswald"
import "@fontsource/allura"
import "@fontsource/arizonia"

const HEIGHT = '30px';
const HeaderBox = chakra(Box, {
    baseStyle:{
        height: HEIGHT,
        fontFamily: `Amatic SC, sans-serif`,
        fontSize: '21px'
    }
});

export const Header = () => {
    return (
        <Box p={2} >
            <Box textAlign='center' fontFamily={`'Arizonia', sans-serif`} fontSize={78} color='custom.1'>Charlotte & Dylan</Box>
            <SimpleGrid columns={{base: 2, sm: 2, md: 2, lg:5, xl: 5}} textAlign='center' color='custom.2'>
                <HeaderBox><Link>Invitation</Link></HeaderBox>
                <HeaderBox><Link>Schedule</Link></HeaderBox>
                <HeaderBox><Link>RSVP</Link></HeaderBox>
                <HeaderBox><Link>Accommodations</Link></HeaderBox>
                <HeaderBox><Link>Couple & Crew</Link></HeaderBox>
            </SimpleGrid>
        </Box>
    );
}