

import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Fa, Button, Input } from 'mdbreact';
import { FeedBackComponent } from './FeedBack'
import { ReachOutComponent } from './ReachOut'
class ContactUsComponent extends Component {
    render() {
        return (
            <Container>
                <section className="my-5">
                    <h2 className="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
                    <p className="text-center w-responsive mx-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
                    <Row>
                        <Col lg="5" className="lg-0 mb-4">
                            <FeedBackComponent />
                        </Col>
                        <Col lg="7">
                            <div id="map-container" className="rounded z-depth-1-half map-container" style={{ height: '400px' }}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494" width="100%" height="100%" frameBorder="0" style={{ border: 0 }}></iframe>
                            </div>
                            <br />
                            <ReachOutComponent />
                        </Col>
                    </Row>
                </section>
            </Container>
        );
    };
}

export { ContactUsComponent }
