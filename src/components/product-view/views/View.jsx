import React from 'react'
import './View.css'

function View() {
  return (
    <div>
        <div className="detail-container-main">
        <div className="detail-container">
          <div className="img-container">
            <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-116808,resizemode-75,msid-98868851/top-trending-products/mobile-phones/10-best-selling-mobile-phones-under-10000-in-india.jpg" alt="" />
            </div>
            <div className="small-img">
                <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-116808,resizemode-75,msid-98868851/top-trending-products/mobile-phones/10-best-selling-mobile-phones-under-10000-in-india.jpg" alt="" />
                <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-116808,resizemode-75,msid-98868851/top-trending-products/mobile-phones/10-best-selling-mobile-phones-under-10000-in-india.jpg" alt="" />
                <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-116808,resizemode-75,msid-98868851/top-trending-products/mobile-phones/10-best-selling-mobile-phones-under-10000-in-india.jpg" alt="" />
            </div>
            <div className="details">
                <h4>Details</h4>
                <div className="details-row">
                    <p>Brand</p>
                    <p>I phone</p>
                </div>

            </div>
            <div className="discription">
                <h4>Description</h4>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. N</p>
            </div>
        </div>
        <div className="price-side">
            <div className="price-container">
                <h3>$ 30,000</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quas?</p>
            <p className='date'>Today</p>
            </div>
            <div className="poster-details">
                <h5>Posted</h5>
                <h3>Heirath store</h3>
                <p>Pattambi,kerala.</p>
            </div>
        </div>
        </div>

    </div>
  )
}

export default View