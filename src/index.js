import 'babel-polyfill'
import React, { Component } from 'react'
import { render } from 'react-dom'
import './styles/app.css'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'


class App extends Component {
	render() {
		return <div className='container'>
			<div>Heading</div>
			<Nav></Nav>
			{this.props.children}
		</div>
	}
}

class Nav extends Component {
	render() {
		return <div>
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


class AuthPage extends Component {
	render() {
		return <div>
			<h1>Страница логина</h1>
			<button>Войти</button>
		</div>
	}
}

class MainPage extends Component {
	render() {
		return <div>
			<h1>Главная страница</h1>
			<p>Приветики</p>
		</div>
	}
}

class NoMatch extends Component {
	render() {
		return <div>
			<h1>404</h1>
		</div>
	}
}

render((
  <Router history={browserHistory}>
	<Route path='/' component={App}>
		<IndexRoute component={MainPage} />
		<Route path='auth' component={AuthPage}/>
		<Route path='main' component={MainPage}/>
		<Route path='*' component={NoMatch}/>
	</Route>
  </Router>
), document.getElementById('root'))
