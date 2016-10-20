import React, { Component } from 'react'
import { Link } from 'react-router'
import './nav.scss'

export default class Nav extends Component {
	render() {
		return <div className='nav'>
			<ul>
				<li>
					<Link to='/auth'>Логин</Link>
				</li>
				<li>
					<Link to='/main'>Главная</Link>
				</li>
			</ul>
		</div>
	}
}