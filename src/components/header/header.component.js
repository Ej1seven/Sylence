import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/sylence-logo-white.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import ShopIcon from '../shop-icon/shop-icon.component';
import { selectShopIconHidden } from '../../redux/shopIcon/shopIcon.selector';
import  ShopDropdown  from '../shop-dropdown/shop-dropdown.component';


import './header.styles.scss';

const Header = ({ currentUser, hiddenCartIcon, hiddenShopIcon }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <ShopIcon />
            <Link className='option' to='/shop'>COLLECTIONS</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            ) : (
                <Link className='option' to='/signin'>SIGN IN</Link>
            )}
            <CartIcon />
        </div>
        { hiddenCartIcon ? null : <CartDropdown /> }
        { hiddenShopIcon ? null : <ShopDropdown /> }
     </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hiddenCartIcon: selectCartHidden,
    hiddenShopIcon: selectShopIconHidden
});

export default connect(mapStateToProps)(Header);