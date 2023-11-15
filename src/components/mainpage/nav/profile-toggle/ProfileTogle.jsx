import React from 'react'
import './profileTogle.css'
import {useNavigate} from 'react-router-dom'

function ProfileTogle() {
  const navigate = useNavigate();
  const onclickHandle=()=>{
    navigate('/edit_profile')
  }
  return (
    <div>
      
        <div className="profile-box">
        <div className="profile-box-main">
          <div className="name">
            <img src="https://media.istockphoto.com/id/1357723739/photo/studio-portrait-of-a-smiling-young-latin-woman.jpg?s=612x612&w=0&k=20&c=RIELgbZwYohh88kbJfteuuXIw_zLyRx-of4FiyUCIws="
             alt="" />
             <h3> Siraj P</h3>
          </div>
          <div onClick={onclickHandle} className="view-profile">
            <h4>View and edit profile</h4>
          </div>
          <div className="my-ads">
          <i class="fa-regular fa-heart"></i>
          <p>My Ads</p>
          </div>
          <div className="line"></div>
          <div className="my-ads">
          <i class="fa-solid fa-question"></i>
          <p>Help</p>
          </div>
          <div className="my-ads">
          <i class="fa-solid fa-gear"></i>
          <p>Settings</p>
          </div>
          <div className="my-ads">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
          <p>Logout</p>
          </div>


        </div>
        </div>
    </div>
  )
}

export default ProfileTogle