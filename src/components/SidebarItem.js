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
        p-[0.2rem]
        mr-0
        mb-2 
        bg-[#c8d0ba]
        dark:bg-[#4C543E]
        hover:bg-[#f6ffe8]
        dark:hover:bg-[#5D6B45]
        active:bg-[#cdee93]
        dark:active:bg-[#34392A]
        cursor-pointer
        rounded-lg
        border-2
        border-[#080808]
        dark:border-[#e5fdba]">
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
      <div className="flex flex-col gap-[2px] overflow-hidden">
        <h4 className="font-bold truncate">{title}</h4>
        {descriptionIcon &&
          "ICON"
        }
        <span className="text-[0.8rem] truncate">{description}</span>
      </div>
    </div>
  )
};

export default SidebarItem;