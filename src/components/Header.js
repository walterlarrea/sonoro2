import Image from "next/image";
import { useRouter } from "next/navigation";
import HeaderProfileButton from "./HeaderProfileButton";
import Navbar from "./Navbar";
import HeaderAccButton from "./HeaderAccButton";

export default function Header() {
  const router = useRouter()

  return (
    <header>
      <div className="custom-header top-0 z-50 flex flex-row items-center justify-between p-3">
        <div
          onClick={() => router.push('/')}
          className="cursor-pointer"
          title='Inicio'
        >
          <Image src='/images/icon.png' width={64} height={64} alt="Logo" />
        </div>

        <div className="hidden md:flex flex-row justify-center items-center">
          <Navbar background={'bg-white'} />
        </div>

        <div className="flex items-center gap-4">
          <HeaderAccButton />
          <HeaderProfileButton />
        </div>
      </div>
    </header>
  );
}