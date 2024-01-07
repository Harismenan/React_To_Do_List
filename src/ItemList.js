import React from "react";
import LineItem from "./LineItem";

const ItemList = ({ items, handleChange, handleDelete }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <LineItem
            key={item.id}
            item={item}
            handleChange={handleChange}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
