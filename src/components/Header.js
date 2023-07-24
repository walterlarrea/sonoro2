import Image from "next/image";
import { useRouter } from "next/navigation";
import HeaderProfileButton from "./HeaderProfileButton";

export default function Header() {
  const router = useRouter()
  const headerOpacity = ""; // Ajustar la opacidad del Header según el contexto.

  return (
    <header className={`sticky top-0 z-50 flex flex-row items-center justify-between p-3 ${headerOpacity}`}>
      <div
        onClick={() => router.push('/')}
        className="hidden flex-row items-center space-x-4 px-5 sm:flex cursor-pointer"
        title='Inicio'
      >
        <Image src='/images/icon.png' width={64} height={64} alt="Logo" />
      </div>
      <div className="flex flex-row items-center space-x-4 px-5 sm:hidden">
        {/* Iconos y botones... */}
      </div>
      <div className="flex flex-row items-center space-x-2 px-5">
        <HeaderProfileButton />
      </div>
    </header>
  );
}