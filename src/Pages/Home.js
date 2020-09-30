import React, { Component } from 'react';

// // components
import Banner from '../Components/Banner/Banner';
import Clients from '../Components/Clients/Clients';
import About from '../Components/About/About';
// import Methodology from '../Components/Methodology/Methodology';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';


class Home extends Component{
    render(){
        return(
            <>
                <Banner/>
                <Clients/>
                <About/>
                {/* <Methodology/> */}
                <Projects/>
                <Contact/>
            </>
        );
    }
}

export default Home;