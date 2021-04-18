import React, { Component } from 'react';
import { Route } from 'react-router';
import HomePage  from '../components/Home/HomePage';
import ViewUserProfile from '../components/ViewUserProfile';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import ViewCart from '../components/Cart/ViewCart';
import { connect } from 'react-redux';

export default class App extends Component {
    displayName = App.name;

    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Route path='/' exact component={HomePage} />
                <Route path='/user' exact component={ViewUserProfile} />
                <Route path='/cart' exact component={ViewCart} />
            </BrowserRouter>
        );
    }
}





