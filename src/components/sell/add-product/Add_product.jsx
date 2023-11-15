import React from 'react'
import './add_product.css'
import Nav from '../../mainpage/nav/Nav'
import SecFooter from '../../mainpage/secFooter/SecFooter'
import { Link } from 'react-router-dom'

function Add_product() {
  return (
    <div>
        <Nav/>
         <div className="sell-main">
            <div className="sell-page">
                <h1>ADD YOUR PRODUCTS HERE</h1>
                <form action="">
                    <label htmlFor="">Product name

                    <input type="text" /></label>
                    <label htmlFor="">Brand
                    <input type="text" placeholder='Brand Name'/> </label>
                    <label htmlFor=""> Categery
                    <select name="Select" id="">
                    <option value=""> Mobile</option>
                    <option value=""> Computer</option>
                    <option value=""> Car</option>
                    </select>
                    </label>
                    <label htmlFor=""> Description 
                    <input className='description' type="text" placeholder='write about your product (optional)' />
                    </label>
                    <label htmlFor="">Add product images
                    <input type="file" /></label>
                  
                </form>
                <Link to={'/details'}>
                <button className='borderButton'>Preview</button>
                </Link>
                <p style={{textAlign:'center'}}>or</p>
                <button>Submit</button>
            </div>
        </div>
<SecFooter/>
    </div>
  )
}

export default Add_product