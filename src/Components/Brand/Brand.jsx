import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brand = () => {
    const brands = [
        {
            id: "National Bank of Egypt",
            image: "https://logo.clearbit.com/nbe.com.eg",
        },
        {
            id: "Banque Misr",
            image: "https://logo.clearbit.com/banquemisr.com",
        },
        {
            id: "CIB Egypt",
            image: "https://logo.clearbit.com/cibeg.com",
        },
        {
            id: "QNB Alahli",
            image: "https://logo.clearbit.com/qnbalahli.com",
        },
        {
            id: "AlexBank",
            image: "https://logo.clearbit.com/alexbank.com",
        },
        {
            id: "HSBC Egypt",
            image: "https://logo.clearbit.com/hsbc.com.eg",
        },
        {
            id: "Chase Bank",
            image: "https://logo.clearbit.com/chase.com",
        },
        {
            id: "Wells Fargo",
            image: "https://logo.clearbit.com/wellsfargo.com",
        },
        {
            id: "Citibank",
            image: "https://logo.clearbit.com/citi.com",
        },
        {
            id: "Goldman Sachs",
            image: "https://logo.clearbit.com/goldmansachs.com",
        },
        {
            id: "Capital One",
            image: "https://logo.clearbit.com/capitalone.com",
        },
        {
            id: "PNC Bank",
            image: "https://logo.clearbit.com/pnc.com",
        },
        {
            id: "U.S. Bank",
            image: "https://logo.clearbit.com/usbank.com",
        }
    ];      
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className="lg:container mx-auto flex align-middle justify-center items-center">
            <div className="brand_slider grid grid-cols-7 items-center justify-center align-middle">
                <Slider {...settings} className="w-[75vw]">
                    {brands?.map((brand) => (
                        <div key={brand?.id} className="brand_item flex justify-center align-middle items-center p-2">
                            <div className="flex w-[140px] items-center justify-center align-middle rounded-full p-1 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
                                <img 
                                    src={brand?.image} 
                                    alt="brand" 
                                    className="rounded-full"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Brand;