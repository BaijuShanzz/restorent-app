import React from 'react'
import {Routes,Route} from "react-router-dom";
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Pages/Home/Home';
import Dishes from '../Components/Pages/Dishes/Dishes';
import Booking from '../Components/Pages/Booking/Booking';
import About from '../Components/Pages/About/About';
import NotFound from '../Components/Pages/NotFound/NotFound';
function LayourRoutes() {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dishes' element={<Dishes/>}/>
        <Route path='/services' element={<Booking/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/*' element={<NotFound/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default LayourRoutes