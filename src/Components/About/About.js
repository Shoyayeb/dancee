import React from 'react';
import { Figure } from 'react-bootstrap';
const About = () => {
    return (
        <div className="text-center w-75 mx-auto">
            <h1>MEET OUR TEAM</h1>
            <h3>We are all very different. We were born in different cities, at different times, we love different music, food, movies. But we have something that unites us all. It is our company. We are its heart. We are not just a team, we are a family.</h3>
            <button className="btn btn-outline-danger w-25">Contact Us</button>
            <div className="d-flex my-5">
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src="/dan.jpg"
                    />
                    <Figure.Caption>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </Figure.Caption>
                </Figure>
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src="/danc.jpg"
                    />
                    <Figure.Caption>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </Figure.Caption>
                </Figure>
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src="/dance.jpg"
                    />
                    <Figure.Caption>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </Figure.Caption>
                </Figure>

            </div>
        </div>
    );
};

export default About;