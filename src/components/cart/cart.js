import React from 'react';
import './cart.css';


const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for (const author of cart){
        total = total + author.hiringFees;
    }
    return(
        <div className="sticky-cart">
            <h4>Authors Added: {props.cart.length}</h4>
            <h4>Total Cost: {total}</h4>
        </div>
    );
};






export default Cart;