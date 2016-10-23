import './styles/app.scss'

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import Main from './components/Main/Main'
import Auth from './components/Auth/Auth'
import Project from './components/Projects/Projects'
import NotFound from './components/NotFound/NotFound'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Main} />
      <Route path='auth' component={Auth} />
      <Route path='project' component={Project} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
)
