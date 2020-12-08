const INITIAL_STATE = {
    sections: [
        {
            title: 'Mens',
            imageUrl:'https://images.unsplash.com/photo-1520773514296-e8f92a6356fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            id: 1,
            size: 'large',
            linkUrl: 'shop/mens'
        },
        {
            title: 'Womens',
            imageUrl:'https://images.unsplash.com/photo-1599839575338-31b11ae2cd16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            id: 2,
            size: 'large',
            linkUrl: 'shop/womens'
        },
        {
            title: 'Hats',    
            id: 3,
            linkUrl: 'shop/hats'
        },
        {
            title: 'Sneakers',
            id: 4,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'Jackets',
            id: 5,
            linkUrl: 'shop/jackets'
        }
    ]

}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;
