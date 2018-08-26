import React from 'react';
import { Container, Row, Col, Card, CardBody, Fa, Button, Input } from 'mdbreact';

class FeedBackComponent extends React.Component {
  submitHandler(event) {
    event.preventDefault();
    alert('Thank You For you feedBack');
  };
  render() {
    return (
     
      <form onSubmit={this.submitHandler}>
        <Card>
          <CardBody>
            <div className="form-header blue accent-1">
              <h3 className="mt-2"><Fa icon="envelope" /> Write to us:</h3>
            </div>
            <p className="dark-grey-text">Your feedback is valuable to us.</p>
            <div className="md-form">
              <Input icon="user" label="Your name" iconClass="grey-text" type="text" id="form-name" required />
             
            </div>
            <div className="md-form">
              <Input icon="envelope" label="Your email" iconClass="grey-text" type="email" id="form-email"  required/>
            </div>
            <div className="md-form">
              <Input icon="tag" label="Subject" iconClass="grey-text" type="text" id="form-subject" required />
            </div>
            <div className="md-form">
              <Input icon="pencil" label="Feedback" iconClass="grey-text" type="textarea" id="form-text" required />
            </div>
            <div className="text-center">
              <Button color="light-blue" type="submit"> Submit</Button>
            </div>
          </CardBody>
        </Card>
      </form>
    
    );
  }

}

export { FeedBackComponent }

