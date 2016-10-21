import React from 'react'
import { render } from 'react-dom'
import './styles/app.scss'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/app'
import MainPage from './components/nav/nav'

const routes = (
  <Route path='/' component={App}>
	<Route path='/main' component={MainPage}/>
</Route>
);

render((
  <Router history={browserHistory}>
	{routes}
  </Router>
), document.getElementById('root'))
