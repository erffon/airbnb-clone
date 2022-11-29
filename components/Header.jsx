import Image from "next/image";
import logo from "../public/assets/images/logo.png";
const Header = () => {
  return (
    <header className="sticky my-4 container mx-10">
      {/* Left */}
      <div className="flex items-center relative h-10 ">
        <Image src={logo} fill objectFit="contain" objectPosition="left" priority alt="airbnb logo"/>
        <h1 className="text-airbnb font-bold text-2xl">airbnb</h1>
      </div>
      {/* Middle - search */}
      {/* Right */}
    </header>
  );
};

export default Header;
