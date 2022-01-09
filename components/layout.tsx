import { NextPage } from "next";
import Sidebar from "./sidebar";

const Layout:NextPage = ({children}) =>{
    return(
        <>
        <div className="flex mx-4">
        <Sidebar />
        <main>{children}</main>
        </div>
        </>
    )
}

export default Layout;