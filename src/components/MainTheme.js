import React from "react";
import NavBar from "./NavBar";
import MyEmail from "./MyEmail";
import Header from "./Header";
import Invitation from "./Invitation";
import NavItem from "./NavItem";

export default function MainTheme(props) {
    return (
        <div className={props.darkMode ? "dark" : "light"}>
            <main className="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen content-center">
                <Invitation />
                <Header>
                    <MyEmail/>
                    <NavBar darkMode={props.darkMode} onSwitchMode={props.onSwitchMode}>
                        <NavItem href={"/"}>Home</NavItem>
                        <NavItem href={"/resume"}>Resume</NavItem>
                        <NavItem href={"/contact"}>Contact</NavItem>
                    </NavBar>
                </Header>
                {props.children}
            </main>
        </div>
    )
}