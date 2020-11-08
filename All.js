import React from "react";

function All({ items, handleCheckbox }) {
console.log(items);
  return (
    <div>
      {items.map((list) => { return (
        <div key={list.id} className="items">
          <input
            value={list.title}
            type="checkbox"
            checked={list.complete}
            onChange={() => handleCheckbox(list.id)}
          />
          <span className="itemName">{list.title}</span>
        </div>
      )})}
    </div>
  );
}

export default All;
