import styled, { css } from "styled-components";

const buttonStyles = css`
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
const googleSignInStyles = css`
  background-color: #4285f4;

  &:hover {
    background-color: #357ae8;
    border: none;
    color: black;
  }
  @media screen and (max-width: 800px) {
    font-size: 9px;
  }
`;
const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 15px 0 15px;
  font-size: 13px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
  @media screen and (max-width: 800px) {
    min-width: 140px;
    letter-spacing: 0.1px;
  }
`;
