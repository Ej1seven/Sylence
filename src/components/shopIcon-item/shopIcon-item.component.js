import React from 'react';
import { withRouter } from 'react-router-dom';

import { ShopItem } from './shopIcon-item.styles.js'

const ShopIconItem = ({ title, history, linkUrl, match }) => (
    <ShopItem onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='shop-details'>         
                        {title.toUpperCase()}          
        </div>
    </ShopItem>
)

export default withRouter(ShopIconItem);