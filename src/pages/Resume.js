import MainTheme from "../components/MainTheme";
import Cards from "../components/Cards";
import Functionality from "../components/Functionality";

export default function Resume(props) {
    return (
        <MainTheme darkMode={props.darkMode} onSwitchMode={props.onSwitchMode}>
            <Cards />
        </MainTheme>
    )
}