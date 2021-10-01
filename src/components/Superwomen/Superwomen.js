import React from 'react';
import './Superwomen.css';

const Superwomen = (props) => {
    const { name, picture, balance } = props.superwomen;
    return (
        <div className="product">
            <div>
                <img className="img" src={picture} alt=" " />
                <h3>Name: {name}</h3>
                <h5>Balance: {balance}</h5>
                <button
                    onClick={() => props.handleAdd(props.superwomen)}
                    className="add">Add</button>

            </div>
        </div>
    );
};

export default Superwomen;