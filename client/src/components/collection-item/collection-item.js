import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  CollectionItemImage,
  CollectionItemSpan,
  CollectionItemFooter
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <CollectionItemImage imageUrl={imageUrl} />
      <CollectionItemFooter>
        <CollectionItemSpan>{name}</CollectionItemSpan>
        <CollectionItemSpan>{price}</CollectionItemSpan>
      </CollectionItemFooter>
      <CustomButton onClick={() => addItem(item)} inverted>
        {' '}
        Add to cart{' '}
      </CustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
