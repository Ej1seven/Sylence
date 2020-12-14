import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  flew-wrap: wrap;
  margin-bottom: 30px;

    @media screen and (max-width: 800px) {
        &:first-child {
            margin-top: 30px;
        }
    }
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 15px;
  cursor: pointer;
  text-align: center;

  &:hover {
    color: #706867;
  }
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & > div {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
      display:  flex;
      flex-wrap: wrap; 
  }
`;