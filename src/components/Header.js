import Image from "next/image";
import { useRouter } from "next/navigation";
import HeaderProfileButton from "./HeaderProfileButton";
import Navbar from "./Navbar";
import TextSizeChange from "./textSizeChange";

export default function Header() {
  const router = useRouter();

  return (
    <header>
      <div className="custom-header top-0 z-50 flex flex-row items-center justify-between p-3">
        <div
          onClick={() => router.push('/')}
          className="mx-5 cursor-pointer"
          title='Inicio'
        >
          <Image src='/images/icon.png' width={90} height={72} alt="Logo" />
        </div>
        <div className="flex-grow" /> {/* Espacio flexible para empujar TextSizeChange a la derecha */}
        <TextSizeChange/>
        <div className="mx-5">
          <HeaderProfileButton />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center md:hidden mx-[8px] mb-[8px]">
        <Navbar background={'bg-white'} row={true} />
      </div>
    </header>
  );
}
