import React from 'react';

import { ShopDropdownContainer } from './shop-dropdown.styles';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import ShopIconItem  from '../shopIcon-item/shopIcon-item.component';
import { toggleShopIconHidden } from '../../redux/shopIcon/shopIcon.actions';



const ShopDropdown = ({ sections, toggleShopIconHidden }) => (
    <ShopDropdownContainer onMouseLeave={toggleShopIconHidden} onClick={toggleShopIconHidden}> 
        {
            sections.map(({id, ...otherSectionProps}) => (
                <ShopIconItem key={id} {...otherSectionProps} />
            ))
        }
    </ShopDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

const mapDispatchToProps = dispatch => ({
    toggleShopIconHidden: () => dispatch(toggleShopIconHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopDropdown);