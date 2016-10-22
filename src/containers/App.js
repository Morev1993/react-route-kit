import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>App</h1>
        <ul>
          <li><Link to='/auth'>Login</Link></li>
          <li><Link to='/project'>Project</Link></li>
        </ul>
        {/* добавили вывод потомков */}
        {this.props.children}
      </div>
    )
  }
}