import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  align-items: center;

  @media screen and (max-width: 1000px) {
    align-items: center;
  }
`;

export const PreviewTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 400px));
  grid-gap: 5px;
  justify-content: center;
  width: 100%;
`;
