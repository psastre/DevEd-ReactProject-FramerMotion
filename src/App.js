
import React from 'react';
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav'
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork"
import MovieDetail from "./pages/MovieDetail";
import ScrollTop from './components/ScrollTop'
//Style
import GlobalStyle from './components/GlobalStyle.js'
//Router
import {Switch, Route , useLocation } from 'react-router-dom';
//Animation
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
      <Switch location ={location} key={location.pathname}>
      <Route path="/" exact >
        <AboutUs/>
      </Route>
      <Route path="/ContactUs">
      <ContactUs/>
      </Route>
      <Route path='/work/:id'>
        <MovieDetail/>
      </Route>
      <Route path="/work" exact> 
      <OurWork/>
      </Route>
      </Switch>
      </AnimatePresence>
      <ScrollTop/>
    </div>
  );
}

export default App;
