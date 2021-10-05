import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Services = (props) => {
    const [dances, setDance] = useState([]);
    useEffect(() => {
        fetch('/dances.json')
            .then(res => res.json())
            .then(data => setDance(data));
    }, []);
    console.log(dances);
    return (
        <div className="my-5">
            <Row xs={1} md={4} className="g-4">
                {dances.map((dance) => (
                    <Col>
                        <Card className="h-100">
                            <Card.Img variant="top" src={dance.img} />
                            <Card.Body>
                                <Card.Title>{dance.title}</Card.Title>
                                <Card.Text>{dance.description}</Card.Text>

                            </Card.Body>
                            <Card.Footer>
                                <Button className="btn-lg container-fluid">Enroll Now</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div >
    );
};

export default Services;