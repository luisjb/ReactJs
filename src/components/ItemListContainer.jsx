import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import Data from "../data.json";
import { Center, Heading, Spinner } from '@chakra-ui/react';
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";




const ItemListContainer = () =>{
  const [componentes, setComp] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const db = getFirestore();
    const compCollection = collection(db, "computacion");
    getDocs(compCollection).then((querySnapshot) => {
      const comp = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setLoading(false)
      setComp(comp);
    });
  }, []);
  const cateFilter = componentes.filter((comp) => comp.category === category);
  return(
    <div>
      {loading ? (
        <Center>
          <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/> 
        </Center>
        ) :<Center bg="#696A74" h="100px" color="black">
            <Heading as="h2" size="2xl">Components by category</Heading>
        </Center>
    }
{category ? <ItemList comp={cateFilter} /> : <ItemList comp={componentes} />}
    </div>
  )
}

export default  ItemListContainer;
