import { useState } from "react"
import { useTranslation } from 'react-i18next'
import { BsUniversalAccessCircle } from 'react-icons/bs'
import SideMenuAcc from "./SideMenuAcc"

const HeaderAccButton = () => {
    const { t } = useTranslation()
    const [showMenu, setShowMenu] = useState(false)

    const handleMenuOpenClose = () => {
        setShowMenu(s => !s)
    }

    return (
        <>
            <button
                className="border-2 rounded-lg border-transparent hover:border-[#e5fdba] p-2 h-fit whitespace-nowrap align-baseline"
                onClick={handleMenuOpenClose} >
                <BsUniversalAccessCircle className="h-6 w-6 me-4 inline-block" />
                {t('accessibility.title')}
            </button>
            {showMenu &&
                <SideMenuAcc handleClose={handleMenuOpenClose} />
            }
        </>
    )
}

export default HeaderAccButton