import Image from "next/image";
import { useRouter } from "next/navigation";
import HeaderProfileButton from "./HeaderProfileButton";
import Navbar from "./Navbar";

export default function Header() {
  const router = useRouter()
  const headerOpacity = ""; // Ajustar la opacidad del Header según el contexto.

  return (
    <header>
      <div className={`sticky top-0 z-50 flex flex-row items-center justify-between p-3 ${headerOpacity}`}>
        <div
          onClick={() => router.push('/')}
          className="mx-5 cursor-pointer"
          title='Inicio'
        >
          <Image src='/images/icon.png' width={64} height={64} alt="Logo" />
        </div>

        <div className="mx-5">
          <HeaderProfileButton />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center px-5 m-3 md:hidden">
        <Navbar background={'bg-white'} row={true} />
      </div>
    </header>
  );
}