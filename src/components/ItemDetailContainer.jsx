import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import Data from "../data.json";


const ItemDetailContainer = () => {
    return <ItemDetail comp={Data} />;
};

export default ItemDetailContainer;
