import { useRouter } from "next/router";
import {RiFireLine,RiBuilding3Line,RiAncientPavilionLine,RiLandscapeLine,RiRestaurantLine} from "react-icons/ri";

const categoryList = [{icon:<RiFireLine className="text-2xl"/>,title:"Trending"},{icon:<RiBuilding3Line className="text-2xl"/>,title:"Tiny Homes"},{icon:<RiAncientPavilionLine className="text-2xl"/>,title:"Lakefront"},{icon:<RiLandscapeLine className="text-2xl"/>,title:"Camping"},{icon:<RiRestaurantLine className="text-2xl"/>,title:"Trending"}];

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