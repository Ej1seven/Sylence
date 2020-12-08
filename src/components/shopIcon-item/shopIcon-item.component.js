import React from 'react';
import { withRouter } from 'react-router-dom';

import './shopIcon-item.styles.scss'

const ShopIconItem = ({ title, history, linkUrl, match }) => (
    <div className='shop-item' onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div classname='shop-details'>         
                        {title.toUpperCase()}          
        </div>
    </div>
)

export default withRouter(ShopIconItem);