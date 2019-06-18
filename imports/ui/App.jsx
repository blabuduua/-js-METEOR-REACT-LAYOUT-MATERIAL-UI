import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Store</h1>
                <ul>
                    <li><Link to='/products'>products</Link></li>
                    <li><Link to='/cart'>cart</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
