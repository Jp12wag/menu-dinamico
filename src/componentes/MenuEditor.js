import React, { useState } from 'react';

const MenuEditor = ({ addMenuItem }) => {
  const [nombre, setNombre] = useState('');
  const [enlace, setEnlace] = useState('');
  const [icono, setIcono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMenuItem({
      id: Math.floor(Math.random() * 1000), // Genera un ID único
      nombre,
      enlace,
      icono,
      subMenu: []
    });
    setNombre('');
    setEnlace('');
    setIcono('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Enlace"
        value={enlace}
        onChange={(e) => setEnlace(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Icono"
        value={icono}
        onChange={(e) => setIcono(e.target.value)}
        required
      />
      <button type="submit">Agregar Opción</button>
    </form>
  );
};

export default MenuEditor;
