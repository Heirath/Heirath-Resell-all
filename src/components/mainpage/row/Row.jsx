import React from "react";
import "./row.css";
import {Link} from 'react-router-dom'

function Row() {
  return (
    <div>
      <div className="title">
        <h2>Fresh Recomentation</h2>
      </div>
      <div className="cards-main">
        <Link to={'./details'}> 
        <div className="cards">
        <i class="fa-regular fa-heart"></i>
          <img
            src="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg"
            alt=""
          />
          <div className="details">
            <h4> $ 3,80,000</h4>
            <p className="black-p">2014 - 122000 km</p>
            <p className="grey-p">Wolks wagon m2</p>
          </div>
          <div className="place">
            <p>Pattambi</p>
            <p>
                5 Days ago
            </p>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Row;
