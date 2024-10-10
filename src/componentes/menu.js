import MenuItem from './MenuItem';
import '../Menu.css';

const Menu = ({menuData}) => {
  if (!menuData|| !Array.isArray(menuData)) {
    return <p>No hay elementos</p>;
  }


  return (
    <nav>
      <ul>
        {menuData.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
