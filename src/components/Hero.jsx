import React from 'react'
import './Hero.css'
import { Carousel } from 'react-bootstrap';

// import Lucid1 from '../assets/Lucid1.PNG'
import kitchen1 from '../assets/kitchen1.webp'
import kitchen2 from '../assets/kitchen2.jpeg'
import kitchen4 from '../assets/kitchen4.avif'
import bathroom1 from '../assets/bathroom1.avif'
import bathroom2 from '../assets/bathroom2.avif'
import bathroom3 from '../assets/bathroom3.avif'
import renovation1 from '../assets/renovation1.jpeg'
import john99 from '../assets/john99.jpg'




const Hero = () => {
  return (
    <>
      <Carousel>
        {/* <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 img-item"
                src={Lucid1}
                alt="First slide"
              />
            </Carousel.Item> */}
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 img-item"
            src={john99}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 img-item"
            src={kitchen1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={kitchen2}
            alt="Second slide"
          />
        </Carousel.Item>
        {/* <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={kitchen3}
                alt="Third slide"
              />
            </Carousel.Item> */}
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 img-item"
            src={kitchen4}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 img-item"
            src={bathroom1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 img-item"
            src={bathroom2}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 img-item"
            src={bathroom3}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 img-item"
            src={renovation1}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </>

  )
}

export default Hero