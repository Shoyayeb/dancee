import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Dances = (props) => {
    const { title, description, fee, img } = props.dance;
    return (
        <div>
            <div>
                <Card className="card-horizontal">
                    <Card.Img className="w-50" src={img} />

                    <Card.Body className="w-50">
                        <h1 className="bigText">{title}</h1>
                        <Card.Text className="h3 my-5">{description}
                        </Card.Text>
                        <p className="fw-bold">Entry Fee: {fee}$</p>
                        <Button variant="primary">More Details</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Dances;