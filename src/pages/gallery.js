import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Figure, Col, Row } from "react-bootstrap";
// import GalleryRow from "../components/gallery-row";
import GalleryItem from "../components/gallery-item";




const GalleryPage = () => {
    return (
      <>
        <Container className="ms-auto m-3 p-3 fluid">
            <h1> Hi, Welcome to our gallery page.</h1>
        </Container> 
        
        <Container className="ms-auto m-3 p-3 fluid">
            <Row className="m-auto p-3">
                <Col>
                    <Figure>
                        <Figure.Image
                           width={220}
                           height={220}
                            alt="171x180"
                            src="https://via.placeholder.com/171x180"
                        />
                        <Figure.Caption>
                            Nulla vitae elit libero.
                        </Figure.Caption>
                    </Figure>
                </Col>
                
                <Col>
                    <Figure>
                        <Figure.Image
                            width={220}
                            height={220}
                            alt="171x180"
                            src="https://via.placeholder.com/171x180"
                        />
                        <Figure.Caption>
                            Nulla vitae elit libero.
                        </Figure.Caption>
                    </Figure>
                </Col>

                <Col>
                    <Figure>
                        <Figure.Image
                           width={220}
                           height={220}
                            alt="171x180"
                            src="https://via.placeholder.com/171x180"
                        />
                        <Figure.Caption>
                            Nulla vitae elit libero.
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>

            <Row className="m-auto p-3">
                <Col>
                    <Figure>
                        <Figure.Image
                           width={220}
                           height={220}
                            alt="171x180"
                            src="https://via.placeholder.com/171x180"
                        />
                        <Figure.Caption>
                            Nulla vitae elit libero  w x h edited.
                        </Figure.Caption>
                    </Figure>
                </Col>
                
                <Col>
                    <Figure>
                        <Figure.Image
                            width={220}
                            height={220}
                            alt="171x180"
                            src="https://via.placeholder.com/190x190"
                        />
                        <Figure.Caption>
                            Nulla vitae elit libero.
                        </Figure.Caption>
                    </Figure>
                </Col>

                <Col>
                    <Figure>
                        <Figure.Image
                           width={220}
                           height={220}
                            alt="171x180"
                            src="https://via.placeholder.com/171x180"
                        />
                        <Figure.Caption>
                            Nulla vitae elit libero.
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>

            <Row className="m-auto p-3">
                <Col>
                    <Figure>
                        <Figure.Image
                           width={220}
                           height={220}
                            alt="171x180"
                            src="https://via.placeholder.com/171x180"
                        />
                        <Figure.Caption>
                            Nulla vitae elit libero.
                        </Figure.Caption>
                    </Figure>
                </Col>
                
                <Col>
                    <Figure>
                        <Figure.Image
                            width={220}
                            height={220}
                            alt="171x180"
                            src="https://via.placeholder.com/171x180"
                        />
                        <Figure.Caption>
                            Nulla vitae elit libero.
                        </Figure.Caption>
                    </Figure>
                </Col>

                <Col>
                    <Figure>
                        <Figure.Image
                           width={220}
                           height={220}
                            alt="171x180"
                            src="https://via.placeholder.com/171x180"
                        />
                        <Figure.Caption>
                            Nulla vitae elit libero.
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>

            <GalleryItem 
            Image={"https://via.placeholder.com/220x220"}
            caption={"Test Caption"} 
            alt={"alt test"}
            />
            
        </Container>

      </>
    
    )
}

export default GalleryPage