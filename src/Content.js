import React from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleChange, handleDelete }) => {
  return (
    <>
      {items.length === 0 ? (
        <p
          style={{
            color: "Black",
            fontSize: "20px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Your list is empty
        </p>
      ) : (
        <ItemList
          items={items}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default Content;
