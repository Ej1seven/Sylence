import React from 'react';
import { connect } from 'react-redux';
import './shop-icon.styles.scss'

import { toggleShopIconHidden } from '../../redux/shopIcon/shopIcon.actions';

const ShopIcon = ({ toggleShopIconHidden}) => (
    <div  onClick={toggleShopIconHidden} >
        <p className='shop-icon'>SHOP</p>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleShopIconHidden: () => dispatch(toggleShopIconHidden())
});

export default connect(null, mapDispatchToProps)(ShopIcon);