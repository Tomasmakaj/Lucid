import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './About.css'

import card1 from '../assets/card1.jpeg'
import Lucid1 from '../assets/Lucid1.PNG'

function GroupExample() {
  return (
    <CardGroup>
      <Card className='card'>
        <Card.Img variant="top" src={Lucid1} className='smallLogo'/>
        <Card.Body>
          <Card.Title> About Lucid Contracting </Card.Title>
          <Card.Text>

          
Lucid Contracting is a company where our expertise range from simple to complex renovations. Lucid Contracting maintains the highest level of craftsmanship.
We are family-owned and operated, which allows us to offer a level of customer service that larger firms simply cannot match. No matter how big or small your remodeling project, you will receive personalized service 7 days a week, so choose us with confidence! We take tremendous pride in our work and in providing you with quality solutions to last a lifetime and look forward to assisting you with your home improvement needs.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={card1} />
        <Card.Body>
          <Card.Title> Commercial & Residential Construction </Card.Title>
          <Card.Text>
          Our team of licensed contractors at Lucid Construction Corp will update your kitchen, bathrooms, lobbies, elevators, outdoor decks/patios, and commercial offices. New flooring, painting, electrical, plumbing, millwork. We work with you through every step of your project, from initial design concept to the final finishing touches, always with the finest attention to detail and at the highest quality.{' '}
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;