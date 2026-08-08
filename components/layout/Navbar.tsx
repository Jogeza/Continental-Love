import Logo from "@/components/brand/Logo";
import CartModal from "components/cart/modal";

export default function Navbar() {
  return (
    <header className="border-b border-black/10 bg-[#F8F5EF]">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo className="h-5 w-auto md:h-12" />

        <div className="hidden items-center gap-8 text-sm tracking-wide md:flex">
          <a href="#">Collections</a>
          <a href="#">Coffee</a>
          <a href="#">Jewelry</a>
          <a href="#">Travel</a>
          <a href="#">Story</a>
        </div>

        <CartModal />
      </nav>
    </header>
  );
}