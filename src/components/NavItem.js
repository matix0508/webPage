export default function NavItem(props) {
    return (
        <a className="py-2 px-6 flex hover:text-black" href={props.href}>
            {props.children}
        </a>
    )
}