import MainTheme from "../components/MainTheme";
import Icon from "../components/Icon";
import ContactMe from "../components/ContactMe";
import SocialMedia from "../components/SocialMedia";

export default function Contact(props) {
    return (

        <MainTheme
            darkMode={props.darkMode}
            onSwitchMode={props.onSwitchMode}
            lang={props.lang}
            onSwitchLang={props.onSwitchLang}
        >
            <SocialMedia />
            <ContactMe />
        </MainTheme>

    )
}