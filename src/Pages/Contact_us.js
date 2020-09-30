import React, { Component } from 'react';

// component
import Contact_PE from '../Components/Contact_PE/Contact_PE';
import Maps from '../Components/Map/Map';

class Contact_us extends Component{
    render(){
        return(
            <>
                <Contact_PE />
                <Maps />
            </>
        );
    }
} 

export default Contact_us;