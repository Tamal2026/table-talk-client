import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../components/MenuItem/MenuItem";

const Menu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.type === 'popular');
                setMenu(popularItems);
            });
    }, []);

    return (
        <div className="px-4 md:px-8 lg:px-12 py-8">
            <SectionTitle 
                heading="From Our Menu" 
                subHeading="Popular Items" 
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {menu.map(item => (
                    <MenuItem key={item.name} item={item} />  
                ))}
            </div>
        </div>
    );
};

export default Menu;
