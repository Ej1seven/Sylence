const INITIAL_STATE = {
    sections: [
        {
            title: 'MENS',
            imageUrl:'https://images.unsplash.com/photo-1520773514296-e8f92a6356fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            id: 1,
            size: 'large',
            linkUrl: 'menspage'
        },
        {
            title: 'WOMENS',
            imageUrl:'https://images.unsplash.com/photo-1599839575338-31b11ae2cd16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            id: 2,
            size: 'large',
            linkUrl: ''
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
