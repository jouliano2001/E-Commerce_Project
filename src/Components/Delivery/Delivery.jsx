import { Clock, Percent, PhoneCall, Truck } from "lucide-react"

const Delivery = () => {
  return (
    <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Discount Card */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 group">
                <div className="flex items-center justify-center gap-4 flex-col">
                    <div className="p-4 bg-purple-600/20 rounded-full group-hover:bg-purple-600/30 transition-colors duration-300">
                        <Percent size='2.5rem' className="text-purple-400"/>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg font-bold text-gray-100 group-hover:text-purple-400 transition-colors duration-300 mb-2">
                            Discount
                        </h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            Special Weekly Offers
                        </p>
                    </div>
                </div>
            </div>

            {/* Delivery Card */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 group">
                <div className="flex items-center justify-center gap-4 flex-col">
                    <div className="p-4 bg-purple-600/20 rounded-full group-hover:bg-purple-600/30 transition-colors duration-300">
                        <Truck size='2.5rem' className="text-purple-400"/>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg font-bold text-gray-100 group-hover:text-purple-400 transition-colors duration-300 mb-2">
                            Delivery
                        </h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            Free delivery on orders over $50
                        </p>
                    </div>
                </div>
            </div>

            {/* Fastest Card */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 group">
                <div className="flex items-center justify-center gap-4 flex-col">
                    <div className="p-4 bg-purple-600/20 rounded-full group-hover:bg-purple-600/30 transition-colors duration-300">
                        <Clock size='2.5rem' className="text-purple-400"/>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg font-bold text-gray-100 group-hover:text-purple-400 transition-colors duration-300 mb-2">
                            Fastest
                        </h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            Receive your orders in no time
                        </p>
                    </div>
                </div>
            </div>

            {/* Support Card */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 group">
                <div className="flex items-center justify-center gap-4 flex-col">
                    <div className="p-4 bg-purple-600/20 rounded-full group-hover:bg-purple-600/30 transition-colors duration-300">
                        <PhoneCall size='2.5rem' className="text-purple-400"/>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg font-bold text-gray-100 group-hover:text-purple-400 transition-colors duration-300 mb-2">
                            24/7 Support
                        </h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            Get help whenever you want
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delivery