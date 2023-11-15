import React from 'react'
import Nav from './nav/Nav'
import Row from './row/Row'
import SecFooter from './secFooter/SecFooter'
import Hero_sec from './hereo-sec/Hero_sec'

function MainPage() {
  return (
    <div>
       <Nav/>
<Hero_sec/>
       <Row/>
       <SecFooter/>
    </div>
  )
}

export default MainPage