import React from 'react'
import './view_profile.css'
import {useNavigate}from'react-router-dom'

function View_profile() {
  const navigate = useNavigate ();
  const onclickHandle=()=>{
navigate('/edit_profile')
  }
  return (
    <div>

       <div className="view-profile-container">
        <div className="view-profile-side">

<img
            src="https://media.istockphoto.com/id/1357723739/photo/studio-portrait-of-a-smiling-young-latin-woman.jpg?s=612x612&w=0&k=20&c=RIELgbZwYohh88kbJfteuuXIw_zLyRx-of4FiyUCIws="
            alt=""
          />
          <h3>Siraj P</h3>
          <p>Member since Jan 2017</p>
          <p>User verified with</p>
          <p>verified logo</p>
          <button onClick={onclickHandle}>Edit profile</button>
          <a href=""> Share profile</a>

        </div>
        <div className="add-side">
          <h3>You haven't listed anything yet</h3>
          <h4>Let go of what you don't use anymore</h4>
          <button>Start selling</button>

        </div>
       </div>
    </div>
  )
}

export default View_profile