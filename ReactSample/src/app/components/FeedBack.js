import React from 'react';
import { Container, Row, Col, Card, CardBody, Fa, Button, Input } from 'mdbreact';

const FeedBackComponent = () => {

    return(
              <Card>
                <CardBody>
                  <div className="form-header blue accent-1">
                    <h3 className="mt-2"><Fa icon="envelope" /> Write to us:</h3>
                  </div>
                  <p className="dark-grey-text">We'll write rarely, but only the best content.</p>
                  <div className="md-form">
                    <Input icon="user" label="Your name" iconClass="grey-text" type="text" id="form-name" />
                  </div>
                  <div className="md-form">
                    <Input icon="envelope" label="Your email" iconClass="grey-text" type="text" id="form-email" />
                  </div>
                  <div className="md-form">
                    <Input icon="tag" label="Subject" iconClass="grey-text" type="text" id="form-subject" />
                  </div>
                  <div className="md-form">
                    <Input icon="pencil" label="Icon Prefix" iconClass="grey-text" type="textarea" id="form-text" />
                  </div>
                  <div className="text-center">
                    <Button color="light-blue">Submit</Button>
                  </div>
                </CardBody>
              </Card>
    );
}

export {FeedBackComponent}

