import Image from "next/image";
import {AiFillStar} from "react-icons/ai"

const HousesGrid = ({houses}) => {
    return (
        <ul className="container flex flex-wrap justify-evenly mt-2">
            {houses.map(({id,imageUrl,name,price,priceCurrency})=>{
                console.log(name);
                return (
                    <li key={id} className="w-80 relative rounded-xl overflow-hidden mt-10 flex flex-col">
                        <figure className="w-full h-72">
                            <Image src={imageUrl} objectFit="cover" fill className="rounded-xl overflow-hidden !static"/>
                        </figure>
                        <h3>{name}</h3>
                        <p>{`${priceCurrency + price} night`}</p>
                    </li>
                );
            })}
        </ul>
    );
}

export default HousesGrid;