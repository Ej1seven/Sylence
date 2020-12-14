import styled from 'styled-components';

export const ShopDropdownContainer = styled.div`
    position: absolute;
    width: 700px;
    height: 40px;
    display: flex;
    flex-direction: row;
    border: 1px solid white;
    background-color: black;
    top: 15%;
    right: 25%;
    z-index: 5;

    @media screen and (max-width: 1024px) {
        width: 600px;
        height: 30px;
        top: 19%;
        right: 20%;
    }

    @media screen and (max-width: 768px) {
        width: 500px;
        height: 25px;
        top: 200%;
        right: 20%;
    }

    @media screen and (max-width: 425px) {
        width: 370px;
        right: 8%
    }

    @media screen and (max-width: 375px) {
        width: 300px;
        right: 6%
    }
`;