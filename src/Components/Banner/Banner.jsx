import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/products')
    }
    const products = [
        {
            id: 1,
            title: "Premium Furniture Collection for Your Home",
            subTitle: "Welcome to Comforty",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 2,
            title: "Modern Designs for Contemporary Living",
            subTitle: "New Arrivals",
            image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
        },
        {
            id: 3,
            title: "Luxury Comfort for Your Space",
            subTitle: "Exclusive Collection",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1558&q=80",
        },
    ];
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };

    return (
        <div className="w-full rounded-2xl overflow-hidden">
            <div className="slider-container banner_slider">
                <Slider {...settings}>
                    {products?.map((product) => (
                        <div key={product?.id} className="relative h-[500px] md:h-[600px]">
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent z-10"></div>
                            <img 
                                src={product?.image} 
                                alt={product?.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            
                            <div className="relative z-20 h-full flex items-center px-8 md:px-16">
                                <div className="max-w-2xl">
                                    <p className="text-sm font-medium text-purple-400 uppercase tracking-wider mb-2">
                                        {product?.subTitle}
                                    </p>
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                        {product?.title}
                                    </h3>
                                    <button onClick={handleClick} className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                                        Shop Now <MoveRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Banner;