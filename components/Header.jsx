import Image from "next/image";
import logo from "../public/assets/images/logo.png";
import { BiWorld } from "react-icons/bi"
import { RiMenuLine } from "react-icons/ri"
import { RxAvatar } from "react-icons/rx"
import { IoSearch } from "react-icons/io5"
const Header = () => {
  return (
    <header className="sticky py-6 container px-20 flex flex-row">
      {/* ---------------------------------- Left ---------------------------------- */}
      <div className="flex items-center flex-grow justify-start">
        <Image src={logo} priority alt="airbnb logo" width={35}/>
        <h1 className="text-airbnb font-bold text-2xl tracking-tight font-Circular-black">airbnb</h1>
      </div>
      {/* ----------------------------- Middle - search ---------------------------- */}
      <div className="flex items-center justify-between py-2 font-Circular-light gap-5 border pl-5 pr-2 rounded-full shadow-md border-text-secondary/20 cursor-pointer">
        <button className="font-semibold text-text-primary">Anywhere</button>
        <button className="font-semibold text-text-primary border-r border-r-text-secondary/20 border-l border-l-text-secondary/20 px-3">Any week</button>
        <button className="text-text-secondary">Add guests</button>
        {/* search icon */}
        <div className="bg-airbnb p-2 rounded-full">
          <IoSearch className=" text-text-white"/>
        </div>
      </div>
      {/* ---------------------------------- Right --------------------------------- */}
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
