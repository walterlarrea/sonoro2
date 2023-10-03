import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const SideMenuMobile = ({ visible, closeHandler }) => {

  return (
    <div
      className={`
        absolute 
        z-20 
        top-0
        w-[90%] 
        h-full
        p-8
        md:hidden
        flex-col
        items-center 
        transition-all
        bg-[#e5fdba]
        dark:bg-[#34392A] 
        ${visible ? 'right-0 flex' : 'left-full hidden'}`}>
      <button className="absolute top-0 right-0 bg-blue-400" onClick={closeHandler}>cerrar</button>
      <Navbar background={'bg-white'} column={true} />
      <Sidebar />
    </div>
  )
}

export default SideMenuMobile