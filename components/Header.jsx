import Image from "next/image";
import logo from "../public/assets/images/logo.png";
import {BiSearch} from "react-icons/bi"
const Header = () => {
  return (
    <header className="sticky py-6 container px-20 flex flex-row">
      {/* Left */}
      <div className="flex items-center ">
        <Image src={logo} priority alt="airbnb logo" width={35}/>
        <h1 className="text-airbnb font-bold text-2xl tracking-tight">airbnb</h1>
      </div>
      {/* Middle - search */}
      <div className="flex items-center">
        <button>Anywhere</button>
        <button>Any week</button>
        <button>Add guests</button>
        <div>
          <BiSearch/>
        </div>
      </div>
      {/* Right */}
    </header>
  );
};

export default Header;
