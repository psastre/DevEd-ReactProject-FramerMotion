import React from 'react';
import home1 from '../img/home1.png';

import styled from 'styled-components';

import {About, Description, Image, Hide} from "../styles.js";

import {motion} from "framer-motion";
import {titleAnimation, fade, photoAnim} from "../animation";
import Wave from "./Wave"


const AboutSection =()=>{
    return(
        <About>
            <Description>
                <div className="title">
                    <Hide>
                       <motion.h2  variants={titleAnimation} initial='hidden' animate='show' exit="exit"> We work to make</motion.h2> 
                       </Hide>
                    
                       <Hide>
                       <motion.h2 variants={titleAnimation}> your <span>dreams</span> come</motion.h2>
                       </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>true.</motion.h2>
                        </Hide>
                </div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills</motion.p>
                <motion.button variants={fade}>Contact us</motion.button>
                </Description>
                <Image>
            <motion.img variants={photoAnim} src={home1} alt="tipo filmando"/>
                </Image>  
                <Wave/>          
            </About>

    ) 
}


export default AboutSection;