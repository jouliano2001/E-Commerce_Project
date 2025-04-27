import { useRef } from "react";
import Banner from "../../Components/Banner/Banner";
import Brand from "../../Components/Brand/Brand";
import Categories from "../../Components/Categories/Categories";
import Delivery from "../../Components/Delivery/Delivery";
import Feature from "../../Components/Feature/Feature";
import { motion, useInView } from "framer-motion";

const Home = () => {
  const bannerRef = useRef(null);
  const deliveryRef = useRef(null);
  const brandRef = useRef(null);
  const featureRef = useRef(null);
  const categoriesRef = useRef(null);
  const isBannerInView = useInView(bannerRef, { once: true, margin: "-100px" });
  const isDeliveryInView = useInView(deliveryRef, { once: true, margin: "-100px" });
  const isBrandInView = useInView(brandRef, { once: true, margin: "-100px" });
  const isFeatureInView = useInView(featureRef, { once: true, margin: "-100px" });
  const isCategoriesInView = useInView(categoriesRef, { once: true, margin: "-100px" });

  return (
    <div className="relative min-h-screen w-[100vw] overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="relative flex flex-col justify-center align-middle items-center">
        <motion.div 
          ref={bannerRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isBannerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="w-[80%] bg-gray-800 min-h-[600px] m-[20px] flex items-center justify-center rounded-3xl shadow-2xl shadow-purple-500/20 border border-gray-700"
        >
          <Banner />
        </motion.div>

        <motion.div 
          ref={deliveryRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isDeliveryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-[70%] bg-gray-800 min-h-[150px] p-7 mb-20 rounded-3xl shadow-lg shadow-purple-500/10 border border-gray-700"
        >
          <Delivery />
        </motion.div>

        <motion.div 
          ref={brandRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isBrandInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="brand_container bg-gray-800 flex items-center justify-center w-[80%] py-10 rounded-3xl shadow-2xl shadow-purple-500/20 border border-gray-700"
        >
          <Brand />
        </motion.div>

        <motion.div 
          ref={featureRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isFeatureInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="features bg-transparent flex items-center justify-center w-[90vw] m-10 py-10 rounded-3xl"
        >
          <Feature />
          
        </motion.div>

        <motion.div 
          ref={categoriesRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isCategoriesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="Categories bg-transparent flex items-center justify-center w-[90vw] mb-10 mx-10 py-5 rounded-3xl"
        >
          <Categories />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;