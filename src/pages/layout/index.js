import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../components/nav";
import './layout.scss'

export default function Layout() {

    return (
        <>
        <Nav/>
        <Outlet />
        </>
    )

}