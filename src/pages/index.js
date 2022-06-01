import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Carousel } from "react-bootstrap"
import { Link } from "gatsby"


const IndexPage = () => {
  return (
    <>
      <title> Vicios </title>
      <Container className={"d-flex flex-md-column"}>
        <div >
          <h1 className={"text-center m-2 p-3 display-1 fluid"}> {'Vicios >:)'} </h1> 
        </div>
      </Container> 

      <Container className="d-flex h-75% mx-auto p-3">
        <Carousel variant="dark" className="d-flex h-75%">
          <Carousel.Item>
            <img
              className="w-100 h-20 img-flex"
              src="https://via.placeholder.com/1500x500"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-20 img-flex"
              src="https://via.placeholder.com/1500x500"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-20"
              src="https://via.placeholder.com/1500x500"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container className="p-3 m-3">
      <Link to="/gallery/"> Gallery </Link>
      </Container>

      <Container className="mx-auto p-3">
      <h3>
        What is Vicios?
      </h3>
      <p>
        Vicios is just an idea for a brand a friend and I have been discussing for a long time. That idea has ranged from being a clothing brand, a furniture brand, a dispensary and many other things. At the end of the day we just want to make cool shit and get paid for it like everybody else. This jsut happens to be the way in which we envision that to happen.
      </p>
      </Container>

      <Container className="mx-auto p-3">
        <Col className="h4 text-center align-items-center"> 
          <br/><div className="h2 p-2">This site serves two purposes: </div>
        <Row>
          <br/> ○ For me to practice my skills as a developer and experiment in web development.
        </Row>
        <Row>
          <br/> ○ To build the foundation of the Vicios website.
        </Row>
        </Col>
      </Container>
      
    </>
  )
}

export default IndexPage
