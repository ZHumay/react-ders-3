import React, { Component } from 'react'
import Address from '../Address/Address'
import Email from '../Email/Email'
import Name from '../Name/Name'
import PersonalInfo from '../PersonalInfo/PersonalInfo'

export default class Profile extends Component {
  render() {
    return (
      <>
      <div  className='container'>
        <p> User:</p>
        <Name/>
        <Address/>
        <Email/>
        <PersonalInfo/>
        </div>
      </>
    )
  }
}
