import { useRouter } from "next/router";
import {RiFireLine,RiBuilding3Line,RiAncientPavilionLine} from "react-icons/ri";

const categoryList = [{icon:<RiFireLine className="text-2xl"/>,title:"Trending"},{icon:<RiBuilding3Line className="text-2xl"/>,title:"Tiny Homes"},{icon:<RiAncientPavilionLine className="text-2xl"/>,title:"Lakefront"}];

const Categories = ({activeCategory}) => {
    const {query} =useRouter();
    const activeCat = (activeCategory == query || "Trending")?"text-text-primary font-semibold border-b-2 border-black":'';
    

    return (
        <div className="flex container px-20 gap-10">
            {categoryList?.map(({icon,title})=>
                <div className={`${activeCategory==title?activeCat:'text-text-secondary'} flex flex-col items-center gap-1 pb-2`}>
                    {icon}
                    <h2 className="text-sm">{title}</h2>
                </div>
            )}
            
        </div>
    );
}

export default Categories;