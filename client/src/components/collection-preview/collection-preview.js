import React from 'react';

import CollectionItem from '../collection-item/collection-item';

import {
  CollectionPreviewContainer,
  PreviewTitle,
  PreviewContainer
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <PreviewTitle>{title.toUpperCase()}</PreviewTitle>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
