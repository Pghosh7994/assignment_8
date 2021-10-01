import React, { useEffect, useState } from 'react';
import Superwomen from '../Superwomen/Superwomen';
import Total from '../Total/Total';
import './Cart.css'

const Cart = () => {
    const [superwomens, setSuperwomen] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('././superwomen.JSON')
            .then(res => res.json())
            .then(data => setSuperwomen(data));
    }, [])


    const handleAdd = (superwomen) => {
        const newCart = [...cart, superwomen];
        setCart(newCart);

    }


    return (
        <div className="cart">
            <div className="superwomen">
                {
                    superwomens.map(superwomen => <Superwomen
                        key={superwomen.key}
                        superwomen={superwomen}
                        handleAdd={handleAdd}
                    >
                    </Superwomen>)
                }
            </div>

            <div className="total">
                <Total cart={cart} ></Total>
            </div>
        </div>
    );
};

export default Cart;