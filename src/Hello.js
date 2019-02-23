import React from 'react'
import './Hello.css'

const Hello = ({ greeting }) => {
  return (
    <div className="f1 tc">
      <h1>Hellow</h1>
      <p>World</p>
      <p>{greeting}</p>
    </div>
  )
}

export default Hello
