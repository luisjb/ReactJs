import { FormControl, FormLabel, Input, FormHelperText, Button,
Container, Box, Textarea, Center, Heading, Card, CardHeader, CardBody, CardFooter, Text, MenuButton, Menu} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';


const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const getOrderItems = () => {
    return cart.map((item) => {
      return {
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "" || userEmail === "") {
      alert("No pueden existir campos vacios");
    } else {
      addDoc(ordersCollection, order).then(({id}) => setOrderId(id))
    }
    
  };

  const db = getFirestore();
  const ordersCollection = collection(db, "orden");

  const items = getOrderItems();

  const order = {
    userName,
    userEmail,
    items,
  };

  
  const handleDelete = (id) => {
    const index = cart.findIndex((item) => item.id === id); 
    const newCart = [...cart]; 
    newCart.splice(index, 1); 
    setCart(newCart); 
  };

  const totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <>
      <Center bg="#696A74" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Cart
        </Heading>
      </Center>
      {cart.map((item) => {
        return (
          <Container key={item.id} maxW="container.sm" className="main-catalogue">
            <Card maxW="sm" m="1rem">
              <CardHeader>
                <Heading size="md">{item.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text as="b">Quantity: {item.quantity}</Text>
                <Text>Price: U$D {item.price}</Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme="red" onClick={() => 
                  handleDelete(item.id)
                }> Delete from cart </Button>
                
              </CardFooter>
            </Card>
          </Container>
        );
      })}
      {totalPrice > 0? (
      <div>

      <center>
        <h1 size="lg">
          Total price U$D {totalPrice}
        </h1>
      </center>
      <Container className="cart-container">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Box>
            <FormLabel>Your name</FormLabel>
            <Input type="text" onChange={(e) => setUserName(e.target.value)} />
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={(e) => setUserEmail(e.target.value)}/>
            <FormHelperText>We'll never share your email.</FormHelperText>
          </Box>
          <FormLabel>What do you want to tell us?</FormLabel>
          <Textarea></Textarea>
          <Box className="btn-send">
            <Button type="submit" colorScheme="teal" variant="outline">
              Send information
            </Button>
          </Box>
        </FormControl>
        </form>
      </Container>
      <Center>
        <Text as="b" m={3} fontSize="xl">
          Order ID:{" "}
        </Text>
        <Text as="mark" fontSize="2xl">
          {orderId}
        </Text>
      </Center>  
      </div>) :
      (
        <center>
          <Text>
          There are no items in the cart. Please go to the Catalog
          </Text>
          <Menu >
              <Link to={"/catalogue"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="outline"
                  colorScheme="green"
                  m="5"
                  fontSize="xl"
                  >
                  Catalogue
                </MenuButton>
              </Link>
          </Menu> 
        </center>)
      }
    </>
    );
  };
  
export default Cart;
