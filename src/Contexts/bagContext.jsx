import React, { createContext, useEffect, useReducer } from "react";

export const BagContext = createContext();

const bagReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      // Check if the product is already in the bag
      console.log(action.payload);
      let exist = false;
      state.items.map((item, i) => {
        if (item._id === action.payload._id) {
          exist = true;
          return;
        }
      });
      if (exist) {
        return {
          ...state,
          items: state.items.map((item) =>
            item._id === action.payload._id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, qty: 1 }],
        };
      }
    case "SET_BAG":
      return {
        ...state,
        items: action.payload,
      };

    case "INCREASE_QTY":
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    case "DECREASE_QTY":
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload ? { ...item, qty: item.qty - 1 } : item
        ),
      };

    case "REMOVE_PRODUCT":
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};

export const BagContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bagReducer, {
    items: JSON.parse(localStorage.getItem("bag")) || [],
  });
  useEffect(() => {
    const bag = localStorage.getItem("bag");
    if (bag) {
      dispatch({ type: "SET_BAG", payload: JSON.parse(bag) });
    }
  }, []);
  useEffect(() => {
    //  calculate total price of products in bag

    localStorage.setItem("bag", JSON.stringify(state.items));
  }, [state.items]);
  console.log(state);
  return (
    <BagContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BagContext.Provider>
  );
};
