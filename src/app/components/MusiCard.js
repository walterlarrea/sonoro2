import Image from "next/image";
import { FaPlay, FaHeart } from "react-icons/fa";

function MusiCard() {
  return (
    <div className="flex m-0 rounded-md mt-2 p-1 h-[222px] w-[333px]  bg-cover bg-center">
      <div className="relative">
        <Image
          className="flex max-h-44 max-w-full"
          src="/images/FOLKLORE.png"
          width={200}
          height={250}
          alt="item"
        />
        <div className="bg-gray-600 mt-0.5 flex justify-between items-center h-9">
        <div className="rounded-full bg-white ml-2 basis-1">
        <FaPlay className="text-green-300 m-1 items-center" />
        </div>
        <div className="rounded-full bg-white mr-2 basis-1 " >
        <FaHeart className="text-red-300 m-1 items-center" />
        </div>
         
        </div>
      </div>
    </div>
  );
}

export default MusiCard;
