import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Home.css';
const Home = () => {
    return (
        <div>
            <div className="main d-flex justify-content-lg-center align-items-center">
                <h1 className="bigText text-light shadow-lg">Learn to dance SKILLS WITH DANCEE</h1>
            </div>
            <div>
                <div>
                    <Card className="card-horizontal">
                        <Card.Img className="w-50" src="/kpop.jpg" />

                        <Card.Body className="w-50">
                            <h1 className="bigText">K-Pop</h1>
                            <Card.Text className="h3 my-5">
                                Here We make sure everyone gets a good friendly and same minded team for better teamwork and understanding.
                            </Card.Text>
                            <Button variant="primary">More Details</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className="card-horizontal d-flex flex-row-reverse">
                        <Card.Img className="w-50" src="/hiphop.jpg" />

                        <Card.Body className="w-50">
                            <h1 className="bigText">HIP HOP DANCE</h1>
                            <Card.Text className="h3 my-5">
                                Here We make sure everyone gets a good friendly and same minded team for better teamwork and understanding.
                            </Card.Text>
                            <Button variant="primary">More Details</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className="card-horizontal">
                        <Card.Img className="w-50" src="/break.jpg" />

                        <Card.Body className="w-50">
                            <h1 className="bigText">BREAK DANCE</h1>
                            <Card.Text className="h3 my-5">
                                Here We make sure everyone gets a good friendly and same minded team for better teamwork and understanding.
                            </Card.Text>
                            <Button variant="primary">More Details</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className="card-horizontal flex-row-reverse d-flex">
                        <Card.Img className="w-50" src="/classical.jpg" />

                        <Card.Body className="w-50">
                            <h1 className="bigText">Classical</h1>
                            <Card.Text className="h3 my-5">
                                Here We make sure everyone gets a good friendly and same minded team for better teamwork and understanding.
                            </Card.Text>
                            <Button variant="primary">More Details</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Home;