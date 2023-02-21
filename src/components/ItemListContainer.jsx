import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import Data from "../data.json";
import { Center, Heading } from '@chakra-ui/react';
import { useState, useEffect } from "react";



const ItemListContainer = () =>{
  const { category } = useParams();
  const cateFilter = Data.filter((comp) => comp.category === category);
  return(
    <div>
      <Center bg="#696A74" h="100px" color="black">
        <Heading as="h2" size="2xl">Components by category</Heading>
      </Center>
      {category ? <ItemList comp={cateFilter} /> : <ItemList comp={Data} />}
    </div>
  )
}

export default  ItemListContainer;
