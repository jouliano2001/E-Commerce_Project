import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "../Components/NavBar/NavBar";
import AuthLayout from "../Pages/Auth/AuthLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Products from '../Components/Products/Products';
import { motion, useInView, useAnimation } from "framer-motion";  
import FooterComponent from '../Footer/FooterComponent';
import { useEffect, useRef } from 'react';
import CartWishlistContext from '../../context/CartWishlistContext';
import CartDrawer from '../Components/CartSide/CartDrawer';
import WishlistDrawer from '../Components/Wishlist/WishlistDrawer';
import CardForm from '../Components/Payment/CardForm';
import CartContent from '../Components/Cart/CartContent';

const MainLayout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <CartWishlistContext>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/*" element={<AuthLayout />} />
         
          <Route path="*" element={
            <div className='flex flex-col items-center justify-center align-middle w-[100vw] bg-gray-900 min-h-screen'>
              <motion.section 
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }} 
                initial="hidden" 
                animate="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
                className='flex flex-col items-center justify-center align-middle w-[100vw]'
              >
                <NavBar />
              </motion.section>

              <motion.section 
                ref={ref}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }} 
                initial="hidden" 
                animate={mainControls} 
                transition={{ duration: 0.3 }}
                className='flex flex-col items-center justify-center align-middle w-[100vw]'
              >
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path='/products' element={<Products />} />
                  <Route path="*" element={<Error />} />
                  <Route path="/payment" element={<CardForm/>} />
                  <Route path="/cart" element={<CartContent/>}/>
                </Routes>
              </motion.section>

              <motion.section 
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }} 
                initial="hidden" 
                whileInView="visible" 
                className='flex flex-col items-center justify-center align-middle w-[100vw]'
              >
                <FooterComponent />
              </motion.section>
              <CartDrawer/>
              <WishlistDrawer/>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </CartWishlistContext>
  );
};

export default MainLayout;