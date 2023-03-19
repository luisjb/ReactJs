import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import Data from "../data.json";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        const compCollection = collection(db, "computacion");
        getDocs(compCollection).then((querySnapshot) => {
            const comp = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
        setData(comp);
    });
}, []);
    return <ItemDetail comp={data} />;
};

export default ItemDetailContainer;
