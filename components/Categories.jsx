import { useRouter } from "next/router";
import {RiFireLine,RiBuilding3Line,RiAncientPavilionLine} from "react-icons/ri";

const categoryList = [];

const Categories = ({activeCategory =''}) => {
    const {query} =useRouter();
    const activeCat = (activeCategory == query) || (activeCategory == "Trending")?"text-text-primary font-semibold border-b-2 border-black":'';
    

    return (
        <div className="flex container px-20 gap-10">
            <div className={`${activeCat} flex flex-col items-center gap-1 pb-2`}>
                <RiFireLine className="text-2xl"/>
                <h2 className="text-sm">Trending</h2>
            </div>
            <div className={`${activeCat} flex flex-col items-center gap-1 pb-2`}>
                <RiBuilding3Line className="text-2xl"/>
                <h2 className="text-sm">Trending</h2>
            </div>
            <div className={`${activeCat} flex flex-col items-center gap-1 pb-2`}>
                <RiAncientPavilionLine className="text-2xl"/>
                <h2 className="text-sm">Trending</h2>
            </div>
        </div>
    );
}

export default Categories;