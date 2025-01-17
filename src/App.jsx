import './App.css'
import Support from './Support/Support'
import Login from './Login/Login'
import Signup from './Login/Signup'
import ActualHome from './Home/abc'
import Board from './DASHBOARD/board'

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Items from './Products/Items/Items'
import Cart from './Cart/Cart'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Profile from './Profile/Profile'
import Chatbox from './ChatBox/Chatbox'


function App() {

  return (
    <>
    {/* <Navbar /> */}
    {/* <Home /> */}
    {/* <Products /> */}
    {/* <Services /> */}
    {/* <Support /> */}
    {/* <Add /> */}
    {/* <Footer /> */}


    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ActualHome />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/Item' element={<Items />}></Route>
        <Route path='/Support' element={<Support />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/dashboard' element={<Board />}></Route>
        <Route path='/profile' element={<Profile username="USER"/>}></Route>
      </Routes>
      <Chatbox />
      <Footer />
    </BrowserRouter>


    </>
  )
}

export default App
