import Image from "next/image";
import logo from "../public/assets/images/logo.png";
import {BiSearch,BiWorld} from "react-icons/bi"
import {RiMenuLine} from "react-icons/ri"
import {RxAvatar} from "react-icons/rx"
const Header = () => {
  return (
    <header className="sticky py-6 container px-20 flex flex-row">
      {/* Left */}
      <div className="flex items-center flex-grow justify-start">
        <Image src={logo} priority alt="airbnb logo" width={35}/>
        <h1 className="text-airbnb font-bold text-2xl tracking-tight">airbnb</h1>
      </div>
      {/* Middle - search */}
      <div className="flex items-center flex-grow justify-center">
        <button>Anywhere</button>
        <button>Any week</button>
        <button>Add guests</button>
        <div>
          <BiSearch/>
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center flex-grow justify-end">
        <p>Airbnb you home</p>
        <BiWorld/>
        <div className="flex items-center">
          <RiMenuLine/>
          <RxAvatar/>
        </div>
      </div>
    </header>
  );
};

export default Header;
