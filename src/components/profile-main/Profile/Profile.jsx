import React from 'react'
import './Profile.css'
import {useNavigate} from 'react-router-dom'

function Profile() {
  const navigate = useNavigate();
  const onclickHandle=()=>{
    navigate('/view_profile')
  }
  const profilePicture=()=>{
    navigate('/profile_picture')
  }
  const editProfile =()=>{
    navigate('/edit_profile')
  }
  return (
    <div>
        <div className="profile-main">
          <div className="picture-edit">
          <h3 onClick={editProfile}>Edit profile</h3>
          <h5 onClick={profilePicture} >Profile Picture</h5>
          <button className='borderButton' onClick={onclickHandle}>View profile</button>
          </div>

          <div className="edite-side">
<h4>Edit profile</h4>
<div className="line"></div>
<div className="contain">
<h3>Basic information</h3>
<div className="basic">
  <div className="basic-input">
    <input type="text" placeholder='Name'/>
    <input type="text" placeholder='Aabout me (optional)'/>
  </div>
  <div className="basic-tip">
    <h3>Why is it important?</h3>
    <p>Heirath is built on trust. Help other people get to know you. Tell them about the things you like. Share your favorite brands, books, movies, shows, music, food. And you will see the results…</p>
  </div>
</div>
</div>
<div className="line"></div>
<div className="contain">
<h3>Contact information</h3>
<div className="basic">
<div className="basic-input">
  <div className="contact-div">
  <input type="number" placeholder='Phone'/>
  <p>Yay! Your number is verified</p>
  </div>
  <div className="contact-div">
  <input type="email" placeholder='Email'/>
  <p>Your email is never shared with external parties nor do we use it to spam you in any way.</p>
  </div>
</div>
</div>

</div>
<div className="line"></div>
<div className="contain">
  <h3>Additional information</h3>
  <div className="basic-2">
  <div className="google">
    <h6>Google</h6>
    <p  className='google'>Link your Google account to seamlessly use your contact list.</p>
</div>
<div className="basic-tip-2">
 <p>Contineu with google</p>
</div>

</div>
</div>

<div className="save">
  <h2> Discard</h2>
  <h2>Save changes</h2>
</div>


</div>
        

        </div>
      
    </div>
  )
}

export default Profile