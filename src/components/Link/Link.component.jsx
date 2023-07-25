import useNavigation from "../../hooks/use-navigation";

function Link({ to, children, className, activeClassName }) {
    const { navigate } = useNavigation();

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        };

        event.preventDefault();
        navigate(to);
    };

    return <div className="nav-links-container">
        <a className="nav-link" href={to} onClick={handleClick}> {children}</a>
    </div>
}

export default Link;