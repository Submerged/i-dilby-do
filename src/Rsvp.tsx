import {
    Box, Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement, NumberDecrementStepper, NumberIncrementStepper,
    NumberInput, NumberInputField, NumberInputStepper, Radio, RadioGroup, SimpleGrid
} from "@chakra-ui/react";
import {Formik, Form, Field, FieldInputProps, FormikProps} from 'formik';
import {BsFillPersonFill} from "react-icons/bs";
import {EmailIcon} from "@chakra-ui/icons";
import * as React from "react";
import {CONTAINER_MAX_WIDTH, HEADING_FONT_SIZE, StyledHeading} from "./const";

export const Rsvp = () => {
    return (
        <Container id="rsvp" maxWidth={CONTAINER_MAX_WIDTH} padding={[5,50,50]} textAlign='center' bg='custom.2' borderRadius={12}>
            <Box bg='custom.8' p={10} color='custom.1' borderRadius={12}>
                <StyledHeading pb={10} color='custom.1' fontSize={HEADING_FONT_SIZE}>RSVP</StyledHeading>
                <Formik initialValues={{}} onSubmit={()=>{console.log('ok')}}>
                    {(props) => (
                        <Form>
                            <Field name="name">
                                {({ field, form } : { field: FieldInputProps<string>, form: FormikProps<{ name: string, surname: string }> }) => (
                                    <FormControl>
                                        <FormLabel>Guest(s)</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents='none'
                                                children={<BsFillPersonFill color='custom.1' />}/>
                                            <Input {...field} placeholder='Name(s)' />
                                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                        </InputGroup>
                                    </FormControl>
                                )}
                            </Field>
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
                                </InputGroup>
                            </FormControl>

                            <RadioGroup>
                                <SimpleGrid p={2} columns={{base: 1, sm: 2}}>
                                    <Radio value='1'>Accepts With Pleasure</Radio>
                                    <Radio value='2'>Declines With Regret</Radio>
                                </SimpleGrid>
                            </RadioGroup>
                            <Button type="submit">Submit</Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Container>
    );
}