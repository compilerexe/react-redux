import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import 'bulma/css/bulma.css'
import 'sweetalert'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const Main = (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={SignIn}/>
      <Route exact path='/sign_up' component={SignUp}/>
    </Switch>
  </HashRouter>
)

ReactDOM.render(Main, document.getElementById('app'))