import React from "react";
import './Item.css';

export default function Item({ item, toggleItem }) {
    function handleItemClick(){
        toggleItem(item.id)
    }
  return (
    <div className='itemDiv'>
      <label>
        <input type="checkbox" checked={item.complete} onChange={handleItemClick}/>
        {item.name}
      </label>
    </div>
  );
}
