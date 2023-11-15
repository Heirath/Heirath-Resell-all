import React  from "react";
import { useNavigate } from "react-router-dom";
import "./edit_picture.css";
import Nav from "../../../mainpage/nav/Nav";
import SecFooter from "../../../mainpage/secFooter/SecFooter";

function Edit_picture() {
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
      <div>
        <Nav />
        <div className="profile-main">
          <div className="picture-edit">
            <h5 onClick={editProfile}>Edit profile</h5>
            <h3 onClick={profilePicture} >Profile Picture</h3>
            <button onClick={onclickHandle}>View profile</button>
          </div>

          <div className="edite-side">
            <h4> Profile picture</h4>
            <div className="line"></div>
            <div className="picture-container">
            <div className="dp">
            <img src="https://media.istockphoto.com/id/1357723739/photo/studio-portrait-of-a-smiling-young-latin-woman.jpg?s=612x612&w=0&k=20&c=RIELgbZwYohh88kbJfteuuXIw_zLyRx-of4FiyUCIws="
             alt="" />
            </div>
            <div className="content">
                <p>Clear photos are an important way for buyers and sellers to learn about each other. Be sure doesn’t include any personal or sensitive info you’d rather not have others see.</p>
           <h3>It’s not much fun to chat with a landscape!</h3>
           <div className="button">
           <button>Upload</button>
           <p>or</p>
           <div className="basic-tip-2">
 <p>Contineu with google</p>
</div>
</div>
            </div>
          </div>
          </div>
        
        </div>
        <SecFooter />
      </div>
    </div>
  );
}

export default Edit_picture;
