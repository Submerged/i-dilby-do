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
    Box
} from "@chakra-ui/react";
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import {WeddingCountdown} from "./WeddingCountdown";
import * as React from "react";
import "@fontsource/amatic-sc"

export const Main = () => {
    return (
        <VStack paddingTop={50} fontFamily='Open Sans, sans-serif' color='gray.600' spacing='44px'>
            <Container p={50} textAlign='center' bg='custom.2' borderRadius={12} >
                <Heading fontFamily='Amatic SC, sans-serif' fontSize='300%' color='custom.3' > - Oct 6, 2023 - </Heading>
                <WeddingCountdown />
            </Container>

            <Divider orientation='horizontal'/>
            <Divider orientation='horizontal' borderColor={'custom.7'}/>
            <Divider orientation='horizontal'/>

            <Container p={50} textAlign='center' bg='custom.8' borderRadius={12}>
                <Center>
                    <Heading>Invitation</Heading>
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


            <Container p={50} textAlign='center' bg='custom.8' borderRadius={12}>
                <Center>
                    <Heading>Schedule</Heading>
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

            <Container p={100} textAlign='center' bg='custom.2' borderRadius={12}>
                <Box bg='custom.8' p={10} color='custom.1' borderRadius={12}>
                    <Center>
                        <Heading pb={10} >RSVP</Heading>
                    </Center>            
                    <Center>
                        <SimpleGrid columns={{sm: 1, md: 1}} spacing={10} >
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<BsFillPersonFill color='custom.1' />}
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
                                    children={<MdEmail color='custom.1' />}
                                />
                                <Input type='email' placeholder='Email' />
                            </InputGroup>
                            <RadioGroup>
                                <Stack direction='row'>
                                    <Radio value='1'>Accepts With Pleasure</Radio>
                                    <Radio value='2'>Declines With Regret</Radio>
                                </Stack>
                            </RadioGroup>
                            <Button onClick={() => console.log('click-a-do')}>Submit</Button>
                        </SimpleGrid>
                    </Center>
                    </Box>
                </Container>
            
            <Divider orientation='horizontal'/>
            <Divider orientation='horizontal' borderColor={'custom.7'}/>
            <Divider orientation='horizontal'/>
            
            <Container p={50} textAlign='center' bg='custom.8' borderRadius={12}>
                <Center>
                    <Heading>Accommodations</Heading>
                </Center>

                <Center textAlign='center'> 
                    <br/>               
                    For more information on The Wilds Resort, check out their website.
                    To book accommodations, please use wedding reservation code: WOOLFREY/PERRY.
                    <br/>   
                    <br/>   
                 </Center>

                    <Container bg= 'custom.3' p={10} borderRadius={12} >
                        <Center fontFamily='Open sans, sans-serif' fontWeight= 'bold' textAlign='center' color='custom.4'>                
                            COVID Protocols 
                            </Center>
                        <Center textAlign='center' fontSize= 'sm' color='custom.4'>      
                            <br/>
                            At this time, we do not intend to have any COVID protocols in place, but feel free to do what feels safe for you. Mask wearing, etc, is currently optional in Newfoundland.
                        </Center>
                    </Container>
            </Container>

            <Divider orientation='horizontal'/>
            <Divider orientation='horizontal' borderColor={'custom.7'}/>
            <Divider orientation='horizontal'/>

            <Container p={50} textAlign='center' bg='custom.8' borderRadius={12}>
                <Center>
                    <Heading>Couple & Crew</Heading>
                </Center>
                <Center textAlign='center'>    
                    <br/>            
                    See, ya gots da b'ys that builds the boats
                    <br/>
                    then there's the b'ys that sails 'em
                    </Center>
            </Container>

            <Divider orientation='horizontal'/>
            <Divider orientation='horizontal'/>

        </VStack>
    )
}