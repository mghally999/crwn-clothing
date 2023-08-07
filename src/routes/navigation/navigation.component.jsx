import { useContext } from 'react';
import Route from '../../routes/route/route.component';
import Link from '../../components/Link/Link.component';
import Home from '../home/home.component';
import Authentication from '../authentication/authentication.component';
import Shop from '../shop/shop.component';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import CheckOut from '../checkout/checkout.component';
import './navigation.styles.scss';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';


function Navigation() {

    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

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
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
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
            <Route path="/checkout">
                <CheckOut />
            </Route>
        </>
    );
};

export default Navigation;