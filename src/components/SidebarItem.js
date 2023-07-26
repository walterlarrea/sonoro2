const SidebarItem = ({ title, description, thumbnailSource, descriptionIcon, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="
        flex
        flex-row
        gap-[0.8rem]
        w-full
        h-[4rem]
        p-[0.5rem]
        bg-zinc-900
        hover:bg-zinc-800
        active:bg-black
        rounded-md
        cursor-pointer
        ">
      {thumbnailSource &&
        <img
          src={thumbnailSource}
          alt={title}
          className="
            w-[3rem]
            rounded-md
            m-0
            " />
      }
      <div className="flex flex-col gap-[2px] justify-center">
        <h4 className="font-bold">{title}</h4>
        {descriptionIcon &&
          "ICON"
        }
        <span className="text-[0.8rem]">{description}</span>
      </div>
    </div>
  )
};

export default SidebarItem;