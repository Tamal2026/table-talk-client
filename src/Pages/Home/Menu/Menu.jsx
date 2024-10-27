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
        <>
            <SectionTitle 
                heading={"From Our Menu"} 
                subHeading={"Popular Items"} 
            />

         
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {menu.map(item => (
                    <MenuItem key={item.name} item={item} />  
                ))}
            </div>
        </>
    );
};

export default Menu;
