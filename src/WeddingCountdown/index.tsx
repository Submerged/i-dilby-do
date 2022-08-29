import {Container, Heading, Text} from "@chakra-ui/react";
import Countdown from 'react-countdown';
import * as React from "react";
import {BODY_FONT_SIZE, HEADING_FONT_SIZE} from "../const";

interface CountdownProps {
    total: number,
    days: number,
    hours: number,
    minutes: number,
}
// Renderer callback
const renderer = ({ total, days, hours, minutes } : CountdownProps) => {
    if (total) {
        // Render a countdown
        return (
            <Text fontFamily='Ruluko, Sans Serif' color='custom.4' fontSize={BODY_FONT_SIZE}>
                {days} days, {hours} hours, {minutes} minutes until #idilbydo
            </Text>
        );
    } else {
        // Render a finished state
        return <Container />;
    }
};
const weddingDate = new Date('2023-10-06T15:00:00')
    .toLocaleString("en-US", {timeZone: "America/St_Johns"});

export const WeddingCountdown = () => {
    return (
        <Container textAlign='center'>
            <Heading fontFamily='Ruluko, sans-serif' fontSize={HEADING_FONT_SIZE} color='custom.4' > Oct 6, 2023 </Heading>
            <Countdown date={weddingDate} renderer={renderer}/>
        </Container>
    );
}