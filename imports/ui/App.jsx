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
                <Link to="/">Home</Link>
                <Link to="/cart">agent</Link>
                <Link to="/flights">admin</Link>
                <Link to="/lists">hab</Link>
                {this.props.children}
            </div>
        )
    }
}
