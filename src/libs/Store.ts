export interface ActionBase {
  type: string;
  payload?: any;
}

// reducer function for the store
export type Reducer<S, A extends ActionBase> = (state: S, action: A) => S;

// subscription function for the store
export type Subscription<S> = (state: S) => void;

// unsubscriber function subscriptions to the store
export type Unsubscriber = () => void;

/**
 * Redux store implementation
 *
 * Implements a basic action / reducer / state management pattern.
 * Doesn't include middleware, optimisations, etc.
 */
export default class Store<State extends object, Action extends ActionBase> {
  private state: State;
  private reducer: Reducer<State, Action>;
  private subscriptions: { [key: symbol]: Subscription<State> } = {};

  constructor(initialState: State, reducer: Reducer<State, Action>) {
    this.state = initialState;
    this.reducer = reducer;
  }

  /** Imperative way of getting current store values */
  getState(): State {
    return this.state;
  }

  /** Dispatch actions to the store */
  dispatch(action: Action): void {
    // update state
    const newState = this.reducer(this.state, action);
    this.state = newState;
    // Reflect used to loop through symbols
    Reflect.ownKeys(this.subscriptions).forEach((key) => {
      this.subscriptions[key as symbol](this.state);
    });
  }

  /** Subscribe to changes to the store */
  subscribe(callback: Subscription<State>): Unsubscriber {
    const id = Symbol();
    this.subscriptions[id] = callback;
    callback(this.state);
    return () => {
      delete this.subscriptions[id];
    };
  }
}
