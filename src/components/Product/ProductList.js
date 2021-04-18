import React, { Component } from 'react';
import { connect} from 'react-redux';
import {fetchProducts , sortProducts, searchProducts, filterProducts }  from '../../actions/ProductActions';
import {Container,Row,Col, FormControl, DropdownButton, Dropdown,CardColumns, Spinner} from 'react-bootstrap';
import ProductCard from './ProductCard';
import {FETCH_CATEGORIES_URL} from '../../api/constants';
import './Products.css';
import '../LoadingBar.css';

class ProductList extends Component {
    constructor(){
        super();
        this.state = { searchTerm : '', categories: []};
        this.timeout = 0;
    }

    componentDidMount(){
        //fetch list of products and pass it on to the products section part
        let that = this;
        this.props.fetchProducts();
        fetch(FETCH_CATEGORIES_URL)
            .then(res => res.json())
            .then(categories => that.setState({categories: categories}));
    };

    getSortedProductList = (productsList,sortKey) =>{
        this.props.sortProducts(productsList,sortKey);
    };

    getFilterProductList = (filterCategory) =>{
        this.props.filterProducts(filterCategory);
    };

    performSearch =(searchTerm) =>{
        this.setState({searchTerm: searchTerm});
        if(this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.props.searchProducts(searchTerm);
        }, 500);
    };

    render() {
        const { productsList } = this.props;
        const { categories }  = this.state;
        if( !productsList || productsList.length === 0){
            return (
                <div className="d-flex justify-content-center">
                    <Spinner animation="grow" role="status"/>
                    <p style={{marginLeft:"8px"}}>Loading Products...</p>
                </div>
            )
        }
        return (
            <Container fluid>
                <Row className="marginRow">
                    <Col sm="3">
                        <FormControl onChange={(e) => this.performSearch(e.target.value)} id="product-searchbar" placeholder="Search for a product..."/>
                    </Col>
                    <Col sm="3">
                        <DropdownButton id="select-category-dropdown" title="Select Category">
                        {
                            categories && categories.map(category =>{
                                return <Dropdown.Item key={category} onClick={() => this.getFilterProductList(category)}>
                                    {category}
                                </Dropdown.Item>
                            })
                        }
                        </DropdownButton>
                    </Col>
                    <Col sm="3">
                        <DropdownButton id="products-sortby-dropdown" title="Sort By">
                            <Dropdown.Item onClick={()=> this.getSortedProductList(productsList,"asc")}>Price: Low to High</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.getSortedProductList(productsList,"desc")}>Price: High to Low</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
                <Row className="marginRow">
                    <CardColumns style={{flexDirection: "row"}}>
                            {
                                productsList.products.map(product =>{
                                   return <ProductCard key={product.id} product={product}/>
                                })
                            }
                    </CardColumns>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        productsList: state.products
    };
};

export default connect(mapStateToProps,{
    fetchProducts: fetchProducts,
    sortProducts: sortProducts,
    searchProducts: searchProducts,
    filterProducts: filterProducts
}) (ProductList);

