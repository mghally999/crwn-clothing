import { useContext } from 'react';
import Route from '../../routes/route/route.component';
import Link from '../../components/Link/Link.component';
import Home from '../home/home.component';
import Authentication from '../authentication/authentication.component';
import './navigation.styles.scss';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';

const Shop = () => {
    return 'SHOP';
};

function Navigation() {
    const { currentUser } = useContext(UserContext);
    console.log(currentUser);

    const links = [
        { label: 'Shop', path: '/shop' },
        { label: 'Sign in', path: '/auth' },
    ];

    const renderedLinks = links.map((link) => {
        return <Link
            key={link.label}
            to={link.path}
            className="mb-3"
        > {link.label}</Link>;
    });

    return (
        <div className="navigation">
            {renderedLinks}
            <Link to="/">
                <CrwnLogo />
            </Link>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/shop">
                <Shop />
            </Route>
            <Route path="/auth">
                <Authentication />
            </Route>
        </div>
    );
};

export default Navigation;