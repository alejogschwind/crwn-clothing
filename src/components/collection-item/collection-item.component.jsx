import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({id, name, price, imageUrl}) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <samp className='name'>{name}</samp>
      <samp className='price'>${price}</samp>
    </div>
  </div>
)

export default CollectionItem;