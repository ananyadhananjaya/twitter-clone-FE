import { NextPage } from "next";
import Sidebar from "./sidebar";

const Layout:NextPage = ({children}) =>{
    return(
        <>
        <div className="flex">
        <Sidebar />
        <main>{children}</main>
        </div>
        </>
    )
}

export default Layout;