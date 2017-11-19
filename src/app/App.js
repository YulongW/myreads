import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css'

import ListBooks from './screens/ListBooks'
import SearchBooks from './screens/SearchBooks'

class BooksApp extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

          <Route exact path='/' component={ListBooks}/>
          <Route path='/search' component={SearchBooks}/>

          <div className="open-search">
            <Link className='close-create-contact' to='/search'>
              <button className="mdc-fab material-icons" aria-label="Search">
                <span className="mdc-fab__icon">
                  search
                </span>
              </button>
            </Link>
          </div>
        </div>
      </Router>
    )
  }
}

export default BooksApp