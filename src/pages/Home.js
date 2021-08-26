import React from "react";
import MainTheme from "../components/MainTheme";
import ShowCase from "../components/ShowCase";

export default function Home(props) {
    return (
        <MainTheme darkMode={props.darkMode} onSwitchMode={props.onSwitchMode}>
            <ShowCase />
        </MainTheme>
    )
}