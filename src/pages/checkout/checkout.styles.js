import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media screen and (max-width: 840px) {
    width: 65%;
  }

  @media screen and (max-width: 800px) {
    padding-top: 20%;
    width: 65%;
  }

  @media screen and (max-width: 715px) {
    width: 75%;
    padding-top: 25%;
  }

  @media screen and (max-width: 580px) {
    width: 80%;
    padding-top: 27%;
  }

  @media screen and (max-width: 510px) {
    width: 83%;
    padding-top: 35%;

  @media screen and (max-width: 425px) {
    padding-top: 40%;
    width: 85%;
  }

  @media screen and (max-width: 375px) {
    padding-top: 35%;
    width: 93%;

  }

  @media screen and (max-width: 355px) {
    padding-top: 40%;
    width: 100%
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 715px) {
   
  }

  @media screen and (max-width: 510px) {
    font-size: 0.8em;
  }

  @media screen and (max-width: 425px) {

  }

  @media screen and (max-width: 320px) {
    font-size: 0.74em;

  }

  @media screen and (max-width: 320px) {
    
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;