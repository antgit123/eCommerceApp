import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HomeMenu } from './HomeMenu';

export class HomeLayout extends Component {
    //disp
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col sm={3}>
                        <HomeMenu />
                    </Col>
                    <Col sm={9}>
                        <div className="appContainer">
                            {this.props.children}
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
