import { createSelector } from 'reselect';

const selectShopIcon = state => state.shopIcon;

export const selectShopIconHidden = createSelector(
    [selectShopIcon],
    shopIcon => shopIcon.hidden
);