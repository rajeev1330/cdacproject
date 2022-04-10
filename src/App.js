import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import ContactUs from './components/ContactUs';
//import Signin from './components/Signin';
import Signup from './components/Signup';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import ProductDetails from './components/ProductDetails';

import ASignup from './seller/sellerSignup ';
import SellerSignin from './seller/sellerlogin';
import AdminSignin from './admin/adminlogin';
import Signin from './components/Signin';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        {<Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<ContactUs />} />
          <Route exact path='/signin' element={<Signin />} />
          
          <Route exact path='/signup' element={<Signup />} />
        
          <Route exact path='/sellerlogin' element={<SellerSignin/>}/>
          <Route exact path='/sellersignup' element={<ASignup/>}/>
           
          <Route exact path='/adminlogin' element={<AdminSignin/>}/>
          <Route exact path='/products/1' element={<ProductDetails />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>}
        <Footer />
      </Router>
    </>
  );
}

export default App;
