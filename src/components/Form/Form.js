import {addDoc,collection,documentId,getDocs,query,serverTimestamp,where,writeBatch,} from 'firebase/firestore';
import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { database} from '../../services/firebaseConfig';

const Form = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [gmail, setGmail] = useState('');
    const [cargando, setCargando] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, total, deleteAll } = useContext(CartContext);
    const precioTotal = total();
    const handleSubmit = async (e) => {
        setCargando(true);
        e.preventDefault();
        try {
            const order = {
                comprador: { nombre, apellido },
                items: cart,
                total: precioTotal,
                fecha: serverTimestamp(),
            };
        const ids = cart.map((prod) => prod.id);
        const productsRef = collection(database, 'productos');
         const productoAgregadoDeFS = await getDocs(
                query(productsRef, where(documentId(), 'in', ids))
            );

            const {docs} = productoAgregadoDeFS;
            const sinStock = [];
            const batch = writeBatch(database);

            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDB = dataDoc.stock;

                const productoAgregado = cart.find(
                    (prod) => prod.id === doc.id
                );

        const prodQuantity = productoAgregado?.cantidad;
            if (stockDB >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDB - prodQuantity });
                } else {
                    sinStock.push({ id: doc.id, ...dataDoc });
                }
            });
            if (sinStock.length === 0) {
                batch.commit();
                const orderRef = collection(database, 'orders');
                const orderAdded = await addDoc(orderRef, order);
                setOrderId(orderAdded.id);
                deleteAll();
            } else {
                console.log('Uno de los productos esta acabado.');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setCargando(false);
        }
    };

    const cambiarNombre=(e)=>{setNombre(e.target.value);};
    const cambiarApellido=(e)=>{setApellido(e.target.value);};
    const cambiarGmail=(e)=>{setGmail(e.target.value);};
    if (orderId) {
        return (
            <h1 className='form'>Muchas Gracias por comprar en 3DLocuras,recibira su pedido pronto.Use el siguiente numero para traquear su pedido:${orderId}</h1>
        );
    }
    return (
        <div className='form1'>
            <form onSubmit={handleSubmit} action="">
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre..."
                    onChange={cambiarNombre}
                    value={nombre}
                />
                <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido..."
                    onChange={cambiarApellido}
                    value={apellido}
                />
                <input
                    type="gmail"
                    name="gmail"
                    placeholder="Gmail..."
                    onChange={cambiarGmail}
                    value={gmail}
                />
                <button>{cargando ? 'Enviando...' : 'Enviar'}</button>
            </form>
        </div>
    );
};

export default Form;