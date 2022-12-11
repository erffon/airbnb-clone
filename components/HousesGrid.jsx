import Image from "next/image";
import {AiFillStar} from "react-icons/ai"

const HousesGrid = ({houses}) => {
    return (
        <ul className="container flex flex-wrap justify-evenly mt-2">
            {houses.map(({id,imageUrl,name,price,priceCurrency})=>{
                console.log(imageUrl);
                return (
                    <li key={id} className="w-80 h-72 relative rounded-xl overflow-hidden mt-10">
                        <Image src={imageUrl} fill objectFit="cover"/>
                        <h3>{name}</h3>
                        <p>{`${priceCurrency + price} night`}</p>

                    </li>
                );
            })}
        </ul>
    );
}

export default HousesGrid;