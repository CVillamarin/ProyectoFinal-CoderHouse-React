import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { database } from '../../services/firebaseConfig';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [cargando, setCargando] = useState(true);
    const {nomCategoria} = useParams();

    useEffect(() => {
        const collectionProd = collection(database,'productos');
        const referencia = nomCategoria
            ? query(collectionProd, where('category', '==',nomCategoria))
            : collectionProd;
        getDocs(referencia)
            .then((res) => {
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItems(products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setCargando(false);
            });

        return () => setCargando(true);
    }, [nomCategoria]);

    if (cargando) {
        return (
            <div className='ilc'>
            </div>
        );
    }
    return (
        <main>
            <div className="item-list-container">
                <ItemList items={items} />
            </div>
        </main>
    );
};

export default ItemListContainer;
