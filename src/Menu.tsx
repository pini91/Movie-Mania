import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { menuData } from './data/menuData';
import './Menu.css';

interface MenuProps {
  mode: boolean;
}

function Menu({ mode }: MenuProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (itemName: string) => {
    setActiveItem(activeItem === itemName ? null : itemName);
  };

  // Flatten all menu items into one array for pill tags
  const allMenuItems = [
    ...menuData.flatMap(section => section.items)
  ];

  return (
    <div className={`menu-container ${mode ? 'menu-dark' : 'menu-light'}`}>
      {/* <h4 className="menu-title">Menu</h4> */}
      <div className="menu-tag-wrapper">
        {allMenuItems.map((item, index) => (
          <button
            key={index}
            className={`menu-tag ${activeItem === item.name ? 'active' : ''}`}
            onClick={() => handleItemClick(item.name)}
            aria-pressed={activeItem === item.name}
          >
            <FontAwesomeIcon icon={item.icon} className="menu-tag-icon" />
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Menu;
