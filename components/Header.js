import Image from "next/image";
import logo from "../public/assets/images/logo.png";
const Header = () => {
  return (
    <header className="sticky my-4 container mx-10">
      {/* Left */}
      <div className="relative h-10 ">
        <Image src={logo} fill objectFit="contain" objectPosition="left" />
      </div>
      {/* Middle */}
      {/* Right */}
    </header>
  );
};

export default Header;
