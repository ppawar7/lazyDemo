import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterComponent extends React.Component {
    render(){
        return(
           
            <Footer color="indigo" className="page-footer font-small blue fixed-bottom" scrolling>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a> infosys.com </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterComponent;
