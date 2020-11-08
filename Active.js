import React from "react";

function Active({ items, handleCheckbox }) {

  return (
    <div>
      {items.filter(todo => todo.complete === false).map((list) => {
        return (
          <div key={list.id} className="items">
            <input
              value={list.title}
              type="checkbox"
              checked={list.complete}
              onChange={() => handleCheckbox(list.id)}
            />
            <span className="itemName">{list.title}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Active;
