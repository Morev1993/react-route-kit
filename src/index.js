import 'babel-polyfill'
import React, { Component } from 'react'
import { render } from 'react-dom'
import './styles/app.scss'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Nav from './components/nav/nav'


const App = ({ children }) => (
	<div className='container'>
		<div>Heading</div>
		<Nav></Nav>
		{children}
	</div>
);


class AuthPage extends Component {
	render() {
		return <div>
			<h1>Страница логин</h1>
			<button>Войти</button>
		</div>
	}
}

class MainPage extends Component {
	render() {
		return <div>
			<h1>Главная страница</h1>
			<p>Приветик</p>
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
