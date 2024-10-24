/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const MenuItem = ({ item }) => {
    const { img, price, name, short_desc } = item;  // Destructure properties from item

    return (
        <div className="flex flex-col md:flex-row items-center gap-4 p-4 border-b border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105"> {/* Container for the item */}
            {/* Image */}
            <div className="w-full md:w-32 h-32 overflow-hidden rounded-lg shadow-lg flex-shrink-0">
                <img 
                    src={img} 
                    alt={name} 
                    className="w-full h-full object-cover"  
                />
            </div>

            {/* Details */}
            <div className="flex-1">
                <h1 className="text-xl font-semibold">{name}</h1>
                <p className="text-sm text-gray-600 mb-2">{short_desc}</p>
                <h2 className="text-lg font-bold text-orange-500 mb-4">Price: ${price}</h2>

                {/* Add to Cart Button */}
                <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300 relative group overflow-hidden">
                    Add to Cart
                    {/* Animation Effect */}
                    <span className="absolute inset-0 w-full h-0 bg-white opacity-10 group-hover:h-full transition-all duration-300 ease-out"></span>
                </button>
            </div>
        </div>
    );
};

export default MenuItem;
