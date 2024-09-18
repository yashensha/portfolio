import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-[64px] flex items-center justify-between bg-transparent w-full px-12">
      <Link href="/">
        <Image
          src="./YASHENSHA.svg"
          height={0}
          width={0}
          className="h-5 w-auto"
          alt={""}
        />
      </Link>
      <div className="flex items-center gap-10 justify-end uppercase leading-[80%] ">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/" className="hover:underline">
          About
        </Link>
        <Link href="/" className="hover:underline">
          Work
        </Link>
        <Link href="/" className="hover:underline">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
