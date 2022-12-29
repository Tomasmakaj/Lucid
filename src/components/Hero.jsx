import React from 'react'
import './Hero.css'
import { Carousel } from 'react-bootstrap';

import Lucid3 from '../assets/Lucid3.PNG'



const Hero = () => {
        return (
          <>
          <Carousel>
          <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 img-item"
                src={Lucid3}
                alt="First slide"
              />
            </Carousel.Item>
            {/* <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 img-item"
                // src={}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                // src={}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                // src={}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 img-item"
                // src={}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 img-item"
                // src={}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 img-item"
                // src={}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 img-item"
                // src={}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 img-item"
                // src={}
                alt="First slide"
              />
            </Carousel.Item> */}
          </Carousel>
          </>
      
        )
      }
      
      export default Hero