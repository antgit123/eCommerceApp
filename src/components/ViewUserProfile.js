import React, { Component } from 'react';
import {Container,Row,Nav,Col,Navbar,Image,Button, Form, Spinner} from 'react-bootstrap';
import { fetchUserProfile, updateUserProfile } from "../actions/UserActions";
import { connect} from 'react-redux';
import './UserNav.css';

class ViewUserProfile extends Component {
    constructor(){
        super();
        this.state = {loading: true};
    }

    componentDidMount(){
        this.props.fetchUserProfile(1);
        this.setState({loading: false});
    }

    handleUserFormSubmit =(form) => {
       const obj =  {
            email:'John@gmail.com',
                username:'johnd',
            password:'m38rmF$',
            name:{
            firstname:'John',
                lastname:'Doe'
            },
            address:{
                city:'kilcoole',
                    street:'7835 new road',
                    number:3,
                    zipcode:'12926-3874',
                    geolocation:{
                    lat:'-37.3159',
                        long:'81.1496'
                }
            },
            phone:'1-570-236-7033'
        }
        const userObj = {};

    };

    render() {
        const {userProfile} = this.props;
        if(!userProfile.user || this.state.loading){
            return(
                <div className="d-flex justify-content-center">
                    <Spinner animation="grow" role="status"/>
                    <p style={{marginLeft:"8px"}}>Loading user details...</p>
                </div>
            )
        }
        const {firstname, lastname } = userProfile.user.name;
        const {email, username,password,phone} = userProfile.user;
        const {city, street, zipcode} = userProfile.user.address;
        return (
            <Row className="mx-4">
                <Col md={3}>
                    <h4>My Account</h4>
                    <Navbar className="container-fluid" bg="light">
                        <Nav className="flex-column">
                            <Nav.Link active>My details</Nav.Link>
                            <Nav.Link>My orders</Nav.Link>
                            <Nav.Link>Account settings</Nav.Link>
                        </Nav>
                    </Navbar>
                </Col>
                <Col md={9}>
                    <Container>
                        <Row style={{margin:"8px"}}>
                            <Image rounded src="https://randomuser.me/api/portraits/men/1.jpg"/>
                        </Row>
                        <Row style={{margin:"8px"}}>
                            <Button>Change Photo</Button>
                        </Row>
                    </Container>
                    <Row>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="userFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" defaultValue={firstname}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="userLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Password" defaultValue={lastname} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="userEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" defaultValue={email}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="userLastName">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Password" defaultValue={username} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" defaultValue={password} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="userAddress1">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number" placeholder="10 Main St" defaultValue={phone}/>
                            </Form.Group>

                            <Form.Group controlId="userAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="10 Main St" defaultValue={street}/>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control  defaultValue={city}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>Victoria</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control defaultValue={zipcode}/>
                                </Form.Group>
                            </Form.Row>
                            <Button variant="primary" type="submit" onSubmit={() => this.handleUserFormSubmit()}>
                                Save Changes
                            </Button>
                        </Form>
                    </Row>

                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        userProfile: state.user
    };
};

export default connect(mapStateToProps,{
    fetchUserProfile: fetchUserProfile,
    updateUser: updateUserProfile
}) (ViewUserProfile);

