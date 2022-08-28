import {Center, Container,Text} from "@chakra-ui/react";
import Countdown from 'react-countdown';
import * as React from "react";
import "@fontsource/amatic-sc"
import "@fontsource/shadows-into-light"
import "@fontsource/ruluko"


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
            <Text fontFamily= 'Ruluko, Sans Serif' color='custom.4' fontSize='120%'>
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
        <Center>
            <Countdown date={weddingDate} renderer={renderer}/>
        </Center>
    );
}