import Image from "next/image";
import {AiFillStar} from "react-icons/ai"

const HousesGrid = ({houses}) => {
    return (
        <ul className="">
            {houses.map(({id,imageUrl,name,price,priceCurrency})=>{
                <li key={id}>
                    <Image width={100} height={100} alt={name} className="rounded-md bg-red-600" src={imageUrl}/>
                </li>
            })}
        </ul>
    );
}

export default HousesGrid;