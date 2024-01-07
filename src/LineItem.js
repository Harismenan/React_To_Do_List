import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleChange, handleDelete }) => {
  return (
    <div>
      <li className="item">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => handleChange(item.id)}
        />

        <label
          onDoubleClick={() => handleChange(item.id)}
          style={{
            textDecoration: item.checked ? "line-through" : "none",
          }}
        >
          {item.item}
        </label>

        <FaTrashAlt
          role="button"
          tabIndex={0}
          aria-label="delete item"
          onClick={() => handleDelete(item.id)}
        />
      </li>
    </div>
  );
};

export default LineItem;
