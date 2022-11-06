import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from '../../Context/CartContext';

const CartWidget = () => {
    const { totalUnidades } = useContext(CartContext);
    const total = totalUnidades();
    return (
        <div className="widget-container" >
            <AiOutlineShoppingCart size={20} />
            <span>{total}</span>
        </div>
    );
};

export default CartWidget;