import React ,{useState} from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import ProfileTogle from "./profile-toggle/ProfileTogle";

function Nav() {
  const [togleValue, settogleValue] = useState(false)
  const onclickHandle=()=>{
    settogleValue(!togleValue)
    
  }
 
  return (
    
    <div>
    {togleValue &&  <ProfileTogle/>}
     
      <div className="nav-head">
        <Link to={"/"}>
          <div className="nav-logo">
            <h1>
              Heirath <span>.</span>{" "}
            </h1>
          </div>
        </Link>
        <div className="location">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="location" />
        </div>
        <div className="search">
          <input type="text" placeholder="search" />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="select">
          <select name="English" id="">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Arabic">Arabic</option>
            <option value="Malayalam">malayalam</option>
          </select>
        </div>
        <div className="chat-logo">
          <i class="fa-regular fa-comment"></i>
        </div>
        <div className="notification">
          <i class="fa-regular fa-bell"></i>
        </div>

        <div value={togleValue} onClick={onclickHandle} className="profile-img">
          <img
            src="https://media.istockphoto.com/id/1357723739/photo/studio-portrait-of-a-smiling-young-latin-woman.jpg?s=612x612&w=0&k=20&c=RIELgbZwYohh88kbJfteuuXIw_zLyRx-of4FiyUCIws="
            alt=""
          />
          <i class="fa-solid fa-angle-down"></i>
        </div>

        <div className="sell">
          <Link to={'/add_product'}>
          <p>+ SELL</p>
          </Link>
         
        </div>
      </div>
    </div>
  );
}

export default Nav;
