import React, { Component } from 'react'
import Nav from './nav/nav'

export default class App extends Component {
	render() {
		return <div className='container'>
			<div>Heading</div>
			<Nav></Nav>
			{this.props.children}
		</div>
	}
}