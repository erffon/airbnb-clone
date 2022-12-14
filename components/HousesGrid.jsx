import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

const HousesGrid = ({ houses }) => {
  return (
    <ul className="container flex flex-wrap justify-evenly">
      {houses.map(({ id, imageUrl, name, price, priceCurrency }) => {
        return (
          <li key={id} className="w-80 relative rounded-xl overflow-hidden mt-8 flex flex-col justify-between text-sm">
            <figure className="w-full h-72">
              <Image src={imageUrl} objectFit="cover" fill className="rounded-xl overflow-hidden !static" />
            </figure>
            <h3 className="font-semibold pt-2">{name.slice(0, 25)}</h3>
            <p className="text-text-secondary">45 km to De Alde Feanen National Park</p>
            <p className="text-text-secondary">Jan 21 - Jan 27</p>
            <div className="flex gap-3">
              <p className="font-semibold">{priceCurrency + price}</p>
              <p>night</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default HousesGrid;
