import SectionTitle from "../SectionTitle/SectionTitle"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";
import { useContext, useState } from "react";
import { prodContext } from '../../../context/CartWishlistContext';
import { motion } from "framer-motion";

const Feature = () => {
  const features = [
    {
      title: "Modern Grey Sofa",
      status: "New",
      price: "$899",
      currentPrice: "$749",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Minimalist Wooden Chair",
      status: "New",
      price: "$199",
      currentPrice: "$179",
      image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      title: "Vintage Armchair",
      status: "On Sale",
      price: "$299",
      currentPrice: "$229",
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
    },
    {
      title: "Scandinavian Coffee Table",
      status: "New",
      price: "$349",
      currentPrice: "$299",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      title: "Rustic Bookshelf",
      status: "On Sale",
      price: "$449",
      currentPrice: "$349",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "L-Shaped Sectional",
      status: "New",
      price: "$999",
      currentPrice: "$879",
      image: "https://images.unsplash.com/photo-1583845112203-29329902330b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      title: "Industrial Dining Set",
      status: "On Sale",
      price: "$1199",
      currentPrice: "$949",
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    },
    {
      title: "Velvet Accent Chair",
      status: "New",
      price: "$379",
      currentPrice: "$329",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1558&q=80",
    },
    {
      title: "White Dresser",
      status: "On Sale",
      price: "$599",
      currentPrice: "$479",
      image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Compact Work Desk",
      status: "New",
      price: "$299",
      currentPrice: "$249",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    },
    {
      title: "Upholstered Bed Frame",
      status: "New",
      price: "$699",
      currentPrice: "$639",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Recliner Leather Chair",
      status: "On Sale",
      price: "$549",
      currentPrice: "$459",
      image: "https://images.unsplash.com/photo-1643384075012-1a0d0e1a1c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Classic Nightstand",
      status: "New",
      price: "$179",
      currentPrice: "$159",
      image: "https://images.unsplash.com/photo-1616628182501-9fa92a6281d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Wooden TV Stand",
      status: "On Sale",
      price: "$389",
      currentPrice: "$289",
      image: "https://images.unsplash.com/photo-1616627454905-8d01d1dc9b0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Glass Dining Table",
      status: "New",
      price: "$899",
      currentPrice: "$779",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Foldable Study Table",
      status: "New",
      price: "$159",
      currentPrice: "$139",
      image: "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80",
    },
    {
      title: "Cozy Loveseat",
      status: "On Sale",
      price: "$499",
      currentPrice: "$389",
      image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    },
    {
      title: "Outdoor Patio Set",
      status: "New",
      price: "$899",
      currentPrice: "$789",
      image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    }
  ];

  const { cart, setCart, wished, setWished } = useContext(prodContext);
  

  const [productStates, setProductStates] = useState({});

  function _wished(item) {
    const existItem = wished.find(elem => elem.id === item.id);
    if (existItem) {
      setWished(wished.filter(elem => elem.id !== item.id));
    } else {
      setWished([...wished, item]);
    }
  }

  function handleShowQuantity(featureId) {
    setProductStates(prev => ({
      ...prev,
      [featureId]: {
        ...prev[featureId],
        showQuantity: true,
        quantity: prev[featureId]?.quantity || 1
      }
    }));
  }

  function handleIncrementQuant(featureId) {
    setProductStates(prev => ({
      ...prev,
      [featureId]: {
        ...prev[featureId],
        quantity: (prev[featureId]?.quantity || 1) + 1
      }
    }));
  }

  function handleDecrementQuant(featureId) {
    setProductStates(prev => ({
      ...prev,
      [featureId]: {
        ...prev[featureId],
        quantity: Math.max(1, (prev[featureId]?.quantity || 1) - 1)
      }
    }));
  }

  function handleAddToCart(feature) {
    const featureId = feature.id || feature.title;
    const quantity = productStates[featureId]?.quantity || 1;
    
    const existItem = cart.find(elem => elem.id === featureId);
    
    if (existItem) {
      setCart(cart.map(elem =>
        elem.id === featureId ?
          { ...elem, quantity: quantity } : elem
      ));
    } else {
      setCart([...cart, { ...feature, id: featureId, quantity: quantity }]);
    }
    
    setProductStates(prev => ({
      ...prev,
      [featureId]: {
        ...prev[featureId],
        showQuantity: false,
        quantity: 1
      }
    }));
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <div className="bg-gray-900 py-16 rounded-3xl">
      <div className="lg:container mx-auto flex flex-col items-center justify-center mb-10 p-3">
        <SectionTitle title="Featured Products" m="mb-16" />

        <div className="slider-container features_slider w-[90vw] px-10">
          <Slider {...settings}>
            {features?.map((feature, index) => {
              const featureId = feature.id || feature.title;
              const showQuantity = productStates[featureId]?.showQuantity || false;
              const quantity = productStates[featureId]?.quantity || 1;

              return (
                <div key={index} className="px-3 group">
                  <div className="bg-gray-800 rounded-3xl p-6 text-gray-100 transition-all duration-300 hover:bg-gray-700 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="feature_image relative overflow-hidden rounded-2xl">
                      <img
                        src={feature?.image}
                        alt={feature?.title}
                        className="w-full h-[300px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                      />
                      {feature?.status && (
                        <div className="absolute top-4 left-4">
                          <button className={`${feature.status === "New" ? 'bg-purple-600 hover:bg-purple-700' : 'bg-amber-500 hover:bg-amber-600'} text-white px-4 py-2 rounded-full text-xs font-medium shadow-lg transition-colors duration-300`}>
                            {feature?.status}
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="feature-content mt-6">
                      <div className="flex flex-col items-center gap-4">
                        <h4 className="text-xl font-bold text-gray-100 group-hover:text-purple-400 transition-colors duration-300">
                          {feature?.title}
                        </h4>
                        {feature?.status === "On Sale" && feature?.currentPrice ? (
                          <p className="text-xl flex items-center gap-2 text-amber-400 font-bold">
                            {feature?.currentPrice}
                            <span className="text-sm text-gray-400 font-normal line-through">
                              {feature?.price}
                            </span>
                          </p>
                        ) : feature?.status === "New" ? (
                          <p className="text-xl text-purple-400 font-bold">
                            {feature?.price}
                          </p>
                        ) : null}

                        {!showQuantity ? (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex justify-between w-full rounded-lg bg-gradient-to-r from-[#6B46C1] to-[#805AD5] px-4 py-3 text-sm font-medium text-white transition hover:shadow-lg hover:shadow-[#6B46C1]/50"
                            onClick={() => handleShowQuantity(featureId)}
                          >
                            <ShoppingCart size={18} /> Add to Cart
                          </motion.button>
                        ) : (
                          <div className="flex flex-col w-full gap-2">
                            <div className="flex items-center justify-between w-full gap-2">
                              <div className="flex items-center gap-1">
                                <motion.button
                                  whileTap={{ scale: 0.9 }}
                                  type="button"
                                  onClick={() => handleDecrementQuant(featureId)}
                                  className="size-8 rounded-full bg-[#111827] text-white transition hover:bg-[#6B46C1] flex items-center justify-center"
                                >
                                  -
                                </motion.button>

                                <input
                                  type="number"
                                  value={quantity}
                                  onChange={(e) => {
                                    const newValue = Math.max(1, Number(e.target.value));
                                    setProductStates(prev => ({
                                      ...prev,
                                      [featureId]: {
                                        ...prev[featureId],
                                        quantity: newValue
                                      }
                                    }));
                                  }}
                                  className="quantity h-10 w-16 rounded-lg border border-[#6B46C1] bg-[#111827] text-center text-white [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                />

                                <motion.button
                                  whileTap={{ scale: 0.9 }}
                                  type="button"
                                  onClick={() => handleIncrementQuant(featureId)}
                                  className="size-8 rounded-full bg-[#111827] text-white transition hover:bg-[#6B46C1] flex items-center justify-center"
                                >
                                  +
                                </motion.button>
                              </div>
                              
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="rounded-lg bg-gradient-to-r from-[#6B46C1] to-[#805AD5] px-4 py-2 text-sm font-medium text-white transition hover:shadow-lg hover:shadow-[#6B46C1]/50"
                                onClick={() => handleAddToCart(feature)}
                              >
                                Done
                              </motion.button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Feature;