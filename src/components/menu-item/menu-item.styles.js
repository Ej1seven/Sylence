import styled from 'styled-components';

export const MenuItemContainer = styled.div`
    min-width: 30%;
    height: 100vh;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    overflow: hidden;
    height: 700px;

    @media screen and (max-width: 800px) {
            display: none;
            
        }

    &:hover {
      cursor: pointer;

      & .background-image {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }

      & .content {
        opacity: 0.9;
      }
    }

    &:first-child {
      margin-right: 0.5px;
    }
    &:last-child {
      margin-left: 0.5px;
    }
    `;

    export const BackgroundImageContainer = styled.div`
        height: 100%;
        width: 100%;
        background-position: center;
        background-size: cover;
        background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    `;

    export const ContentContainer = styled.div`
      height: 90px;
      padding: 0 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      background-color: white;
      opacity: 0.7;
      position: absolute;
      color: black;

      &.content:hover {
        color: white;
        background-color: black;
        opacity: 0.7;
      }
    `;

    export const ContentTitle = styled.span`
        font-weight: bold;
        margin-bottom: 6px;
        font-size: 22px;
    `;

    export const ContentSubtitle = styled.span`
        .subtitle {
        font-weight: lighter;
        font-size: 16px;
      }
    `;
