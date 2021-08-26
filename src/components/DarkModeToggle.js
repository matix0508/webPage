import React from "react";


export default function DarkModeToggle(props) {
    return (
        <button
            onClick={props.onSwitchMode}
            className="flex items-center p-4  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 dark:hover:bg-white hover:text-white border-2 border-gray-900 focus:outline-none"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 viewBox="0 0 24 24" fill="none" stroke={props.darkMode ? "#FFF" : "#000"}>
                <circle cx="12" cy="12" r="5"/>
                <path
                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
            </svg>
        </button>
    )
}