import React, { Component } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import { fetchCartAndProducts } from "../../actions/CartActions";
import { connect} from 'react-redux';
import CartCard from './CartCard';

class ViewCart extends Component {
    constructor(){
        super();
        this.state = {loading: true};
    }

    componentDidMount(){
        this.props.fetchCartAndProducts(1);
        this.setState({loading: false});
    }

    updateUserCartList = (userCart,products) => {
         userCart.map(cart => {
            cart.products.map(cartProduct => {
                let product = products.filter(prod => {
                    return prod.id === cartProduct.productId;
                });
                cartProduct.image = product[0].image;
                cartProduct.price = product[0].price;
                cartProduct.title = product[0].title;
            });
        });
    };

    render() {
        let { userCart } = this.props;
        if (this.state.loading || !userCart.cart){
            return (
                <div className="d-flex justify-content-center">
                    <Spinner animation="grow" role="status"/>
                    <p style={{marginLeft:"8px"}}>Loading Cart details...</p>
                </div>
            )
        }
        if(userCart.cart && userCart.cart.length > 0) {
            this.updateUserCartList(userCart.cart, userCart.products);
            return (
                <div className="mx-4">
                    <Row>
                        <h3>Shopping Cart</h3>
                    </Row>
                    <Row>
                        <Col md={9}>
                            {
                                userCart.cart.map(userCart =>{
                                    return (
                                        <Row key={userCart.id}>

                                            <div className="container-fluid">
                                            <h5 style={{width: "100%"}}>Cart {userCart.id}</h5>
                                                <hr/>
                                            {
                                                userCart.products.map(product=> {
                                                    return <CartCard product={product}/>
                                                })
                                            }
                                            </div>
                                        </Row>
                                    )
                                })
                            }
                        </Col>
                        <Col md={3}>

                        </Col>
                    </Row>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) =>{
    return{
        userCart: state.cart,
        productsList: state.products
    };
};

export default connect(mapStateToProps,{
    fetchCartAndProducts: fetchCartAndProducts
}) (ViewCart);

