import { Center, Card, CardBody, Image, Stack, Heading, Text, CardFooter, Divider} from "@chakra-ui/react";
import notebook from "../assets/notebook.png";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({ comp }) => {
  const { id } = useParams();
  // console.log(id);
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const compRef = doc(db, "computacion", `${id}`);

    getDoc(compRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("No such document!");
      }
    });
  }, []);
  
  const compFilter = comp.filter((comp) => comp.id == id);

  return (
    <>
      {compFilter.map((comp) => (
        <div key={comp.id}>
          <Center p="1rem">
            <Card className="card-main">
              <CardBody>
                <Image borderRadius="lg" src={notebook} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{comp.name}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Description: {comp.description}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Category: {comp.category}
                  </Text>
                  <Text color="red.600" fontSize="xl">
                    Stock: {comp.stock}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    Price: U$D {comp.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ItemCount
                  stock={comp.stock}
                  id={comp.id}
                  price={comp.price}
                  name={comp.name}
                />
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
