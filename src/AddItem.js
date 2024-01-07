import React from "react";
import { IoMdAdd } from "react-icons/io";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef(null);
  return (
    <div>
      <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input
          autoFocus
          type="text"
          id="addItem"
          placeholder="Add an item to your list"
          required
          value={newItem}
          ref={inputRef}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          type="submit"
          aria-label="Add Item"
          onClick={() => inputRef.current.focus()}
        >
          <IoMdAdd />
        </button>
      </form>
    </div>
  );
};

export default AddItem;
