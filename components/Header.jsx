import Image from "next/image";
import logo from "../public/assets/images/logo.png";
const Header = () => {
  return (
    <header className="sticky my-4 container mx-10 flex flex-row">
      {/* Left */}
      <div className="flex items-center ">
        <Image src={logo} priority alt="airbnb logo" width={35}/>
        <h1 className="text-airbnb font-bold text-2xl tracking-tight">airbnb</h1>
      </div>
      {/* Middle - search */}
      {/* Right */}
    </header>
  );
};

export default Header;
