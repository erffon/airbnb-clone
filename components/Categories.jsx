import { useRouter } from "next/router";
import { useState } from "react";
import {RiFireLine} from "react-icons/ri";



const Categories = ({activeCategory}) => {
    const {query} =useRouter();
    const [activeCat, setActiveCat] = useState("");

    switch (activeCategory) {
        case query:
            setActiveCat("text-text-primary")
            break;
        default:
            break;
    }

    return (
        <div className="flex">
            <div className="flex flex-col">
                <RiFireLine/>
                <h2 className={`${activeCat}`}>Trending</h2>
            </div>
        </div>
    );
}

export default Categories;