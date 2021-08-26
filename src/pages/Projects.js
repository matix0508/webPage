import MainTheme from "../components/MainTheme";
import ComplexList from "../components/ComplexList";

export default function Projects(props) {
    return (
        <MainTheme
            darkMode={props.darkMode}
            onSwitchMode={props.onSwitchMode}
            lang={props.lang}
            onSwitchLang={props.onSwitchLang}
        >
            <ComplexList />
        </MainTheme>

    )
}