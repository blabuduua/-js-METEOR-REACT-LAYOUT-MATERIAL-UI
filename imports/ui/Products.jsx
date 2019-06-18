import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Products extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <h1>Available Products</h1>
            <ul>
              <li><Link to='/books'>books</Link></li>
              <li><Link to='/music'>music</Link></li>
            </ul>
            {this.props.children}
        </div>
    )
  }
}
