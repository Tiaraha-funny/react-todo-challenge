import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Active from "./Active";
import All from "./All";
import Completed from "./Completed";
import InputComponent from "./InputComponent";
import "./index.css";

function App() {
  const [items, setItems] = useState([]);
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = {
      id: Date.now(),
      title: data,
      complete: false,
    };

    if (items === "") return;
    setItems((prev) => [...prev, newList]);
    setData("");
    e.target.reset();
  };

  const handleCheckbox = (id) => {
    console.log("is it checked?");
    const checkedTodo = items.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setItems(checkedTodo);
  };

  const deleteItems = id => {
    console.log("delete this item");
    const newList = items.filter((item) => item.id !== id);
    setItems(newList);
  }

 useEffect(() => {
   const items = JSON.parse(localStorage.getItem("items"));
   if (items) {
     setItems(items);
   }
 }, []);

 useEffect(() => {
   localStorage.setItem("items", JSON.stringify(items));
 }, [items]);

  return (
    <section>
      <header>
        <h2>#Todo</h2>
      </header>

      <div className="links">
        <Link to="/">All</Link>
        <Link to="/active">Active</Link>
        <Link to="/complete">Completed</Link>
      </div>

      <hr />

      <InputComponent
        items={items}
        data={data}
        setData={setData}
        setItems={setItems}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <Switch>
        <Route exact path="/">
          <All
            items={items}
            data={data}
            setData={setData}
            setItems={setItems}
            handleCheckbox={handleCheckbox}
          />
        </Route>
        <Route exact path="/active">
          <Active
            items={items}
            setItems={setItems}
            handleCheckbox={handleCheckbox}
          />
        </Route>
        <Route path="/complete">
          <Completed
            items={items}
            setItems={setItems}
            handleCheckbox={handleCheckbox}
            deleteItems={deleteItems}
          />
        </Route>
      </Switch>
    </section>
  );
}

export default App;
