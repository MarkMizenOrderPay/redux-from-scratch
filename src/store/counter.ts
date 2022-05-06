import Store from "../libs/Store";

// Shape of the state in the counter store
interface CounterState {
  count: number;
}

// Actions that we want to be able to dispatch
// Often these aren't explicitly defined as a type like this. Most libararies will automatically generate these for you.
type Actions =
  | { type: "increment"; payload?: number }
  | { type: "decrement"; payload?: number };

// Our initial state
const initialState = { count: 22 };

// Reducer function for the store
const reducer = (state: CounterState, action: Actions) => {
  // Switch based on the action type
  switch (action.type) {
    case "increment":
      return { count: state.count + (action?.payload || 1) };
    case "decrement":
      return { count: state.count - (action?.payload || 1) };
    default:
      return state;
  }
};

// Instantiate the store
const counterStore = new Store(initialState, reducer);

// Export the store instance
export default counterStore;
