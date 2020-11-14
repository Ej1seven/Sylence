import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'MENS',
                    imageUrl:'https://images.unsplash.com/photo-1520773514296-e8f92a6356fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    id: 1,
                    size: 'large'
                },
                {
                    title: 'WOMENS',
                    imageUrl:'https://images.unsplash.com/photo-1599839575338-31b11ae2cd16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    id: 2,
                    size: 'large'
                }
            ]

        }
    }

    render() {
        return (
            <div className='directory-menu'> 
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                      <MenuItem key={id} title={title.toUpperCase()} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;