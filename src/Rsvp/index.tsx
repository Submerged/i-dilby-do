import {
    Alert,
    AlertIcon,
    Button,
    Text,
    Container,
    Center,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Radio,
    RadioGroup,
    SimpleGrid,
    Spinner,
} from "@chakra-ui/react";
import {Formik, Form, Field, FieldInputProps, FormikProps} from 'formik';
import axios from 'axios';
import {BsFillPersonFill} from "react-icons/bs";
import {EmailIcon} from "@chakra-ui/icons";
import * as React from "react";
import {useState} from "react";

const RSVP_URL = 'https://i0mwfydiz0.execute-api.us-east-1.amazonaws.com/prod/rsvp';

const API_INACTIVE = 0;
const API_SUCCESS = 1;
const API_PENDING = 2;
const API_ERROR = 3;

export const Rsvp = () => {
    const [apiState, setApiState] = useState(API_INACTIVE);
    const handleSubmit = (values: any) => {
        const { name, children, email, acceptance } = values;
        setApiState(API_PENDING);
        axios.post(RSVP_URL, {
            Name: name,
            Children: children,
            Email: email,
            Attendance: acceptance
        })
            .then(res => {
                setApiState(API_SUCCESS);
            })
            .catch( error => {
                setApiState(API_ERROR);
                console.log(error);
            });
    }

    return (
        <Container id='rsvp' p={[10,10,100]} maxWidth={1000}>
            <Center paddingBottom={10}><Text as='h2'>RSVP</Text></Center>
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
                                                children={<BsFillPersonFill />}/>
                                            <Input {...field} placeholder='Name(s)' />
                                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                        </InputGroup>
                                    </FormControl>
                                )}
                            </Field>
                            <br />
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
                            <br />
                            <Field name="email">
                                {({ field, form } : { field: FieldInputProps<string>, form: FormikProps<{ email: string }> }) => (
                                    <FormControl>
                                        <FormLabel>Email address</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents='none'
                                                children={<EmailIcon />}/>
                                            <Input {...field} type='email' placeholder='For any changes or updates'  />
                                        </InputGroup>
                                    </FormControl>
                                )}
                            </Field>
                            <br />
                            <Field name="acceptance">
                                {({ field, form } : { field: FieldInputProps<string>, form: FormikProps<{ acceptance: string}> }) => (
                                    <FormControl>
                                        <RadioGroup {...field}>
                                            <SimpleGrid columns={{base: 1, sm: 2}}>
                                                <Radio {...field} p={2} value='Accept' colorScheme='orange' size={'md'} defaultChecked borderColor={'#565656'}>Accepts With Pleasure</Radio>
                                                <Radio {...field} p={2} value='Decline' colorScheme='orange' size={'md'} borderColor={'#565656'}>Declines With Regret</Radio>
                                            </SimpleGrid>
                                        </RadioGroup>
                                    </FormControl>
                                )}
                            </Field>
                            {apiState === API_PENDING ? <Center><Spinner /></Center> : null }
                            {apiState === API_SUCCESS ?
                                <Alert status='success'>
                                    <AlertIcon />
                                    RSVP Received. Thank you!
                                </Alert>
                                : null}
                            {apiState === API_ERROR ?
                                <Alert status='error'>
                                    <AlertIcon />
                                    Error! Please contact Charlotte & Dylan
                                </Alert>
                                : null}
                            <br/>
                            <Center>
                                <Button type="submit" variant='solid'>Submit</Button>
                            </Center>
                        </Form>
                    )}
                </Formik>
            </Center>
        </Container>
    );
}