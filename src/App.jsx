
import './App.css'
import {Routes,Route} from 'react-router-dom'
import MainPage from './components/mainpage/MainPage'
import Product from './components/product-view/product'
import Profile_main from './components/profile-main/profile_main'
import Profile_view from './components/profile-main/profile-view/Profile_view'
import Edit_picture from './components/profile-main/Profile/edit-picture/Edit_picture'
import Login from './components/login/Login'
import SignIn from './components/signIn/SignIn'
import Sell_main from './components/sell/Sell_main'
function App() {
  

  return (
   <div>
<Routes>
  <Route path='/' element= { <MainPage/>}/>
  <Route path='/details' element= { <Product/>}/>
   <Route path='/edit_profile' element={<Profile_main/>}/>
   <Route path='/view_profile' element={<Profile_view/>}/>
   <Route path='/profile_picture' element={<Edit_picture/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/signin' element={<SignIn/>}/>
   <Route path='/add_product' element={<Sell_main/>}/>
    </Routes>
    
   </div>
  )
}

export default App
