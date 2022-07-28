import React, { Component } from 'react';
import Slider from 'react-slick';
import './Carousel.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="carousel">
        <h2>Build responsive website that fits your taste</h2>
        <Slider {...settings}>
          <div className="bg bg1">
            <h3>Get Ready Made Website</h3>
          </div>
          <div className="bg bg2">
            <h3>Customize with ease</h3>
          </div>
          <div className="bg bg3">
            <h3>Get Help from our trusted developers</h3>
          </div>
          <div className="bg bg4">
            <h3>Need help, we gat you</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
