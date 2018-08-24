import React, { Component } from 'react';
import { Container, Row, Col, View, Mask, CardBody, Button, Fa, Card } from 'mdbreact';

const BlogComponent = ({ blogResponse }) => {

    return (
        <Row className="text-center">
        {
         blogResponse.map((blogData,index) =>
            <Col key="index" lg="4" md="12" className="mb-lg-0 mb-4">
                <View className="overlay rounded z-depth-1" waves>
                    <img src={blogData.imageUrl} alt="sample photo" className="img-fluid" />
                    <a>
                        <Mask overlay="white-slight" />
                    </a>
                </View>
                <CardBody className="pb-0">
                    <h4 className="font-weight-bold my-3">{blogData.headerText}</h4>
                    <p className="grey-text subHeaderText">{blogData.subHeaderText}</p>
                   
                </CardBody>
            </Col>)
        }
            
       
    </Row>
    );
}

export { BlogComponent }  