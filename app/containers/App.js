
import React, { Component } from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

class App extends Component {
  render() {
    return (
      <div className='dear-hbd'>
        <Helmet title='React Redux boilerplate' />
        {this.props.children}
      </div>
    )
  }
}

export default App
