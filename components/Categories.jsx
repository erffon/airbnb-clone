import { useRouter } from "next/router";
import {RiFireLine,RiBuilding3Line,RiAncientPavilionLine,RiLandscapeLine,RiRestaurantLine,RiImage2Line,RiWalkLine} from "react-icons/ri";
import {TbBeach} from "react-icons/tb";
import {SiForestry} from "react-icons/si";
import {MdOutlineDownhillSkiing,MdOutlineCabin} from "react-icons/md";
import {GiUfo} from "react-icons/gi";

const categoryList = [{icon:<RiFireLine className="text-2xl"/>,title:"Trending"},{icon:<RiBuilding3Line className="text-2xl"/>,title:"Tiny Homes"},{icon:<SiForestry className="text-2xl"/>,title:"Lakefront"},{icon:<RiLandscapeLine className="text-2xl"/>,title:"Camping"},{icon:<RiRestaurantLine className="text-2xl"/>,title:"Bed and breakfasts"},{icon:<RiImage2Line className="text-2xl"/>,title:"Amazing views"},{icon:<MdOutlineDownhillSkiing className="text-2xl"/>,title:"Ski in/out"},{icon:<TbBeach className="text-2xl"/>,title:"Beachfront"},{icon:<MdOutlineCabin className="text-2xl"/>,title:"Cabins"},{icon:<GiUfo className="text-2xl"/>,title:"OMG!"}];

const Categories = ({activeCategory}) => {
    const {query} =useRouter();
    const activeCat = (activeCategory == query || "Trending")?"text-text-primary font-semibold border-b-2 border-black":'';
    

    return (
        <div className="flex container px-20 gap-9">
            {categoryList?.map(({icon,title})=>
                <div className={`${activeCategory==title?activeCat:'text-text-secondary'} flex flex-col items-center gap-1 pb-2 hover:text-text-primary hover:border-b-2 transition ease-out duration-200`}>
                    {icon}
                    <h2 className="text-xs font-semibold">{title}</h2>
                </div>
            )}
            
        </div>
    );
}

export default Categories;