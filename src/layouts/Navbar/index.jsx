import { Navbar } from "../../components/Navbar"

export const NavbarLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
