import React, { Component } from 'react';
// js slick
import Slider from "react-slick";
// css slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// style
import './Clients.scss';
// logos
import Logo1 from './logo1.png';
import Logo2 from './logo2.png';
import Logo3 from './logo3.svg';
import Logo4 from './logo4.png';
import Logo5 from './logo5.png';

class Clients extends Component{
    render(){
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows:false,
            autoplay:true,
            // autoplaySpeed:5000
            responsive:[
                {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: true,
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 2,
                      initialSlide: 2
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                    }
                  }
            ]
          };
        return(
            <section className="clients pt-5 pb-4">
                <div className="container">
                    <Slider {...settings}>
                        <div>
                            <img src={Logo1}/>
                        </div>
                        <div>
                            <img src={Logo2}/>
                        </div>
                        <div>
                            <img src={Logo3}/>
                        </div>
                        <div>
                            <img src={Logo4}/>
                        </div>
                        <div>
                            <img src={Logo5}/>
                        </div>
                        <div>
                            <img src={Logo3}/>
                        </div>
                    </Slider>
                </div>
            </section>
        );
    }
}

export default Clients;