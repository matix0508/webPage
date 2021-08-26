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
                    <NavBar
                        darkMode={props.darkMode}
                        lang={props.lang}
                        onSwitchMode={props.onSwitchMode}
                        onSwitchLang={props.onSwitchLang}
                    >
                        <NavItem href={"/"}>{props.lang === "en" ? "Home" : "Strona Główna"}</NavItem>
                        <NavItem href={"/resume"}>{props.lang === "en" ? "Resume" : "Doświadczenie"}</NavItem>
                        <NavItem href={"/projects"}>{props.lang === "en" ? "Projects" : "Projekty"}</NavItem>
                        <NavItem href={"/contact"}>{props.lang === "en" ? "Contact" : "Kontakt"}</NavItem>
                    </NavBar>
                </Header>
                {props.children}
            </main>
        </div>
    )
}