import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDdfLaGMBcm-a3ZQ7dV-Cs896CxW7UrbU0",
  authDomain: "ecommerce-49da4.firebaseapp.com",
  projectId: "ecommerce-49da4",
  storageBucket: "ecommerce-49da4.appspot.com",
  messagingSenderId: "861779789317",
  appId: "1:861779789317:web:a33a8f24f2474d7e793e6c"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ChakraProvider>
      <App />
    </ChakraProvider>
)
