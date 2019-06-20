import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import {BrowserRouter, Route, Switch} from "react-router-dom";

import App from "../imports/ui/App";
import AppContainer from "../imports/ui/authContainer/AppContainer";
import MainContainer from "../imports/ui/authContainer/MainContainer";

// ALL
import Login from "../imports/ui/authContainer/LoginContainer";
import LoginPage from "../imports/ui/authContainer/LoginPage";

import SignUp from "../imports/ui/authContainer/SignupContainer";
import SignupPage from "../imports/ui/authContainer/SignupPage";

import PageNotFound from "../imports/ui/components/PageNotFoundComponent";

// AGENT
import Cart from "../imports/ui/CartContainer";
import Products from "../imports/ui/Products";
import Books from "../imports/ui/BooksContainer";
import Music from "../imports/ui/MusicContainer";

// ADMIN
import Hotels from "../imports/ui/adminContainer/HotelsContainer";
import Flights from "../imports/ui/adminContainer/FlightsContainer";
import Rooms from "../imports/ui/adminContainer/RoomsContainer";

// HAB
import HabList from "../imports/ui/habContainer/HabListContainer";

// LAYOUTS
import AdminLayout from "../imports/ui/layouts/AdminLayout";
import AgentLayout from "../imports/ui/layouts/AgentLayout";
import HabLayout from "../imports/ui/layouts/HabLayout";
import GuestLayout from "../imports/ui/layouts/GuestLayout";

import { history } from 'history';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
        <Layout>
            <Component {...props} />
        </Layout>
    )} />
);

Meteor.startup(() => {
  render(<BrowserRouter history={history}>
              <Switch>
                  <AppRoute layout={AgentLayout} path="/admin" component={App} exact/>
                  <AppRoute layout={AgentLayout} path="/cart" component={Cart} exact/>
                  <AppRoute layout={AgentLayout} path="/products" component={Products} exact/>
                  <AppRoute layout={AgentLayout} path="/books" component={Books} exact/>
                  <AppRoute layout={AgentLayout} path="/music" component={Music} exact/>

                  <AppRoute layout={AdminLayout} path="/" component={AppContainer} exact/>
                  <AppRoute layout={AdminLayout} path="/hotels" component={Hotels} exact/>
                  <AppRoute layout={AdminLayout} path="/rooms" component={Rooms} exact/>
                  <AppRoute layout={AdminLayout} path="/flights" component={Flights} exact/>

                  <AppRoute layout={HabLayout} path="/lists" component={HabList} exact/>

                  <AppRoute layout={GuestLayout} path="/login" component={LoginPage} />
                  <AppRoute layout={GuestLayout} path="/signup" component={SignupPage} />
                  <AppRoute layout={GuestLayout} component={PageNotFound} />
              </Switch>
        </BrowserRouter>, document.getElementById('react-target'));
});
