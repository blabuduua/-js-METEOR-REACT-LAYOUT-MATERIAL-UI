import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Product from './components/ProductComponent';
import ProductsCollection from '../api/ProductsCollection';
import { addToCart } from '../api/methods';

class Products extends Component {
    constructor(props) {
        super(props);
        this.onAddToCart = this.onAddToCart.bind(this);
    }

    onAddToCart(product){
        addToCart(product);
    }


    render() {
        const { products } = this.props;


        return (
            <div>
                <h2>Product List</h2>

                {products.map(product =>
                    <Product
                        title={product.title}
                        price={product.price}
                        quantity={product.inventory}
                        key={product._id}

                        onAddToCart={() => this.onAddToCart(product)}
                    />
                )}

            </div>
        )
    }
}


export default Products = withTracker(() => {
    return {
        products: ProductsCollection.find({department: 'music'}).fetch(),
    };
})(Products);
