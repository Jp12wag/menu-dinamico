import './App.css';
import React, { useState } from 'react';
import Menu from './componentes/menu';
import MenuEditor from './componentes/MenuEditor';

function App() {
  const [menuData, setMenuData] = useState([
    {
      id: 1,
      nombre: "Inicio",
      enlace: "/inicio",
      icono: "home",
      subMenu: []
    },
    {
      id: 2,
      nombre: "Sobre Nosotros",
      enlace: "/sobre-nosotros",
      icono: "info",
      subMenu: []
    },
    {
      id: 3,
      nombre: "Servicios",
      enlace: "/servicios",
      icono: "settings",
      subMenu: [
        {
          id: 31,
          nombre: "Consultoría",
          enlace: "/servicios/consultoria",
          icono: "briefcase"
        }
      ]
    }
  ]);

 
   const addMenuItem = (item) => {
    setMenuData([...menuData, item]);
  };
 
  return (
    <div className="App">
     <div>
      <h1>Menú Dinámico</h1>
      <Menu menuData={menuData} />
      <h2>Agregar Opción al Menú</h2>
      <MenuEditor addMenuItem={addMenuItem} />
    </div>
    </div>
  );
}

export default App;
