import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../components/MenuItem/MenuItem";

const Menu = () => {
    const [menu, setMenu] = useState([]);
    
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'Dinner');
                setMenu(popularItems);
            });
    }, []);

    return (
        <>
            <SectionTitle 
                heading={"From Our Menu"} 
                subHeading={"Popular Items"}>
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Two-row layout */}
                {menu.map(item => (
                    <MenuItem key={item.name} item={item} />  // Pass the item data
                ))}
            </div>
        </>
    );
};

export default Menu;
