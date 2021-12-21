import React from "react";
import { ReactComponent as Logo } from "../../assets/sylence-logo-white.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import ShopIcon from "../shop-icon/shop-icon.component";
import { selectShopIconHidden } from "../../redux/shopIcon/shopIcon.selector";
import ShopDropdown from "../shop-dropdown/shop-dropdown.component";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

const Header = ({ currentUser, hiddenCartIcon, hiddenShopIcon }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <ShopIcon />
      <OptionLink to="/shop">COLLECTIONS</OptionLink>
      {/* <OptionLink to='/shop'>CONTACT</OptionLink> */}
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hiddenCartIcon ? null : <CartDropdown />}
    {hiddenShopIcon ? null : <ShopDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hiddenCartIcon: selectCartHidden,
  hiddenShopIcon: selectShopIconHidden,
});

export default connect(mapStateToProps)(Header);
