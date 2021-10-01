import React from 'react';
import './Total.css'

const Total = (props) => {
    const { cart } = props;
    let addTotal = 0;
    for (const superwomen of cart) {
        addTotal = (superwomen.balance) + addTotal;
    }
    return (
        <div>
            <h3>Total</h3>
            <h5>TOtal Order : {props.cart.length}</h5>
            <p>Total Balance :$ {addTotal}</p>
        </div>
    );
};

export default Total;