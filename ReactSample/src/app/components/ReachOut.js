import React from 'react';
import {Row, Col, Card, Fa, Button } from 'mdbreact';

const ReachOutComponent = () => {

  return (
    <Row className="text-center">
    <Col md="4">
      <Button tag="a" floating color="blue" className="accent-1">
        <Fa icon="map-marker" />
      </Button>
      <p>New York, 94126</p>
      <p className="mb-md-0">United States</p>
    </Col>
    <Col md="4">
      <Button tag="a" floating color="blue" className="accent-1">
        <Fa icon="phone" />
      </Button>
      <p>+ 01 234 567 89</p>
      <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
    </Col>
    <Col md="4">
      <Button tag="a" floating color="blue" className="accent-1">
        <Fa icon="envelope" />
      </Button>
      <p>info@gmail.com</p>
      <p className="mb-md-0">sale@gmail.com</p>
    </Col>
    </Row>
    );
}

export { ReachOutComponent }
