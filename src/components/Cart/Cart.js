import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart= props.cartname
    var total = 0
    for (let i = 0; i < cart.length; i++) {
        const intotal= cart[i];

        total= total+ intotal.price
        
    }
    
    const alltotal=total.toFixed(2)

    return (
        <div className='cart'>
            <h2>Total course {cart.length}</h2>
            <h3>Price total {alltotal}</h3>
            <button>Bye Now</button>
        </div>
    );
};

export default Cart;