import { Armchair, Heart, Menu, Search, ShoppingCart, User } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { prodContext } from '../../../context/CartWishlistContext';

const NavBar = () => {
  const { cart, wished, setShowCart, setShowWish } = useContext(prodContext);
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalWishlistItems = wished.length;

  return (
    <div className='w-full flex flex-col justify-center align-middle items-center bg-gray-900'>
        <div className='flex flex-col items-center justify-center align-middle w-[95vw]'>
          <div className="navbar_middle flex items-center justify-between bg-gray-800 w-[100%] h-[80px] p-4 border-gray-700">
              <div className="lg:container grid grid-cols-3 items-center">
                  <div className="logo_wrapper">
                    <Link to='/home' className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 capitalize flex items-center gap-2'>
                      <Armchair size='1.8rem' className="text-purple-400"/> COMFORTY
                    </Link>
                  </div>
                  <div className="search_box">
                      <form action="#" className='max-w-[443px] h-[44px] relative'>
                          <input 
                            type="text" 
                            placeholder='Search For Products...' 
                            className='max-w-[443px] w-full h-full bg-gray-700 rounded-lg text-gray-200 pl-4 pr-10 border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all'
                          />
                          <button className='absolute top-1/2 right-3 transform -translate-y-1/2'>
                            <Search size='18px' className="text-purple-400"/>
                          </button>
                      </form>
                  </div>
                  <div className="navbar_middle_right flex items-center gap-4 justify-end">
                      <button 
                        onClick={() => setShowCart(true)} 
                        className="btn bg-gray-700 hover:bg-gray-600 text-purple-400 border-gray-600 rounded-lg gap-2 transition-colors">
                        <ShoppingCart /> Cart
                        <div className="badge bg-purple-600 border-none text-xs">
                          {totalCartItems}
                        </div>
                      </button>
                      <button 
                        onClick={() => setShowWish(true)} 
                        className="btn bg-gray-700 hover:bg-gray-600 text-purple-400 border-gray-600 rounded-lg gap-2 transition-colors">
                        <Heart /> Wishlist
                        <div className="badge bg-purple-600 border-none text-xs">
                          {totalWishlistItems}
                        </div>
                      </button>
                      <div className="dropdown dropdown-end">
                          <div tabIndex={0} role="button" className="btn bg-gray-700 hover:bg-gray-600 text-purple-400 border-gray-600">
                            <User />
                          </div>
                          <ul tabIndex={0} className="dropdown-content menu bg-gray-800 rounded-box z-1 w-52 p-2 shadow-lg shadow-purple-500/20 border border-gray-700">
                              <li><Link className="text-gray-200 hover:bg-gray-700 hover:text-purple-400">Account Details</Link></li>
                              <li><Link to="/auth/login" className="text-gray-200 hover:bg-gray-700 hover:text-purple-400">LogOut</Link></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div className="navbar_bottom flex items-center justify-center w-[100%] h-[75px] rounded-b-3xl bg-gray-800 border-t border-gray-700 p-3">
              <div className="lg:container flex items-center justify-between">
                  <div className="navbar_bottom_left flex items-center gap-8">
                      <div className="dropdown dropdown-start">
                          <div tabIndex={0} role="button" className="btn bg-gray-700 hover:bg-gray-600 text-purple-400 border-gray-600 rounded-lg gap-2 capitalize">
                            <Menu /> Categories
                          </div>
                          <ul tabIndex={0} className="dropdown-content menu bg-gray-800 rounded-box z-1 w-52 p-2 shadow-lg shadow-purple-500/20 border border-gray-700">
                              <li><Link className="text-gray-200 hover:bg-gray-700 hover:text-purple-400">Sofas & Couches</Link></li>
                              <li><Link className="text-gray-200 hover:bg-gray-700 hover:text-purple-400">Dining Tables</Link></li>
                              <li><Link className="text-gray-200 hover:bg-gray-700 hover:text-purple-400">Beds</Link></li>
                              <li><Link className="text-gray-200 hover:bg-gray-700 hover:text-purple-400">TV Units</Link></li>
                              <li><Link className="text-gray-200 hover:bg-gray-700 hover:text-purple-400">Office Desks</Link></li>
                              <li><Link className="text-gray-200 hover:bg-gray-700 hover:text-purple-400">Wardrobes</Link></li>
                          </ul>
                      </div>

                      <nav className='flex items-center gap-8'>
                          <NavLink 
                            to='/home' 
                            className={({isActive}) => `text-sm font-medium capitalize ${isActive ? 'text-purple-400' : 'text-gray-400 hover:text-purple-300'} transition-colors`}
                          >
                            Home
                          </NavLink>
                          <NavLink 
                            to='/products' 
                            className={({isActive}) => `text-sm font-medium capitalize ${isActive ? 'text-purple-400' : 'text-gray-400 hover:text-purple-300'} transition-colors`}
                          >
                            Products
                          </NavLink>
                          {/* <NavLink 
                            to='/cart' 
                            className={({isActive}) => `text-sm font-medium capitalize ${isActive ? 'text-purple-400' : 'text-gray-400 hover:text-purple-300'} transition-colors`}
                          >
                            Cart
                          </NavLink> */}
                          <NavLink 
                            to='/' 
                            className={({isActive}) => `text-sm font-medium capitalize ${isActive ? 'text-purple-400' : 'text-gray-400 hover:text-purple-300'} transition-colors`}
                          >
                            About
                          </NavLink>
                      </nav>
                  </div>
                  <div className="navbar_bottom_right">
                      <p className='text-sm text-gray-400 font-medium'>
                        Contact <span className='text-purple-400'>(+20) 109 839 2016</span>
                      </p>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default NavBar