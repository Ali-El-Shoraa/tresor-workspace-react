import Logo from "./components/Logo";
import Navbar from "./components/Navbar";

export default function Header() {
  return (
    <header className="h-16 bg-[#2E4542] text-white top-0 z-10 fixed w-full">
      <div className="container flex items-center justify-between h-full">
        {/* Logo brand */}
        <Logo />

        {/* navbar page header */}
        <Navbar />
      </div>
    </header>
  );
}
