import { motion } from 'framer-motion';
import { useContext } from 'react';
import { prodContext } from '../../../context/CartWishlistContext';

const WishlistDrawer = () => {
  const { wished, setWished, showWish, setShowWish } = useContext(prodContext);

  const removeFromWish = (id) => {
    setWished(wished.filter((item) => item.id !== id));
  };

  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: showWish ? 0 : '-100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 z-50 w-80 h-screen bg-gray-800 shadow-xl overflow-y-auto"
    >
      <div className="p-4">
        <div className="flex justify-between items-center border-b border-gray-700 pb-4">
          <h2 className="text-xl font-bold text-white">Your Wishlist</h2>
          <button
            onClick={() => setShowWish(false)}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 space-y-4">
          {wished.length === 0 ? (
            <p className="text-gray-400">Your Wishlist is empty.</p>
          ) : (
            wished.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-2 bg-gray-700 rounded-lg"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <p className="text-purple-400">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromWish(item.id)}
                  className="text-red-400 hover:text-red-300"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default WishlistDrawer;