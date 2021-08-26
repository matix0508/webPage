import React from "react";


export default function LanguageToggle(props) {
    return (
        <button
            onClick={props.onSwitchLang}
            className="text-red-600"
        >
            {props.lang === "en" ? "Zmień na Język Polski" : "Change To English"}
        </button>
    )
}