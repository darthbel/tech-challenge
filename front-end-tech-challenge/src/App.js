import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import './App.css'
// Redux
import { Provider } from 'react-redux'
import store from './store'

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section>
          <Switch></Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
)

export default App
