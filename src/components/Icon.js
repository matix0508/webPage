export default function Icon(props) {
    return (
        <a href={props.href || "#"}>
            <svg width="30" height="30" fill="currentColor"
                 className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                 viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path
                    d={props.children}>
                </path>
            </svg>
        </a>
    )
}