import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { prodContext } from '../../../context/CartWishlistContext';
import { useNavigate } from 'react-router-dom';
import CheckoutModal from '../CheckOut/CheckoutModal'; 

const CartDrawer = () => {
  const { cart, setCart, showCart, setShowCart } = useContext(prodContext);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const navigate = useNavigate();

  const parsePrice = (price) => {
    if (typeof price === 'number') return price;
    if (typeof price === 'string') {
      const numericValue = parseFloat(price.replace(/[^0-9.-]+/g, ''));
      return isNaN(numericValue) ? 0 : numericValue;
    }
    return 0;
  };

  const totalPrice = cart?.reduce(
    (sum, item) => sum + (parsePrice(item?.price) * (item?.quantity || 1)),
    0
  ) || 0;

  const removeFromCart = (id) => {
    setCart(cart?.filter((item) => item?.id !== id) || []);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(
      cart?.map((item) =>
        item?.id === id ? { ...item, quantity: newQuantity } : item
      ) || []
    );
  };

  const getImageUrl = (item) => {
    if (Array.isArray(item?.images) && item.images.length > 0) {
      return item.images[0];
    }
    return item?.image || 'https://via.placeholder.com/100';
  };

  const formatPrice = (price) => {
    const numericPrice = parsePrice(price);
    return numericPrice.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const handleCheckoutClick = () => {
    setShowPaymentModal(true);
  };

  const handlePaymentMethodSelect = (method) => {
    setShowPaymentModal(false);
    if (method === 'card') {
      navigate('/payment');
      setShowCart(false);
    } else {
      alert('Cash payment selected. Order confirmed!');
      setCart([]);
      setShowCart(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: showCart ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 z-50 w-80 h-screen bg-gray-800 shadow-xl overflow-y-auto"
      >
        <div className="p-4">
          <div className="flex justify-between items-center border-b border-gray-700 pb-4">
            <h2 className="text-xl font-bold text-white">Your Cart</h2>
            <button
              onClick={() => setShowCart(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="mt-4 space-y-4">
            {!cart || cart.length === 0 ? (
              <p className="text-gray-400">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item?.id || Math.random()}
                  className="flex gap-4 p-2 bg-gray-700 rounded-lg"
                >
                  <img
                    src={getImageUrl(item)}
                    alt={item?.title || 'Product'}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-medium">
                      {item?.title || 'Unknown Product'}
                    </h3>
                    <p className="text-purple-400">{formatPrice(item?.price)}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => updateQuantity(item.id, (item?.quantity || 1) - 1)}
                        className="px-2 bg-gray-600 rounded text-white"
                      >
                        -
                      </button>
                      <span className="text-white">{item?.quantity || 1}</span>
                      <button
                        onClick={() => updateQuantity(item.id, (item?.quantity || 1) + 1)}
                        className="px-2 bg-gray-600 rounded text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>

          {cart?.length > 0 && (
            <div className="mt-6 border-t border-gray-700 pt-4">
              <div className="flex justify-between text-white">
                <span>Total:</span>
                <span className="font-bold">{formatPrice(totalPrice)}</span>
              </div>
              <button
                onClick={handleCheckoutClick}
                className="w-full mt-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </motion.div>

      {showPaymentModal && (
        <CheckoutModal
          onClose={() => setShowPaymentModal(false)}
          onPaymentMethodSelect={handlePaymentMethodSelect}
        />
      )}
    </>
  );
};

export default CartDrawer;
