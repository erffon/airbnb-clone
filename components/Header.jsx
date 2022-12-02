import Image from "next/image";
import logo from "../public/assets/images/logo.png";
import { BiWorld } from "react-icons/bi"
import { RiMenuLine } from "react-icons/ri"
import { IoSearch } from "react-icons/io5"
import { ImUser } from "react-icons/im"
import Categories from "./Categories";
import { useRouter } from "next/router";


const Header = ({activeCategory}) => {
  const {push} =useRouter();
  const logoClickHandler = ()=>push('/');
  return (
    <>
      <header className="sticky py-6 container px-20 flex flex-row border-b mb-7">
        {/* ---------------------------------- Left ---------------------------------- */}
        <div className="flex items-center flex-grow justify-start cursor-pointer" onClick={logoClickHandler}>
          <Image src={logo} priority alt="airbnb logo" width={35}/>
          <h1 className="text-airbnb font-bold text-2xl tracking-tight font-Circular-black">airbnb</h1>
        </div>
        {/* ----------------------------- Middle - search ---------------------------- */}
        <div className="flex items-center justify-between py-2 gap-5 border pl-5 pr-2 rounded-full shadow-md  border-text-secondary/20 cursor-pointer">
          <button className="font-semibold text-text-primary">Anywhere</button>
          <button className="font-semibold text-text-primary border-r border-r-text-secondary/20 border-l   border-l-text-secondary/20 px-3">Any week</button>
          <button className="text-text-secondary">Add guests</button>
          {/* search icon */}
          <div className="bg-airbnb p-2 rounded-full">
            <IoSearch className=" text-white"/>
          </div>
        </div>
        {/* ---------------------------------- Right --------------------------------- */}
        <div className="flex items-center flex-grow justify-end">
          <p className="font-semibold text-text-primary px-5 py-2 rounded-full hover:bg-bg-secondary cursor-pointer">Airbnb you home</p>
          <BiWorld className="text-lg w-9 h-9 p-2 rounded-full hover:bg-bg-secondary mr-2 cursor-pointer"/>
          <div className="flex items-center pr-1 pl-3 rounded-full py-1 border border-text-secondary/20 gap-3   relative hover:shadow-md cursor-pointer">
            <RiMenuLine/>
            <ImUser className="text-3xl text-slate-600 bg-slate-500 rounded-full outline-none"/>
            <p className=" bg-airbnb w-5 h-5 border-2 border-white text-[0.6rem] text-white text-center   rounded-full absolute -right-1 -top-2 font-Circular-black">1</p>
          </div>
        </div>
      </header>
      <Categories activeCategory={activeCategory}/>
    </>
  );
};

export default Header;
