import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import ReactDom from 'react-dom/client';
import './main.css'

function About(){
  const [me, setMe] = useState({
    name: "Emirul Mukmin",
    nim: "320200401006",
    universtiy: 'RIDU',
    hobbies: 'swimming'
  });

    return (
    <div className="text-center">
      <Card.Body className='about'>
        <Card.Title><h3>Netlab Bookstore</h3></Card.Title>
        <Card.Text>
          <h6>{me.name} build this website</h6>
          <p>Hi, i am from {me.universtiy} with nim {me.nim} not only love coding, i also like to {me.hobbies} and this is my website with provides a variety of books and book sources for users to read</p>
        </Card.Text>
        <Button variant="primary" as={Link} to="/">Explore</Button>
        <br></br>
        <img src="./logo512.png" alt="Girl in a jacket"></img>
        <Card.Text>
          Build by React Library
        </Card.Text>
      </Card.Body>
    </div>
    )
}

export default About;