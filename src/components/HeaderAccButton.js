import { useState } from "react"
import SideMenuAcc from "./SideMenuAcc"

const HeaderAccButton = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleMenuOpenClose = () => {
        setShowMenu(s => !s)
    }

    return (
        <>
        <button className="hover:scale-110 hover:underline" onClick={handleMenuOpenClose} >Accessibility</button>
        <SideMenuAcc visible={showMenu} handleClose={handleMenuOpenClose} />
        </>
    )
}

export default HeaderAccButton