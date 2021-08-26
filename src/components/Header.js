export default function Header(props) {
    return (
        <header className="h-24 sm:h-32 flex items-center z-30 w-full">
            <div className="container mx-auto px-6 flex items-center justify-between">
                {props.children}
            </div>
        </header>
    )
}