import React from "react";
import trashSvg from "./trash.svg";

function Completed({ items, deleteItems }) {
  return (
    <div>
      {items.filter(todo => todo.complete === true).map((list) => {
        return (
          <div key={list.id}>
            <input
              value={list.title}
              type="checkbox"
              checked={list.complete}
              onChange={() => handleCheckbox(list.id)}
            />
            <strike className="itemName">
              {list.title}
            </strike>
            <button className="delete" onClick={() => deleteItems(list.id)}>
              <img src={trashSvg} />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Completed;
