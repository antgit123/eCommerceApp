import React, { Component } from 'react';
import { Container,Row, Col, Spinner,Image} from 'react-bootstrap';
import { fetchCart,fetchCartAndProducts } from "../../actions/CartActions";
import { fetchProducts } from "../../actions/ProductActions";
import { connect} from 'react-redux';
import CartList from './CartList';

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
                                                userCart.products.map(product=>{
                                                    return (<Row key={product.productId}>

                                                            <Col md={4}>
                                                                <Image src={product.image} width="200" height="200"/>
                                                            </Col>
                                                            <Col md={4}>
                                                                <Row>
                                                                    <h6>{product.title}</h6>
                                                                </Row>
                                                                <Row>
                                                                    <Col md={6}>
                                                                        <p>$ {product.price}</p>
                                                                    </Col>
                                                                    <Col md={6}>
                                                                        <p>Quantity: {product.quantity}</p>
                                                                    </Col>
                                                                </Row>

                                                            </Col>
                                                            <Col md={4}>
                                                                <Row>
                                                                    Total: $ {product.quantity * product.price}
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    )
                                                })
                                            }
                                            </div>
                                        </Row>
                                    )
                                })
                            }
                            <CartList/>
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

