import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import LanguageToggle from "./LanguageToggle";

export default function NavBar(props) {
    const btn = React.createRef();
    return (
        <div className="flex items-center">
            <nav
                className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                {props.children}

                <DarkModeToggle darkMode={props.darkMode} onSwitchMode={props.onSwitchMode}/>
                <LanguageToggle lang={props.lang} onSwitchLang={props.onSwitchLang} />
            </nav>
            <button ref={btn} className="lg:hidden flex flex-col ml-4">
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"/>
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"/>
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"/>
            </button>
        </div>
    )
}