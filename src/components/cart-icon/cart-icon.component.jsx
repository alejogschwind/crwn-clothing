import React from 'react';
import { connect } from 'react-redux';

import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import { ReactComponent as ShoppingIcon } from '../../assets/shopbag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toogleCartHidden, itemsCount}) => (
  <div className="cart-icon" onClick={toogleCartHidden}>
    <ShoppingIcon className='shopping-icon'/>
    
    <span className="item-count">{itemsCount}</span>
  </div>
)

const mapStateToProps = (state) => ({
  itemsCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);