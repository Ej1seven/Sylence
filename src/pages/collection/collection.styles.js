import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  
  @media screen and (max-width: 800px) {
        &:first-child {
            margin-top: 30px;
        }  
    }
`;

export const CollectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 15px;
  text-align: center;

`;

export const CollectionItemsContainer = styled.div`
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