import shopIconActionTypes from './shopIcon.types';

const INITIAL_STATE = {
    hidden: true
};

const shopIconReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopIconActionTypes.TOGGLE_SHOP_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
            default:
                return state;
        }
}

export default shopIconReducer;
        