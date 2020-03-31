import React from "react";
import "./App.css";
import PizzaList from "./component/Pizza/PizzaList";
import AddPizzaForm from "./component/AddPizzaForm";

function App() {
  return (
    <div className="App">
      <PizzaList />
      <AddPizzaForm />
    </div>
  );
}

export default App;
