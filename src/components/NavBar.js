import React from "react";
import NavItem from "./NavItem";
import DarkModeToggle from "./DarkModeToggle";

export default function NavBar(props) {
    return (
        <div className="flex items-center">
            <nav
                className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                {props.children}
                <DarkModeToggle darkMode={props.darkMode} onSwitchMode={props.onSwitchMode}/>
            </nav>
            <button className="lg:hidden flex flex-col ml-4">
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"/>
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"/>
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"/>
            </button>
        </div>
    )
}