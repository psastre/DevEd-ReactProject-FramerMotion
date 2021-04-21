import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';


const Nav =()=>{
    return (
        <StyledNav>
            <h1 id="logo"><Link id="logo" to="/">Capture</Link></h1>
            <ul>
                <li><Link to="/">1. About Us</Link></li>
                <li><Link to="/work">2. Our Work</Link></li>
                <li><Link to="/ContactUs">3. Contact US</Link></li>
            </ul>
        </StyledNav>
    )
};
const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content:space-between;
    align-items:center;
    padding: 1rem 10rem;
    background: #282828;
    position:sticky;
    top:0;
    z-index:10;

    a{
        color:white;
        text-decoration:none;
        
    }
    ul{
        display:flex;
        text-decoration:none; 
        
    }
    #logo{
        font-size: 2.5rem;
        font-family: 'Lobster', cursive;
        font-weight:lighter;
        a{
            font-size:2rem;
        }
    }
    li{
        padding-left:10rem;
        position: relative;
        list-style: none;

    }

`

export default Nav;