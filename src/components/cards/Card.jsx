import React from'react';
import Rating from './Rating';
import CartButton from './CartButton'
import food from '../../assets/images/food-1.jpeg';
import { Card, Col, Row } from "react-bootstrap";

class Cards extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} md={3}>
                        <p className="h5 mb-3">Kamis, 13 Maret 2019</p>
                        <Card className="mb-4">
                            <Card.Img className="br-card-img" variant="top" src={food} />
                            <Card.Body className="bs-card-body">
                                <Rating />
                                <Card.Title className="mb-0">Kelepian Toasted Bread in Mapple Sauce Topped with Sliced Banana and Blueberry</Card.Title>
                                <Card.Text className="text-muted fs-12">
                                    By Kulina &#8226; Uptown Lunch
                                </Card.Text>
                                <CartButton />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Cards;