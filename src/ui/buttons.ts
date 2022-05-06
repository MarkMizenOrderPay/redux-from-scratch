// TODO: code for buttons dispatching actions
import counterStore from "../store/counter";

const minusBtn = document.getElementById("minusBtn")!;
const plusBtn = document.getElementById("plusBtn")!;

minusBtn.addEventListener("click", () =>
  counterStore.dispatch({ type: "decrement" })
);
plusBtn.addEventListener("click", () =>
  counterStore.dispatch({ type: "increment", payload: 2 })
);
