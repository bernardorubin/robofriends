import React, { Component } from 'react'
import './Hello.css'

export default class Hello extends Component {
  render() {
    const { greeting } = this.props
    return (
      <div className="f1 tc">
        <h1>Hellow</h1>
        <p>World</p>
        <p>{greeting}</p>
      </div>
    )
  }
}
