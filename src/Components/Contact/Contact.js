import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <Form className="w-50 mx-auto my-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Enter Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>
        </div>
    );
};

export default Contact;