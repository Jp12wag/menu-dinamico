import React from 'react';


const MenuItem = ({ item }) => {
  return (
    <li>
      <a href={item.enlace}>
        <i className={`icon-${item.icono}`}></i> {item.nombre}
      </a>
      {item.subMenu && item.subMenu.length > 0 && (
        <ul>
          {item.subMenu.map((subItem) => (
            <MenuItem key={subItem.id} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
