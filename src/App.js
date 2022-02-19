import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const LOCAL_STORE_KEY = "todoList.items";

function App() {
  const [items, setItems] = useState([]);
  const itemNameRef = useRef();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORE_KEY));
    if (storedItems) setItems(storedItems);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(items));
  }, [items]);

  function toggleItem(id) {
    const newItems = [...items];
    const item = newItems.find((item) => item.id === id);
    item.complete = !item.complete;
    setItems(newItems);
  }
  function handleAddItem(e) {
    const name = itemNameRef.current.value;
    if (name === "") return;

    setItems((prevItems) => {
      return [...prevItems, { id: uuidv4(), name: name, complete: false }];
    });
    itemNameRef.current.value = null;
  }
  function handleClearCompletedItems() {
    const newItems = items.filter((item) => !item.complete);
    setItems(newItems);
  }

  return (
    <>
    <div className='aboveList'>
    <input ref={itemNameRef} type="text" placeholder='New Task...' className='taskInput' />
        <button onClick={handleAddItem}>Add Item</button>
        <button onClick={handleClearCompletedItems}>Clear Completed</button>
        <div className='remDiv'>
          {items.filter((item) => !item.complete).length} remaining items
        </div>
    </div>
      <div className="listWrap">
        <TodoList items={items} toggleItem={toggleItem} />

      </div>
    </>
  );
}

export default App;
