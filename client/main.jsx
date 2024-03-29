import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import {BrowserRouter, Route, Switch} from "react-router-dom";

import App from "../imports/ui/App";
import CartContainer from "../imports/ui/CartContainer";
import Products from "../imports/ui/Products";
import BooksContainer from "../imports/ui/BooksContainer";
import MusicContainer from "../imports/ui/MusicContainer";
import Layout from "../imports/ui/components/Layouts/AdminLayout";
import PageNotFound from "../imports/ui/components/PageNotFoundComponent";

Meteor.startup(() => {
  render(<BrowserRouter>
          <Layout>
              <Switch>
                  <Route  path="/" exact component={App}/>
                  <Route  path="/cart" component={CartContainer}/>
                  <Route  path="/products" component={Products}/>
                  <Route  path="/books" component={BooksContainer}/>
                  <Route  path="/music" component={MusicContainer}/>
                  <Route component={PageNotFound} />
              </Switch>
          </Layout>
        </BrowserRouter>, document.getElementById('react-target'));
});
