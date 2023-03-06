import { Navbar } from "../ui/componets/Navbar"

export const NavbarLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
