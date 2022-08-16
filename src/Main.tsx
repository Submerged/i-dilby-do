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
    NumberDecrementStepper
} from "@chakra-ui/react";
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import {WeddingCountdown} from "./WeddingCountdown";
import * as React from "react";

export const Main = () => {
    return (
        <VStack fontFamily='Open Sans, sans-serif' color='gray.600' spacing='44px'>
            <Container textAlign='center' paddingTop={30}>
                <Heading fontFamily='Open sans, sans-serif' color='custom.4' >Oct 6, 2023</Heading>
                <WeddingCountdown />
            </Container>

            <Center>
                <Heading>Invitation</Heading>
            </Center>
            <Center textAlign='center'>
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
            <Center>
                <Heading>Schedule</Heading>
            </Center>
            <Center textAlign='center'>
                3:00 pm - The Wilds Resort - Ceremony
                <br/>
                <br/>
                - break -
                <br/>
                <br/>
                7:00 pm - The Wilds Resort - Cocktail & Hors d'ouvres reception
            </Center>
            <Center>
                <Heading>RSVP</Heading>
            </Center>

            <Center>
                <SimpleGrid columns={{sm: 1, md: 1}} spacing={10} >
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<BsFillPersonFill color='gray.300' />}
                        />
                        <Input type='tel' placeholder='Names' />
                    </InputGroup>
                    <NumberInput>
                        <NumberInputField placeholder='# Of Children'/>
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<MdEmail color='gray.300' />}
                        />
                        <Input type='email' placeholder='Email' />
                    </InputGroup>
                    <RadioGroup>
                        <Stack direction='row'>
                            <Radio value='1'>Accepts With Plesure</Radio>
                            <Radio value='2'>Declines With Regret</Radio>
                        </Stack>
                    </RadioGroup>
                    <Button onClick={() => console.log('click-a-do')}>Submit</Button>
                </SimpleGrid>
            </Center>

            <Center>
                <Heading>Accommodations</Heading>
            </Center>
            <Center textAlign='center'>                
                For more information on The Wilds Resort, check out their website.
                <br/>
                To book accommodations, please use wedding reservation code: WOOLFREY/PERRY.
                </Center>

            <Center fontFamily='Open sans, sans-serif' fontWeight= 'bold' textAlign='center' color='custom.1'>                
                 COVID Protocols 
                 </Center>
            <Center textAlign='center' color='custom.1'>      
                At this time, we do not intend to have any COVID protocols in place, but feel free to do what feels safe for you. Mask wearing, etc, is currently optional in Newfoundland.
            </Center>


            <Center>
                <Heading>Couple & Crew</Heading>
            </Center>
            <Center textAlign='center'>                
                See, ya gots da b'ys that builds the boats
                <br/>
                then there's the b'ys that sails 'em
                </Center>

        </VStack>
    )
}