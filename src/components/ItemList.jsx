import Item from "./Item";
import { Container } from "@chakra-ui/react";


const ItemList = ({ comp }) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {comp?.map((comp) => (
          <Item
            key={comp.id}
            id={comp.id}
            name={comp.name}
            description={comp.description}
            price={comp.price}
            stock={comp.stock}
            category={comp.category}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;
