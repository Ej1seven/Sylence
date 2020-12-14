import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-cart.svg';

export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 30px;
  height: 30px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 20px;
  left: 22px;

  @media screen and (max-width: 1050px) {
    bottom: 20px;
    left: 19px;
  }
  
  @media screen and (max-width: 1024px) {
    left: 17px;
  }

  @media screen and (max-width: 1000px) {
    left: 15px;
  }

  @media screen and (max-width: 798px) {
    left: 21px;
  }

  @media screen and (max-width: 521px) {
    left: 14px;



`;
