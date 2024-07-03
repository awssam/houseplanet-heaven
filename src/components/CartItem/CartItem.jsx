import React from 'react';
import { useDispatch } from 'react-redux';
import './CartItem.css';
import { decrementItem, incrementItem, removeItem } from '../../CartSlice';

const CartItem = ({id,thumbnail,name,price,quantity}) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
          <img src={thumbnail} alt={name} className="thumbnail" />
          <div className="item-details">
            <h2>{name}</h2>
            <p>Unit Price: ${price}</p>
            <p>
              Total Price: ${price * quantity}
            </p>
            <div className="item-controls">
                <button onClick={() => dispatch(decrementItem(id))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => dispatch(incrementItem(id))}>+</button>
              <button onClick={() => dispatch(removeItem(id))} className="delete-button">Delete</button>
            </div>
          </div>
      </div>
  );
};

export default CartItem;
