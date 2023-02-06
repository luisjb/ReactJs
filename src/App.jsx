import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './containers/ItemListContainer'


function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting ={"Bienvenidos a TecnoStore"}/>
    </>
  );
}

export default App
