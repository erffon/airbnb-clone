import Image from "next/image";
import {AiFillStar} from "react-icons/ai"

const HousesGrid = ({houses}) => {
    return (
        //wrapper
        <div>
            {houses.map(({src,title,subtitle,stars,date,price})=>{
                {/* picture */}
            <Image src={src} title={title} alt={title} className="" width={100} height={100}/>
            {/* title and stars */}
            <div>
                <h3>{title}</h3>
                <div>
                    <AiFillStar/>
                    <p>{stars}</p>
                </div>
            </div>
            {/* subtitle */}
            <p>{subtitle}</p>
            {/* date */}
            <p>{date}</p>
            {/* price */}
            <p>${price}night</p>
            })}
        </div>
    );
}

export default HousesGrid;