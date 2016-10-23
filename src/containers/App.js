import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Prototype system</h1>
        <ul>
          <li><Link to='/auth'>Login</Link></li>
          <li><Link to='/project'>Project</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}