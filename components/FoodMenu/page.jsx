import { RiCupFill } from "react-icons/ri";
import { FaHamburger,FaUtensils } from "react-icons/fa";

export default function FoodMenu(){
    return <>

<main className="max-w-screen-2xl bg-slate-300 mx-auto">
<h1 className="text-center text-4xl font-bold">Most Popular Items</h1>

<div className="container flex items-center justify-center gap-16">
<div className="flex items-center gap-2">
<RiCupFill className="text-4xl text-orange-500" />
<h1 className="text-sm">Popular <br />
<span className="font-bold text-base">Breakfast</span></h1>
</div>
<div className="flex items-center gap-2">
<FaHamburger  className="text-4xl text-orange-500" />
<h1 className="text-sm">Special <br />
<span className="font-bold text-base">Lunch</span></h1>
</div>
<div className="flex items-center gap-2">
<FaUtensils className="text-4xl text-orange-500" />
<h1 className="text-sm">Lovely <br />
<span className="font-bold text-base">Dinner</span></h1>
</div>
</div>

</main>
    </>
}