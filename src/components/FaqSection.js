import React from 'react';
import styled from 'styled-components';
import {About} from '../styles';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion'
import {useScroll} from "./useScroll"
import {fade, photoAnim} from '../animation';



const FaqSection =()=>{
    const [element, controls] = useScroll();
    return(
        <Faq variants={photoAnim} animate={controls} ref={element} initial='hidden'>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title='How Do   I Start?'>
            
                
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sunt in aliquid. Iure, officiis vel.
                    </p>
                </div>
            
            
            </Toggle>
            <Toggle title='Daily Schedule'>
           
                
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sunt in aliquid. Iure, officiis vel.
                    </p>
                </div>
            
            </Toggle>
            <Toggle title='Diferrent Payment Methods'>
            
                
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sunt in aliquid. Iure, officiis vel.
                    </p>
                </div>
            
            </Toggle>
            <Toggle title='What products do you offer'>
            
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sunt in aliquid. Iure, officiis vel.
                    </p>
                </div>
            
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
};

const Faq = styled(About)`
     display:block;
     span{
         display: block;
     }
     h2{
         padding-bottom: 2rem;
         font-weight:lighter;
         
     }
     .faq-line{
         background: rgb(206, 204, 204);
         height: 0.2rem;
         margin: 2rem 0rem;
         width:100%;
     }
     .question{
         padding: 3rem 0rem;
         p{
             padding : 1rem 0rem;
         }
     }
     .answer{
         padding: 2rem 0rem;
         p{
             padding:1rem 0rem;
         }
     }
`;

export default FaqSection;