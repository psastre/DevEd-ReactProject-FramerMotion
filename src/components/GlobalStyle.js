import {createGlobalStyle}  from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;

}

body{
    background-color: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x:hidden;

}

button{
    font-family: 'Inter', sans-serif;

    font-size: 1.1 rem;
    font-weight: bold;
    cursor:pointer;
    padding: 1rem 1rem ;
    border: 3px solid #23b997;
    color: white;
    background:transparent;
    transition: all 0.5s ease;
    &:hover{
        background-color: #23d997;
        color:white;
    }
    
    
}
h2{
        font-weight:lighter;
        font-size:4rem;

    }
    h3{
        color:white;
    }
    p{
        padding: 3rem 0rem;
        color:#ccc;
        font-size:1.4rem;
    }
    h4{
        font-weight:bold;
        font-size: 2rem

    }
    a{
        font-size: 1rem;
    }
    span{
        font-weight:bold;
        color:#23d997;
    }
    
`;

export default GlobalStyle;
