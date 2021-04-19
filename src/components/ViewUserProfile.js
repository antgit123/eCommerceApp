import React, { Component } from 'react';
import {Container,Row,Nav,Col,Navbar,Image,Button, Form, Spinner} from 'react-bootstrap';
import { fetchUserProfile, updateUserProfile } from "../actions/UserActions";
import { connect} from 'react-redux';
import StatusBar from "./StatusBar";

class ViewUserProfile extends Component {
    constructor(){
        super();
        this.state = {
            loading: true,
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            city: '',
            zipcode: '',
            street: '',
            phone: ''
        };
    }

    componentDidMount(){
        this.props.fetchUserProfile(1);
        this.setState({loading: false});
    }

    handleUserFormSubmit =(e) => {
        e.preventDefault();
        const userObj = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            name:{
                firstname: this.state.firstname,
                lastname: this.state.lastname
            },
            address:{
                city: this.state.city,
                street: this.state.street,
                number:3,
                zipcode: this.state.zipcode,
                geolocation:{
                    lat:'-37.3159',
                    long:'81.1496'
                }
            },
            phone: this.state.phone
        };
        this.props.updateUser(1,userObj);
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
                            <Image src="https://randomuser.me/api/portraits/men/1.jpg"/>
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
                                    <Form.Control type="text" placeholder="Enter First Name"
                                                  onChange={e => this.setState({firstname: e.target.value})}
                                                  defaultValue={firstname}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="userLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Password"
                                                  onChange={(e) => this.setState({lastname: e.target.value})} defaultValue={lastname} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="userEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"
                                                  onChange={(e) => this.setState({email: e.target.value})} defaultValue={email}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="userLastName">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        onChange={(e) => this.setState({username: e.target.value})}
                                        type="text" placeholder="Password" defaultValue={username} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"
                                                  onChange={(e) => this.setState({password: e.target.value})} defaultValue={password} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="userPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number" placeholder="042611132"
                                              onChange={(e) => this.setState({PHONE: e.target.value})} defaultValue={phone}/>
                            </Form.Group>

                            <Form.Group controlId="userAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="10 Main St"
                                              onChange={(e) => this.setState({street: e.target.value})} defaultValue={street}/>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control  onChange={(e) => this.setState({city: e.target.value})} defaultValue={city}/>
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
                                    <Form.Control
                                        onChange={(e) => this.setState({zipcode: e.target.value})} defaultValue={zipcode}/>
                                </Form.Group>
                            </Form.Row>
                            <Button variant="primary" type="submit" onClick={(e) => this.handleUserFormSubmit(e)}>
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

