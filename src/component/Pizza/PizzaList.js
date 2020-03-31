import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//the selector itself is a pure function,
//that does not rely on anything inside of the component function
const selectUser = reduxState => {
  return reduxState.user;
};

const selectPizzasAndFav = reduxState => ({
  selectedpizzas: reduxState.pizzas,
  userFavorites: reduxState.user.favorites
});

const selectMostBoughtPizza = reduxState => {
  if (reduxState.pizzas.length === 0) {
    return null;
  }
  return reduxState.pizzas.reduce((mostBought, nextPizza) => {
    return mostBought.bought >= nextPizza.bought ? mostBought : nextPizza;
  });
};

const selectSortedPizza = reduxState => {
  if (reduxState.pizzas.length === 0) {
    return null;
  }
  return reduxState.pizzas.sort((pizza_a, pizza_b) => {
    return pizza_b.bought - pizza_a.bought;
  });
};

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzasList = useSelector(selectPizzasAndFav).selectedpizzas;
  console.log("global state", pizzasList);
  const pizzasSorted = useSelector(selectSortedPizza);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! Your {pizzasList.length}{" "}
        favorite pizzas:
      </p>
      {pizzasList.map(pizza => {
        const toggle = () => {
          dispatch({
            type: "TOGGLE_FAVORITE_PIZZA",
            payload: pizza.id
          });
        };

        return (
          <ul>
            <li key={pizza.id}>
              <strong>{pizza.name} </strong>
              <button onClick={toggle}>{pizza.heart}</button>

              <p>
                Description: <br />
                {pizza.description}
              </p>

              <p>Number of time bought: {pizza.bought}</p>
            </li>
          </ul>
        );
      })}
      <p>There are {pizzasList.length} pizzas.</p>
    </div>
  );
}
