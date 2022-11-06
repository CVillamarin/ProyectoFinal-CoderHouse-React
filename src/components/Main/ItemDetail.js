import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import ItemCount from './ItemCount';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ item }) => {
    const [unidades, setUnidades] = useState(0);
    const { addToCart, getProductQuantity} = useContext(CartContext);

    const prueba = (numero) => {setUnidades(numero); addToCart(item, numero); toast.success(`Agregaste ${numero} unidades`); };
    const quantity = getProductQuantity(item.id);
    
    return (
        <div className="container-detail coloramarillo ">
            <img src={item.img} alt="" />
            <div>
                <h2>{item.title}</h2>
                {unidades === 0 ? (
                <ItemCount prueba={prueba} stock={item.stock} initial={quantity}/>
                ) : (
                <Link to="/cart">Ir al carrito</Link>
                )}
            </div>
    </div>
    );
};

export default ItemDetail;
