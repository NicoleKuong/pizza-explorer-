const initialState = {
  user: {
    name: "Helva",
    favorites: [
      {
        id: 67283,
        name: "Pizza Napoletana",
        description:
          "Neapolitan pizza also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese.",
        bought: 2,
        heart: "♡"
      },
      {
        id: 357311,
        name: "Pizza Bianca",
        description:
          "White pizza, which omits tomato sauce from the equation, often substituting it with pesto or sour cream.",
        bought: 10,
        heart: "♡"
      }
    ]
  },
  pizzas: [
    {
      id: 161235,
      name: "Pizza Margherita",
      description:
        "The typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.",
      bought: 5,
      heart: "♡"
    },
    {
      id: 67283,
      name: "Pizza Napoletana",
      description:
        "Neapolitan pizza also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese.",
      bought: 2,
      heart: "♡"
    },
    {
      id: 357311,
      name: "Pizza Bianca",
      description:
        "White pizza, which omits tomato sauce from the equation, often substituting it with pesto or sour cream.",
      bought: 10,
      heart: "♡"
    }
  ]
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PIZZA": {
      // => Ask yourself: what is action.payload?
      console.log("action now", action.payload);
      return {
        ...state,
        pizzas: [
          ...state.pizzas,
          {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            bought: 0
          }
        ]
      };
    }
    case "TOGGLE_FAVORITE_PIZZA": {
      console.log("what is the action", action.payload);
      console.log("before change", ...state.pizzas);
      const favoritePizza = [...state.pizzas].map(pizza => {
        if (pizza.id === action.payload) {
          return { ...pizza, heart: "♥" };
        } else {
          return pizza;
        }
      });
      console.log("change heart", favoritePizza);
      return {
        ...state,
        pizzas: favoritePizza
      };
    }
    default: {
      return state;
    }
  }
}
