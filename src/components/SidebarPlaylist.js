'use-client';
import Image from "next/image";

const SidebarPlaylist = () => {
  const playlist = [] // Some kind of fetch or useEffect here

  return (
    <>
      {playlist.map((data) => (
        <div
          key={data.id}
          className={`flex cursor-pointer items-center space-x-3 text-gray-400 hover:text-white`}
        >
          <Image
            src={data?.images[0]?.url}
            alt={data.name}
            width={40}
            height={40}
            className={"h-10 w-10 rounded-md"}
          />
          <p className="truncate">{data.name}</p>
        </div>
      ))}
    </>
  )
}

export default SidebarPlaylist