import { Meteor } from 'meteor/meteor';

import ProductsCollection from '/imports/api/ProductsCollection';
import CartCollection from '/imports/api/CartCollection';


Meteor.startup(() => {
  if (ProductsCollection.find().count() === 0) {
    const products = JSON.parse(Assets.getText('products.json'));

    products.forEach(function(product) {
      ProductsCollection.insert(product);
    });
  }
});

Meteor.methods({
  cartInsert: function(product) {
    CartCollection.insert({
      'title' : product.title,
      'price' : product.price,
      'inventory' : product.inventory,
      'quantity': 1
    });
  },
  cartRemove: function(id) {
    CartCollection.remove({
      _id: id
    });
  },
  cartUpdate: function(id, value) {
      CartCollection.update(
          {_id: id},
          { $set: { quantity: value } }
      );
  },
  simple: function() {
    return CartCollection.find().count()
  }
});
