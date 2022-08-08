import Header from "./Header";
import { Outlet } from "react-router-dom";
import MenuLink from "./Header/MenuLink";

const MainHeader = () => {
    return (
        <>
            <Header />
            <MenuLink />
            <Outlet />
        </>
    )
}

export default MainHeader;