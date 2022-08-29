import {
    Button,
    Container,
    Center,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement, NumberDecrementStepper, NumberIncrementStepper,
    NumberInput, NumberInputField, NumberInputStepper, Radio, RadioGroup, SimpleGrid
} from "@chakra-ui/react";
import {Formik, Form, Field, FieldInputProps, FormikProps} from 'formik';
import axios from 'axios';
import {BsFillPersonFill} from "react-icons/bs";
import {EmailIcon} from "@chakra-ui/icons";
import * as React from "react";
import { StyledHeading, HEADING_FONT_SIZE } from "./const";

const RSVP_URL = 'https://i0mwfydiz0.execute-api.us-east-1.amazonaws.com/prod/rsvp';

const handleSubmit = (values: any) => {
    const { name, children, email, acceptance } = values;

    axios.post(RSVP_URL, {
        Name: name,
        Children: children,
        Email: email,
        Attendance: acceptance
    })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch( error => {
            console.log(error);
        });
}

export const Rsvp = () => {
    return (
        <Container id='rsvp' p={10} bg='#F9F9F9' borderRadius={15}>
            <Center><StyledHeading fontSize={HEADING_FONT_SIZE}>RSVP</StyledHeading></Center>
            <Center>
                <Formik initialValues={{name: '', children: 0, email: '', acceptance: 0}} onSubmit={handleSubmit}>
                    {(props) => (
                        <Form>
                            <Field name="name">
                                {({ field, form } : { field: FieldInputProps<string>, form: FormikProps<{ name: string }> }) => (
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

                            <Field name="children">
                                {({ field, form } : { field: FieldInputProps<string>, form: FormikProps<{ children: string }> }) => (
                                    <FormControl>
                                        <FormLabel># of Children</FormLabel>
                                        <NumberInput min={0} max={12}>
                                            <NumberInputField {...field} placeholder='Please count your offspring'/>
                                            <NumberInputStepper>
                                                <NumberIncrementStepper />
                                                <NumberDecrementStepper />
                                            </NumberInputStepper>
                                        </NumberInput>
                                    </FormControl>
                                )}
                            </Field>

                            <Field name="email">
                                {({ field, form } : { field: FieldInputProps<string>, form: FormikProps<{ email: string }> }) => (
                                    <FormControl>
                                        <FormLabel>Email address</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents='none'
                                                children={<EmailIcon color='custom.1' />}/>
                                            <Input {...field} type='email' placeholder='For any changes or updates'  />
                                        </InputGroup>
                                    </FormControl>
                                )}
                            </Field>

                            <Field name="acceptance">
                                {({ field, form } : { field: FieldInputProps<string>, form: FormikProps<{ acceptance: string}> }) => (
                                    <FormControl>
                                        <RadioGroup {...field}>
                                            <SimpleGrid columns={{base: 1, sm: 2}}>
                                                <Radio {...field} p={2} value='Accept'>Accepts With Pleasure</Radio>
                                                <Radio {...field} p={2} value='Decline'>Declines With Regret</Radio>
                                            </SimpleGrid>
                                        </RadioGroup>
                                    </FormControl>
                                )}
                            </Field>

                            <Center><Button type="submit" colorScheme='teal' variant='solid'>Submit</Button></Center>
                        </Form>
                    )}
                </Formik>
            </Center>
        </Container>
    );
}