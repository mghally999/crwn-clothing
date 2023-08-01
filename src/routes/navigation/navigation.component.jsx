import { useContext } from 'react';
import Route from '../../routes/route/route.component';
import Link from '../../components/Link/Link.component';
import Home from '../home/home.component';
import Authentication from '../authentication/authentication.component';
import './navigation.styles.scss';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Shop = () => {
    return 'SHOP';
};

function Navigation() {

    const { currentUser } = useContext(UserContext);

    // const links = [
    //     { label: 'Shop', path: '/shop' },
    //     currentUser ? { label: 'Sign out', path: '/auth' } : { label: 'Sign in', path: '/auth' },
    // ];


    // const renderedLinks = links.map((link) => {
    //     return <Link
    //         key={link.label}
    //         to={link.path}
    //         className="mb-3"
    //     > {link.label} </Link>;
    // });

    return (
        <>
            <div className="navigation">
                <div className="logo-container">
                    <div className="logo">
                        <Link to="/">
                            <CrwnLogo />
                        </Link>
                    </div>
                </div>
                <div className="nav-links-container">
                    <Link to="/shop" className="mb-3">Shop</Link>
                    {currentUser ?
                        <Link to="/auth" className="mb-3">
                            <span className="nav-link" onClick={signOutUser}>Sign out</span>
                        </Link> :
                        <Link to="/auth" className="mb-3">Sign in</Link>
                    }
                </div>
            </div>

            <Route path="/">
                <Home />
            </Route>
            <Route path="/shop">
                <Shop />
            </Route>
            <Route path="/auth">
                <Authentication />
            </Route>
        </>
    );
};

export default Navigation;