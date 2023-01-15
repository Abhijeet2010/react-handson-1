import React, { Component } from 'react'
import "./ClassDiv.css"

export class ClassDiv extends Component {
  render() {
    return (
      <div className='classDiv'>
         <h3 style={{textAlign:"center"}}>This box create using class Based Component</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error et autem id nulla ea architecto debitis tempora maxime laborum ipsam molestias a incidunt ex atque, eius dolore? Nulla, illum culpa.</p>
      </div>
    )
  }
}

export default ClassDiv