import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../components/MenuItem/MenuItem";

const OurMenu = () => {
  const [menu, setMenu] = useState({
    Breakfast: [],
    Lunch: [],
    Dinner: [],
    Dessert: [],
  });

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        const categories = {
          Breakfast: data.filter((item) => item.category === "Breakfast"),
          Lunch: data.filter((item) => item.category === "Lunch"),
          Dinner: data.filter((item) => item.category === "Dinner"),
          Dessert: data.filter((item) => item.category === "Dessert"),
          Drinks: data.filter((item) => item.category === "Drinks"),
        };
        setMenu(categories);
      });
  }, []);

  const categoryImages = {
    Breakfast: "https://i.ibb.co.com/58fQ8tQ/breakfast-food.jpg",
    Lunch: "https://i.ibb.co/yFnmChv/lunch-menu.jpg",
    Dinner: "https://i.ibb.co/z2sRtTJ/pexels-chanwalrus-958545.jpg",
    Dessert: "https://i.ibb.co/4RJfFnw/desserts-update.jpg",
    Drinks: "https://i.ibb.co.com/4ZBcb36/drinks.png",
  };

  return (
    <>
      <div
        className="relative h-[500px] bg-cover mb-8 bg-center"
        style={{
          backgroundImage: `url('https://i.ibb.co/YRg73tz/2147772080.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <SectionTitle
            subHeading={"FooD Menu"}
            heading={<span className="text-red-500">Explore Our Menu</span>}
          />
        </div>
      </div>

      {Object.keys(menu).map((category) => (
        <div key={category} className="mb-8">
          <div
            className="relative text-center my-8 py-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${categoryImages[category]})` }}
          >
            <div className="absolute inset-0  bg-black bg-opacity-50"></div>
            <div className="relative z-10">
              <div className="bg-white bg-opacity-0 rounded-lg p-6 shadow-lg max-w-md mx-auto">
                <h3 className="text-2xl font-semibold text-center text-white shadow-md">
                  Welcome to Our {category} Menu!
                </h3>
                <p className="text-gray-300 text-center mt-2">
                  Enjoy our delicious {category.toLowerCase()} options made with
                  the freshest ingredients.
                </p>
              </div>
            </div>
          </div>

          {/* Section Title for Category Items */}
          <SectionTitle subHeading={`${category} Items`} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {menu[category].map((item) => (
              <MenuItem key={item.name} item={item} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default OurMenu;
