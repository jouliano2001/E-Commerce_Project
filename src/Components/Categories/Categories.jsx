import Slider from "react-slick";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Search, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/products')
    }
  const categories = [
    {
      title: "Living Room",
      products: "3,586 Products",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Dining Room",
      products: "2,734 Products",
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    },
    {
      title: "Office Furniture",
      products: "1,129 Products",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    },
    {
      title: "Bedroom",
      products: "4,002 Products",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Outdoor",
      products: "1,947 Products",
      image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Storage & Organization",
      products: "752 Products",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Lighting",
      products: "631 Products",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    }
  ];
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
        <SectionTitle title="Top Categories" m="mb-16" />

        <div className="slider-container categories_slider w-[90vw] h-full px-10">
            <Slider {...settings}>
                {
                    categories?.map((category, index) => (
                        <div key={index} className="px-3 group">
                            <div className="bg-gray-800 rounded-3xl p-6 text-gray-100 transition-all duration-300 hover:bg-gray-700 hover:shadow-2xl hover:shadow-purple-500/20">
                                <div className="category_image relative overflow-hidden rounded-2xl">
                                    <img
                                        src={category?.image}
                                        alt={category?.title}
                                        className="w-full h-[300px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-xs font-medium shadow-lg transition-colors duration-300">
                                            {category?.products}
                                        </button>
                                    </div>
                                </div>

                                <div className="category-content mt-6">
                                    <div className="flex flex-col items-center gap-4">
                                        <h4 className="text-xl font-bold text-gray-100 group-hover:text-purple-400 transition-colors duration-300">
                                            {category?.title}
                                        </h4>
                                        <button onClick={handleClick} className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white flex justify-center gap-2 items-center w-full h-[45px] rounded-xl shadow-lg font-medium transition-all duration-300 transform hover:-translate-y-1">
                                            <Search size={18} /> Explore More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
      </div>
    </div>
  )
}

export default Categories