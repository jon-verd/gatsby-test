import { propTypes } from "prop-types"
import { Figure, Col, Image, Caption, } from "react-bootstrap";
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

export function GalleryItem({ image, alt, caption }) {
    return 
    (
    <>
    <Container>
        <Col>
            <Figure>
                <Figure.Image
                    width={220}
                    height={220}
                    alt={alt}
                    src={image}
                />
                <Figure.Caption>
                   {caption}
                </Figure.Caption>
            </Figure>
        </Col>
    </Container>
    </>
    );
};

