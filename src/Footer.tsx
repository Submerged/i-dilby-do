import {Box, SimpleGrid} from "@chakra-ui/react";
import {HashLink} from "react-router-hash-link";
import * as React from "react";

export const Footer = () => {
    return (
        <Box p={20} height={100} bg='primary' color='#CCC' >
            <SimpleGrid columns={{base: 1, sm: 2, md: 2, lg:4, xl: 4}} textAlign='center' color='custom.4'>
                <HashLink smooth to="#invite">Invitation</HashLink>
                <HashLink smooth to="#schedule">Schedule</HashLink>
                <HashLink smooth to="#rsvp">RSVP</HashLink>
                <HashLink smooth to="#accommodations">Accommodations</HashLink>
            </SimpleGrid>
        </Box>
);
}