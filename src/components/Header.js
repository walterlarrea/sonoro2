import Image from "next/image";
import { useRouter } from "next/navigation";
import HeaderProfileButton from "./HeaderProfileButton";
import Navbar from "./Navbar";
import HeaderPlaybackButton from "./HeaderPlaybackButton";

export default function Header() {
  const router = useRouter()

  return (
    <header>
      <div className="sticky custom-header top-0 z-50 flex flex-row items-center justify-between p-3">
        <div
          onClick={() => router.push('/')}
          className="mx-5 cursor-pointer"
          title='Inicio'
        >
          <Image src='/images/icon.png' width={64} height={64} alt="Logo" />
        </div>

        <div className="mx-5">
          <HeaderPlaybackButton />
          <HeaderProfileButton />
        </div>
      </div>
      <div className="sticky flex flex-row justify-center items-center md:hidden mx-[8px]">
        <Navbar background={'bg-white'} row={true} />
      </div>
    </header>
  );
}