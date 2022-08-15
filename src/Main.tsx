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
                <Heading fontFamily='Open sans, sans-serif' color='darksalmon' >Oct 6, 2023</Heading>
                <WeddingCountdown />
            </Container>

            <Center>
                <Heading>Invitation</Heading>
            </Center>
            <Center textAlign='center'>
                Charlotte & Dylan
                <br/>
                Would love your presence
                <br/>
                in celebrating their marriage
                <br/>
                Friday | October 6 | 2023
                <br/>
                Three o'clock in the afternoon
                <br/>
                The Wilds Resort
                <br/>
                643 Salmonier Line, Route 90 South, Holyrood, NL, A0A 2R0
                <br/>
                With cocktail reception later in the evening.
            </Center>
            <Center>
                <Heading>Schedule</Heading>
            </Center>
            <Center textAlign='left'>
                3:00 pm - The Wilds Resort - Ceremony
                <br/>
                - break -
                <br/>
                7:00 pm - The Wilds Resort - Cocktail & Hors d'ouvres reception
                <br/>
            </Center>
            <Center>
                <Heading>RSVP</Heading>
            </Center>

            <Center>
                <SimpleGrid columns={{sm: 1, md: 1}} spacing={10}>
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
        </VStack>
    )
}