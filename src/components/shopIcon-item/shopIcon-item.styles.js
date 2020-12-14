import styled from 'styled-components';

export const ShopItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
    border-right: 1px solid white;
    cursor: pointer;

    &:last-child {
    border-right: none;
}

    &:hover {
    background-color: white;
    color: black;
}


.shop-details {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
    font-size: 20px;
    text-align: center;

    @media screen and (max-width: 1024px) {
        padding: 10px 3px;
    }

    @media screen and (max-width: 768px) {
        font-size: 15px;
    }

    @media screen and (max-width: 425px) {
        font-size: 12px;
        padding: 2px 1px;
    }
`;