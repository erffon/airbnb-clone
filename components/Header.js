import Image from "next/image";
import logo from "../public/assets/images/logo.png";
const Header = () => {
  return (
    <header className="relative h-10 my-4 container mx-10">
      {/* Left */}
      <Image
        src={logo}
        fill
        objectFit="contain"
        objectPosition="left"
        className=""
      />
      {/* Middle */}
      {/* Right */}
    </header>
  );
};

export default Header;
