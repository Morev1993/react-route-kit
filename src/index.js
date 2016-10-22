import './styles/app.scss'

import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import Main from './components/main/Main'
import Auth from './components/auth/Auth'
import Project from './components/project/Project'
import NotFound from './components/notFound/NotFound'

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
