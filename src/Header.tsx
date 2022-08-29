import * as React from "react"
import {Box, SimpleGrid, Container, chakra} from "@chakra-ui/react";

import { HashLink } from 'react-router-hash-link';

const HeaderBox = chakra(Box, {
    baseStyle:{
        fontFamily: `Open Sans`,
        fontSize: '20px'
    }
});

export const Header = () => {
    return (
        <Container maxWidth={800} p={10}>
            <SimpleGrid columns={{base: 1, sm: 2, md: 2, lg:4, xl: 4}} textAlign='center' color='custom.4' pt={4} pb={4}>
                <HeaderBox><HashLink smooth to="#invitation">Invitation</HashLink></HeaderBox>
                <HeaderBox><HashLink smooth to="#schedule">Schedule</HashLink></HeaderBox>
                <HeaderBox><HashLink smooth to="#rsvp">RSVP</HashLink></HeaderBox>
                <HeaderBox><HashLink smooth to="#accomodations">Accommodations</HashLink></HeaderBox>
            </SimpleGrid>
        </Container>
    );
}