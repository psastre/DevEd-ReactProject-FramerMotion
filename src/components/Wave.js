import React from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";

const Wave = () => {
    return(
     <WaveSvg


         viewBox="0 0 1430 495" 
         fill="none" 
         xmlns="http://www.w3.org/2000/svg">

        <motion.path 
            initial={{pathLength:2, pathOffset:1}}
            animate={{pathLength:1, pathOffset:2}}
            transition={{duration:1}}
            d="M1 218C320.2 169.2 485.667 256.333 528.5 306C668.333 408.333 991.2 577.9 1164 437.5C1336.8 297.1 1427.33 88.3333 1451 1.5" 
            stroke="#4C7C86" 
            strokeOpacity="0.5"
            strokeWidth="10" />
     </WaveSvg>

    );
};

const WaveSvg = styled(motion.svg)`
    position:absolute;
    left:0;
    z-index:1;
`;



export default Wave;