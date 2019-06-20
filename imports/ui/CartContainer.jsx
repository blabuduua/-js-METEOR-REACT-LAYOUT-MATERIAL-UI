import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import CartCollection from '../api/CartCollection';
import CartItem from './components/CartItemComponent';
import Inventory from './components/InventoryComponent';
import { removeFromCart, quantityUpdate, simple } from '../api/methods';

class Cart extends Component {
  constructor(props) {
   super(props);
   this.onRemoveItem = this.onRemoveItem.bind(this);
   this.onChangeQuantity = this.onChangeQuantity.bind(this);

   this.state = {
    totalCount: 0,
    isAuthenticated: Meteor.userId() !== null,
   };
 }

 componentWillMount(){
  if (!this.state.isAuthenticated) {
   this.props.history.push('/login');
  }
 }

 componentDidUpdate(prevProps, prevState){
  if (!this.state.isAuthenticated) {
   this.props.history.push('/login');
  }
 }

 onChangeQuantity(id, event) {
  quantityUpdate(id, parseInt(event.target.value));
 }

 onRemoveItem(id){
  removeFromCart(id);
 }

 componentDidMount() {
  simple().then(result => {
   this.setState({
    totalCount: result
   })
  }).catch(err => {
   alert(err);
  });
 }

 componentWillReceiveProps(nextProps, nextContext) {
  simple().then(result => {
   this.setState({
    totalCount: result
   })
  }).catch(err => {
   alert(err);
  });
 }


 render() {
  const { products } = this.props;

  let total = 0;

  products.forEach(function(product) {
   total += parseFloat(product.quantity * product.price);
  });


  return (
      <div>
          <h2>Cart List</h2>

           {products.map(product =>

            <div key={product._id}>

             <CartItem
              title={product.title}
              price={product.price}
              key={`cartItem_${product._id}`}

              onRemoveItem={() => this.onRemoveItem(product._id)}
             />

             <Inventory
              inventory={product.inventory}
              quantity={product.quantity}
              key={`inventory_${product._id}`}

              onChangeQuantity={(event) => this.onChangeQuantity(product._id, event)}
              _id = {product._id}
             />
            </div>
           )}

       <span> Total: {this.state.totalCount} </span>
      </div>
  )
 }
}

export default Cart = withTracker(() => {
 return {
  products: CartCollection.find().fetch(),
 };
})(Cart);
