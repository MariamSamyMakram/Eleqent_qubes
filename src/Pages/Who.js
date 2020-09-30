import React, { Component } from 'react';

// component
import WhoWeAre from '../Components/Who/WhoWeAre';
import Services from '../Components/Services/Services';

class Who extends Component{
    render(){
        return(
            <>
                <WhoWeAre />
                <Services />
            </>
        );
    }
} 

export default Who;