import { useRouter } from "next/router";
import {RiFireLine} from "react-icons/ri";



const Categories = ({activeCategory =''}) => {
    const {query} =useRouter();
    const activeCat = (activeCategory == query) || (activeCategory == "Trending")?"text-text-primary font-semibold":'';
    

    return (
        <div className="flex container px-20">
            <div className="flex flex-col items-center">
                <RiFireLine className={`${activeCat} text-3xl`}/>
                <h2 className={`${activeCat} `}>Trending</h2>
            </div>
        </div>
    );
}

export default Categories;