import * as React from "react"
import {Box, SimpleGrid, Container, chakra} from "@chakra-ui/react";

import { HashLink } from 'react-router-hash-link';
import {useSearchParams} from "react-router-dom";

const HeaderBox = chakra(Box, {
    baseStyle:{
        fontFamily: `Poiret One`,
        fontSize: '18px'
    }
});

export const Header = () => {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('goose');
    return (
        <Container maxWidth='100vw' p={[2,2,10]} bg='#EFEFEFCC'>
            <Container maxWidth='700px'>
                <SimpleGrid columns={{base: 1, sm: 2, md: 2, lg:4, xl: 4}} textAlign='center' color='custom.4'>
                    <HeaderBox><HashLink smooth to={`?goose=${code}#invite`}>Invitation</HashLink></HeaderBox>
                    <HeaderBox><HashLink smooth to={`?goose=${code}#schedule`}>Schedule</HashLink></HeaderBox>
                    <HeaderBox><HashLink smooth to={`?goose=${code}#rsvp`}>RSVP</HashLink></HeaderBox>
                    <HeaderBox><HashLink smooth to={`?goose=${code}#accommodations`}>Accommodations</HashLink></HeaderBox>
                </SimpleGrid>
            </Container>
        </Container>
    );
}