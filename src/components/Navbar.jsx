import { Box, Flex, Spacer } from '@chakra-ui/react';
import React from 'react'
import CartWidget from './CartWidget'
import '../App.css'



const Navbar = () =>{
  return(
    <nav>
      <Flex minWidth='max-content' alignItems='center' gap='2'>

        <Box>
          <div>
            <Flex>
            <li><a href="">Computadoras</a></li>
            <li><a href="">Accesorios</a></li>
            <li><a href="">Perifericos</a></li>
            </Flex>
          </div>
        </Box>

        <Spacer/>
        
        <Box>
          <h1>TecnoStore</h1>
        </Box>
        
        <Spacer/>
        
        <Box>
          <CartWidget/>
        </Box>
      </Flex>
      
    </nav>
  )
}

export default  Navbar; 

