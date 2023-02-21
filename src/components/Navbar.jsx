import { Avatar, Box, Button, Container, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react';
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"


const Navbar = () =>{
  return(
    <>
      <Container maxW="150rem" bg="gray.600" color="#03CA0C">
        <Flex alignItems="center" gap="2">
          <Avatar size="m" src={logo}/>
          <Box p="10" w="300px" h="100">
            <Heading size="md">
              <Link to={"/"}>TecnoStore</Link>
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Menu>
              <Link to={"/catalogue"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="outline"
                  colorScheme="green"
                  m="5"
                >
                  Catalogue
                </MenuButton>
              </Link>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                size="lg"
                variant="outline"
                colorScheme="green"
                rightIcon={<ChevronDownIcon />}
                m="5"
              >
                Categories
              </MenuButton>
              <MenuList className="menu-list">
                <Link to={`/category/${"Notebook"}`}>
                  <MenuItem>Notebooks</MenuItem>
                </Link>
                <Link to={`/category/${"Accesorios"}`}>
                  <MenuItem>Accesorios</MenuItem>
                </Link>
                <Link to={`/category/${"Perifericos"}`}>
                  <MenuItem>Perifericos</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="10" w="300px" h="100">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default  Navbar; 

