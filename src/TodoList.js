import React from 'react';
import Item from './Item';
import './TodoList.css';


export default function TodoList({items, toggleItem}) {
    return (
        items.map(item => {
            return <Item key={item.id} item={item} toggleItem={toggleItem}/>
        })
    )
}
