import React from 'react'
import View_profile from './view-profile/View_profile'
import Nav from '../../mainpage/nav/Nav'
import SecFooter from '../../mainpage/secFooter/SecFooter'
function Profile_view() {
  return (
    <div>
<Nav/>
        <View_profile/>
        <SecFooter/>
    </div>
  )
}

export default Profile_view