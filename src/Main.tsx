import {
    Heading,
    Center,
    VStack,
    Container,
    Divider,
    Text,
} from "@chakra-ui/react";
import {WeddingCountdown} from "./WeddingCountdown";
import * as React from "react";
import { Link } from '@chakra-ui/react'
import "@fontsource/amatic-sc"
import "@fontsource/beau-rivage"
import "@fontsource/bonheur-royale"
import "@fontsource/alumni-sans-pinstripe"
import "@fontsource/reenie-beanie"
import "@fontsource/ruluko"
import "@fontsource/sacramento"
import "@fontsource/sarina"
import { Rsvp } from "./Rsvp";
import {CONTAINER_MAX_WIDTH, HEADING_FONT_SIZE, StyledHeading} from "./const";


export const Main = () => {
    return (
        <VStack paddingTop={50} fontFamily= 'Ruluko, sans-serif' color='custom.4' spacing='44px'>
            <Container maxWidth={CONTAINER_MAX_WIDTH} p={50} textAlign='center' bg='custom.8' borderRadius={12} >
                <Heading fontFamily='Amatic SC, sans-serif' fontSize={{ base: '32px', sm: '40px', md: '40px', lg: '56px' }} color='custom.4' > - Oct 6, 2023 - </Heading>
                <WeddingCountdown />
            </Container>

            <Divider orientation='horizontal'/>
            <Divider orientation='horizontal' borderColor={'custom.7'}/>
            <Divider orientation='horizontal'/>

            <Container id="invitation" maxWidth={CONTAINER_MAX_WIDTH} p={50} textAlign='center' bg='custom.8' borderRadius={12}>
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
            </Container>

            <Divider orientation='horizontal'/>
            <Divider orientation='horizontal' borderColor={'custom.7'}/>
            <Divider orientation='horizontal'/>


            <Container id="schedule" maxWidth={CONTAINER_MAX_WIDTH} p={50} textAlign='center' bg='custom.8' borderRadius={12}>
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
            </Container>

            <Divider orientation='horizontal'/>
            <Divider orientation='horizontal' borderColor={'custom.7'}/>
            <Divider orientation='horizontal'/>

            <Rsvp />
            
            <Divider orientation='horizontal'/>
            <Divider orientation='horizontal' borderColor={'custom.7'}/>
            <Divider orientation='horizontal'/>
            
            <Container id="accomodations" maxWidth={CONTAINER_MAX_WIDTH} padding={[5,50,50]} textAlign='center' bg='custom.8' borderRadius={12}>
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

            <Divider orientation='horizontal'/>
            <Divider orientation='horizontal' borderColor={'custom.7'}/>
            <Divider orientation='horizontal'/>

            <Container id="couple" maxWidth={CONTAINER_MAX_WIDTH} padding={[5,50,50]} textAlign='center' bg='custom.8' borderRadius={12}>
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

            {/*<Divider orientation='horizontal'/>*/}
            {/*<Divider orientation='horizontal'/>*/}

        </VStack>
    )
}