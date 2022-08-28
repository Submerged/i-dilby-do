import {Box, chakra} from "@chakra-ui/react";

export const HEADING_FONT_SIZE = { base: '32px', sm: '56px', md: '60px', lg: '72px' };
export const CONTAINER_MAX_WIDTH = '600px';

export const StyledHeading = chakra(Box, {
    baseStyle:{
        fontFamily: `Sacramento, sans-serif`,
        fontWeight: '700',
        color:'custom.4'
    }
});