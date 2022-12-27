import Countdown from 'react-count-down'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'
 
const Cb = () => {
  console.log('expired callback')
}
 
const OPTIONS = { endDate: '03/01/2023 10:55 AM', prefix: 'until my birthday!', Cb}
 
const TestComponent = () => (
  <Countdown options={OPTIONS} />
)
 
ReactDOM.render( <TestComponent />, document.getElementById('root') )

export default Cb