import React, { useContext, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { prodContext } from '../../../context/CartWishlistContext';
import { motion } from 'framer-motion';

function ProductItem({ item }) {
  const { cart, setCart, wished, setWished } = useContext(prodContext);
  const [isWished, setIsWished] = useState(false);
  const [showQuantity, setShowQuantity] = useState(false);
  const [quantityCounter, setQuantity] = useState(1);

  function _wished(item) {
    const existItem = wished.find(elem => elem.id === item.id);
    if (existItem) {
      setWished(wished.filter(elem => elem.id !== item.id));
      setIsWished(false);
    } else {
      setWished([...wished, item]);
      setIsWished(true);
    }
  }

  function IncrementQuant() {
    setQuantity(Math.min(quantityCounter + 1, item.stock));
  }

  function decrementQuant() {
    setQuantity(Math.max(quantityCounter - 1, 1));
  }

  function addToCart() {
    const existItem = cart.find(elem => elem.id === item.id);

    if (existItem) {
      setCart(cart.map(elem =>
        elem.id === item.id ?
          { ...elem, quantity: quantityCounter } : elem
      ));
    } else {
      setCart([...cart, { ...item, quantity: quantityCounter }]);
    }
    
    resetCartState();
  }

  function resetCartState() {
    setShowQuantity(false);
    setQuantity(1);
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="group relative block overflow-hidden border border-solid border-[#6B46C1] m-8 rounded-2xl bg-[#1F2937] shadow-lg hover:shadow-xl hover:shadow-[#6B46C1]/20"
    >
      <button
        className="absolute end-4 top-4 z-10 rounded-full bg-[#111827] p-1.5 text-white transition hover:scale-110 hover:text-[#F59E0B]"
        onClick={() => _wished(item)}
      >
        <span className="sr-only">Wishlist</span>
        {!isWished ?
          <span className='notWishbutton'><FaRegHeart /></span> :
          <span className='Wished'><FcLike /></span>
        }
      </button>

      <img
        src={item.images[0]}
        alt=""
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative border-t border-[#6B46C1] bg-[#1F2937] p-6">
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-[#F59E0B]">
            ${item.price}
          </p>
          {item.discountPercentage && (
            <span className="bg-[#6B46C1] text-white text-xs font-semibold px-2.5 py-0.5 rounded">
              {item.discountPercentage}% OFF
            </span>
          )}
        </div>

        <h3 className="mt-1.5 text-lg font-medium text-white">{item.title}</h3>

        <p className="mt-1.5 line-clamp-3 text-gray-300">
          {item.description}
        </p>

        <div className="mt-4">
          {!showQuantity ? (
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full rounded-lg bg-gradient-to-r from-[#6B46C1] to-[#805AD5] px-4 py-3 text-sm font-medium text-white transition hover:shadow-lg hover:shadow-[#6B46C1]/50"
                onClick={() => setShowQuantity(true)}
              >
                Add to Cart
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full rounded-lg bg-gradient-to-r from-[#5A67D8] to-[#4C51BF] px-4 py-3 text-sm font-medium text-white transition hover:shadow-lg hover:shadow-[#5A67D8]/50"
              >
                Buy Now
              </motion.button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-1">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  onClick={decrementQuant}
                  className="size-8 rounded-full bg-[#111827] text-white transition hover:bg-[#6B46C1] flex items-center justify-center"
                >
                  -
                </motion.button>

                <input
                  type="number"
                  value={quantityCounter}
                  onChange={(e) => setQuantity(Math.max(1, Math.min(item.stock, Number(e.target.value))))}
                  className="quantity h-10 w-16 rounded-lg border border-[#6B46C1] bg-[#111827] text-center text-white [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                />

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  onClick={IncrementQuant}
                  className="size-8 rounded-full bg-[#111827] text-white transition hover:bg-[#6B46C1] flex items-center justify-center"
                >
                  +
                </motion.button>
              </div>

              <div className="flex gap-2 w-full">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full rounded-lg bg-gradient-to-r from-[#F59E0B] to-[#D97706] px-4 py-2 text-sm font-medium text-white transition hover:shadow-lg hover:shadow-[#F59E0B]/50"
                  onClick={resetCartState}
                >
                  Cancel
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full rounded-lg bg-gradient-to-r from-[#6B46C1] to-[#805AD5] px-4 py-2 text-sm font-medium text-white transition hover:shadow-lg hover:shadow-[#6B46C1]/50"
                  onClick={addToCart}
                >
                  Done
                </motion.button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProductItem;