import React from "react";

function InputComponent({ handleChange, handleSubmit }) {

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="item"
            className="main__input"
            placeholder="add details"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default InputComponent;
