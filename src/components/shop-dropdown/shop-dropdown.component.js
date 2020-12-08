import React from 'react';

import './shop-dropdown.component.scss'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import ShopIconItem  from '../shopIcon-item/shopIcon-item.component';
import { toggleShopIconHidden } from '../../redux/shopIcon/shopIcon.actions';



const ShopDropdown = ({ sections, toggleShopIconHidden }) => (
    <div className='shop-dropdown' onMouseLeave={toggleShopIconHidden} onClick={toggleShopIconHidden}> 
        <div className='shop-options'>
        {
            sections.map(({id, ...otherSectionProps}) => (
                <ShopIconItem key={id} {...otherSectionProps} />
            ))
        }
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

const mapDispatchToProps = dispatch => ({
    toggleShopIconHidden: () => dispatch(toggleShopIconHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopDropdown);