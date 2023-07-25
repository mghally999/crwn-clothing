import Link from '../../components/Link/Link.component';
import './navigation.styles.scss';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

function Navigation() {
    const links = [
        { label: 'Shop', path: '/shop' },
        { label: 'Sign in', path: '/sign-in' },
    ];

    const renderedLinks = links.map((link) => {
        return <Link
            key={link.label}
            to={link.path}
            className="mb-3"
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        > {link.label}</Link>;
    });

    return (
        <div className="navigation">
            <Link to="/">
                <CrwnLogo />
            </Link>
            {renderedLinks}
        </div>
    );
};

export default Navigation;