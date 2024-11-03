import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 text-white">
      <Image
        src="/logo.png"
        alt="logo"
        className="text-xl font-bold"
        width={100}
        height={20}
      />
      <div className="flex gap-4">
        <a href="#" className="hover:text-pink-300 px-5 font-bold text-xl">
          FAQs
        </a>
        <a href="#" className="hover:text-pink-300 px-5 font-bold text-xl">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
