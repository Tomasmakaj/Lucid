import React from 'react'
import './Hero.css'
import { Carousel } from 'react-bootstrap';

// import Lucid1 from '../assets/Lucid1.PNG'
import kitchen1 from '../assets/kitchen1.webp'
import kitchen2 from '../assets/kitchen2.jpeg'
// import kitchen4 from '../assets/kitchen4.avif'
import bathroom1 from '../assets/bathroom1.avif'
import bathroom2 from '../assets/bathroom2.avif'
import bathroom3 from '../assets/bathroom3.avif'
import john99 from '../assets/john99.jpg'
import boys from '../assets/boys.jpeg'
import girls from '../assets/girls.jpeg'
import Riverside from '../assets/Riverside.JPG'
import green from '../assets/green.JPG'
import trippkitchen from '../assets/trippkitchen.jpeg'
import trippbath from '../assets/trippbath.JPG'




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
            src={Riverside}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 img-item"
            src={green}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={john99}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 img-item"
            src={trippkitchen}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 img-item"
            src={boys}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 img-item"
            src={girls}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 img-item"
            src={trippbath}
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
            className="d-block w-100 img-item"
            src={kitchen2}
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
        {/* <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 img-item"
            src={kitchen4}
            alt="First slide"
          />
        </Carousel.Item> */}
      </Carousel>
    </>

  )
}

export default Hero