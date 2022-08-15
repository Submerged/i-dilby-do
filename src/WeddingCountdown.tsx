import {Center, Container} from "@chakra-ui/react";
import Countdown from 'react-countdown';
import * as React from "react";

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
            <span style={{ fontFamily: 'courier new' , color: 'darksalmon' }}>
        {days} days, {hours} hours, {minutes} minutes until #idilbydo
      </span>
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