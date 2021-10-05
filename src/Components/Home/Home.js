import React, { useEffect, useState } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import './Home.css';
import Dances from './../Dances/Dances';
const Home = () => {
    const [dances, setDance] = useState([]);
    useEffect(() => {
        fetch('/dances.json')
            .then(res => res.json())
            .then(data => setDance(data));
    }, []);
    const homeDances = dances.slice(0, 4)
    return (
        <div>
            <div className="main d-flex justify-content-lg-center align-items-center">
                <h1 className="bigText text-light shadow-lg">Learn to dance SKILLS WITH DANCEE</h1>
            </div>

            <div>
                {homeDances.length === 0 ?
                    <Spinner animation="border" />
                    :
                    homeDances.map(dance => <Dances
                        key={dance.id}
                        dance={dance}
                    ></Dances>)
                }

            </div>
        </div>
    );
};

export default Home;