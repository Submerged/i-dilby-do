import {
    Center,
    VStack,
    Container,
    Text,
    Box,
} from "@chakra-ui/react";
import * as React from "react";
import { Link } from '@chakra-ui/react'
import { Rsvp_dead } from "./Rsvp_dead";
import { HEADING_FONT_SIZE, StyledHeading } from "./const";


export const Main = () => {
    return (
        <VStack fontFamily= 'Ruluko, sans-serif' color='#444' spacing={0}>
            <Box width="100%" id="invitation" p={10} textAlign='center' bg='#CDCFD1'>
                <Center>
                    <StyledHeading fontSize={HEADING_FONT_SIZE}>Invitation</StyledHeading>
                </Center>
                <Center textAlign='center'>
                    <br/>
                    Charlotte Woolfrey & Dylan Perry
                    <br/>
                    would love your presence
                    in celebrating their marriage
                    <br/>
                    <br/>
                    Friday | October 6 | 2023
                    <br/>
                    Three o'clock in the afternoon
                    <br/>
                    <br/>
                    The Wilds Resort
                    <br/>
                    643 Salmonier Line, Route 90 South, Holyrood, NL, A0A 2R0
                    <br/>
                    <br/>
                    With cocktail reception later in the evening.
                </Center>
            </Box>

            <Box width='100%' id="schedule" p={10} textAlign='center' borderColor='custom.7'>
                <Center>
                    <StyledHeading fontSize={HEADING_FONT_SIZE}>Schedule</StyledHeading>
                </Center>
                <Center textAlign='center'>
                    <br/>
                    3:00 pm - The Wilds Resort - Ceremony
                    <br/>
                    <br/>
                    - break -
                    <br/>
                    <br/>
                    7:00 pm - The Wilds Resort - Cocktail & Hors d'ouvres reception
                </Center>
            </Box>

            <Box width='100%'>
                <Rsvp_dead />
            </Box>
            
            <Box width='100%'>
                <Container p={10} id="accomodations" textAlign='center' borderRadius={12}>
                    <Center>
                        <StyledHeading fontSize={HEADING_FONT_SIZE}>Accommodations</StyledHeading>
                    </Center>

                    <Text textAlign='center' p={[2,10,10]}>
                        For more information on The Wilds Resort, check out {' '}
                        <Link href= 'https://thewilds.ca' isExternal color='teal.500'>
                            their website.
                        </Link>
                        <br/>
                        To book accommodations, please use wedding reservation code: WOOLFREY/PERRY.
                    </Text>

                    <Text bg= 'custom.3' p={[2,10,10]} borderRadius={12} >
                        <Center fontFamily='Open sans, sans-serif' fontWeight= 'bold' textAlign='center' color='custom.4'>
                            COVID Protocols
                        </Center>
                        <Center textAlign='center' color='custom.4'>
                            <br/>
                            At this time, we do not intend to have any COVID protocols in place, but feel free to do what feels safe for you. Mask wearing, etc, is currently optional in Newfoundland.
                        </Center>
                    </Text>
                </Container>
            </Box >

            <Box p={20} width='100%' bg='custom.8'>
                <Container id="couple" textAlign='center' borderRadius={12}>
                    <Center>
                        <StyledHeading fontSize={HEADING_FONT_SIZE}>Couple & Crew</StyledHeading>
                    </Center>
                    <Center textAlign='center'>
                        <br/>
                        See, ya gots da b'ys that builds the boats
                        <br/>
                        then there's the b'ys that sails 'em
                    </Center>
                </Container>
            </Box>

        </VStack>
    )
}