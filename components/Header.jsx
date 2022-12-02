import Image from "next/image";
import logo from "../public/assets/images/logo.png";
import { BiWorld } from "react-icons/bi"
import { RiMenuLine } from "react-icons/ri"
import { IoSearch } from "react-icons/io5"
import { ImUser } from "react-icons/im"


const Header = () => {
  return (
    <header className="sticky py-6 container px-20 flex flex-row">
      {/* ---------------------------------- Left ---------------------------------- */}
      <div className="flex items-center flex-grow justify-start">
        <Image src={logo} priority alt="airbnb logo" width={35}/>
        <h1 className="text-airbnb font-bold text-2xl tracking-tight font-Circular-black">airbnb</h1>
      </div>
      {/* ----------------------------- Middle - search ---------------------------- */}
      <div className="flex items-center justify-between py-2 gap-5 border pl-5 pr-2 rounded-full shadow-md border-text-secondary/20 cursor-pointer">
        <button className="font-semibold text-text-primary">Anywhere</button>
        <button className="font-semibold text-text-primary border-r border-r-text-secondary/20 border-l border-l-text-secondary/20 px-3">Any week</button>
        <button className="text-text-secondary">Add guests</button>
        {/* search icon */}
        <div className="bg-airbnb p-2 rounded-full">
          <IoSearch className=" text-white"/>
        </div>
      </div>
      {/* ---------------------------------- Right --------------------------------- */}
      <div className="flex items-center flex-grow justify-end gap-4">
        <p className="font-semibold text-text-primary">Airbnb you home</p>
        <BiWorld className="text-lg"/>
        <div className="flex items-center pr-1 pl-3 rounded-full py-1 border border-text-secondary/20 gap-3 relative">
          <RiMenuLine/>
          <ImUser className="text-3xl text-slate-600 bg-slate-500 rounded-full outline-none"/>
          <p className=" bg-airbnb w-5 h-5 border-2 border-white text-[0.6rem] text-white text-center rounded-full absolute -right-1 -top-2 font-Circular-black">1</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
