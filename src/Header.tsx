import * as React from "react"
import {Box, SimpleGrid, Link, useColorModeValue, chakra} from "@chakra-ui/react";
import "@fontsource/oswald"
import "@fontsource/pinyon-script"

const HEIGHT = '30px';
const HeaderBox = chakra(Box, {
    baseStyle:{
        height: HEIGHT,
        fontFamily: `'Times New Roman', sans-serif`,
        fontSize: '18px'
    }
});



export const Header = () => {
    const color = useColorModeValue('gray.800', 'gray.800')
    return (
        <Box paddingBottom={5}>
            <Box textAlign='center' p={2} fontFamily={`'Pinyon Script', sans-serif`} fontSize={78} color='#666'>Charlotte and Dylan</Box>
            <SimpleGrid columns={{base: 2, sm: 2, md: 2, lg:5, xl: 5}} textAlign='center' color={color}>
                <HeaderBox><Link>Invitation</Link></HeaderBox>
                <HeaderBox><Link>Schedule</Link></HeaderBox>
                <HeaderBox><Link>RSVP</Link></HeaderBox>
                <HeaderBox><Link>Accommodations</Link></HeaderBox>
                <HeaderBox><Link>Couple & Crew</Link></HeaderBox>
            </SimpleGrid>
        </Box>
    );
}