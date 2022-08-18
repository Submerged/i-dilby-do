import {
    Heading,
    Center,
    Input,
    SimpleGrid,
    InputGroup,
    InputLeftElement,
    RadioGroup,
    Radio,
    Stack,
    Button,
    VStack,
    Container,
    NumberInputField,
    NumberInput,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Divider,
    Box,
    Text,
    chakra,
    FormControl,
    FormLabel
} from "@chakra-ui/react";
import { BsFillPersonFill } from 'react-icons/bs';
import {WeddingCountdown} from "./WeddingCountdown";
import * as React from "react";
import { Link } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import "@fontsource/amatic-sc"
import "@fontsource/beau-rivage"
import "@fontsource/bonheur-royale"
import "@fontsource/alumni-sans-pinstripe"
import "@fontsource/reenie-beanie"
import "@fontsource/ruluko"
import "@fontsource/sacramento"
import "@fontsource/sarina"

const StyledHeading = chakra(Text, {
    baseStyle:{
        fontFamily: `Sacramento, sans-serif`,
        fontWeight: '700',
        color:'custom.4'
    }
});

const CONTAINER_WIDTH = '600px';
export const Main = () => {
    return (
        <VStack paddingTop={50} fontFamily= 'Ruluko, sans-serif' color='custom.4' spacing='44px'>
            <Container maxWidth={CONTAINER_WIDTH} p={50} textAlign='center' bg='custom.8' borderRadius={12} >
                <Heading fontFamily='Amatic SC, sans-serif' fontSize='3rem' color='custom.4' > - Oct 6, 2023 - </Heading>
                <WeddingCountdown />
            </Container>

            <Divider orientation='horizontal'/>
            <Divider orientation='horizontal' borderColor={'custom.7'}/>
            <Divider orientation='horizontal'/>

            <Container maxWidth={CONTAINER_WIDTH} p={50} textAlign='center' bg='custom.8' borderRadius={12}>
                <Center>
                    <StyledHeading fontSize={{ base: '24px', md: '40px', lg: '56px' }}>Invitation</StyledHeading>
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


            <Container maxWidth={CONTAINER_WIDTH} p={50} textAlign='center' bg='custom.8' borderRadius={12}>
                <Center>
                    <StyledHeading fontSize={{ base: '24px', md: '40px', lg: '56px' }}>Schedule</StyledHeading>
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

            <Container maxWidth={CONTAINER_WIDTH} padding={[5,50,50]} textAlign='center' bg='custom.2' borderRadius={12}>
                <Box bg='custom.8' p={10} color='custom.1' borderRadius={12}>
                    <StyledHeading pb={10} color='custom.1' fontSize={{ base: '24px', md: '40px', lg: '56px' }}>RSVP</StyledHeading>
                    <FormControl>
                        <FormLabel>Guest(s)</FormLabel>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<BsFillPersonFill color='custom.1' />}/>
                            <Input type='tel' placeholder='Name' />
                        </InputGroup>
                    </FormControl>

                    <FormControl>
                        <FormLabel># of Children</FormLabel>
                        <NumberInput min={0} max={12}>
                            <NumberInputField placeholder='Please count your offspring'/>
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <InputGroup>
                            <InputLeftElement
                                    pointerEvents='none'
                                    children={<EmailIcon color='custom.1' />}/>
                            <Input type='email' placeholder='For any changes or updates'  />
                            {/* <FormHelperText textAlign='left' >For any changes or updates</FormHelperText> */}
                        </InputGroup>
                    </FormControl>

                    <RadioGroup>
                        <SimpleGrid columns={{base: 1, sm: 2}}>
                            <Radio value='1'>Accepts With Pleasure</Radio>
                            <Radio value='2'>Declines With Regret</Radio>
                        </SimpleGrid>
                    </RadioGroup>
                    <Button onClick={() => console.log('click-a-do')}>Submit</Button>
                </Box>
            </Container>
            
            <Divider orientation='horizontal'/>
            <Divider orientation='horizontal' borderColor={'custom.7'}/>
            <Divider orientation='horizontal'/>
            
            <Container maxWidth={CONTAINER_WIDTH} p={50} textAlign='center' bg='custom.8' borderRadius={12}>
                <Center>
                    <StyledHeading fontSize={{ base: '24px', md: '40px', lg: '56px' }}>Accommodations</StyledHeading>
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

            <Container maxWidth={CONTAINER_WIDTH} p={[10,50,50]} textAlign='center' bg='custom.8' borderRadius={12}>
                <Center>
                    <StyledHeading fontSize={{ base: '24px', md: '40px', lg: '56px' }}>Couple & Crew</StyledHeading>
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