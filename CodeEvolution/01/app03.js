const redux = require("redux");
const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";
function orderCakeAction() {
  return {
    type: CAKE_ORDERED,
    quantity: 2,
  };
}

// (IntialState , action ) => newState  :logic of reducer

const IntialState = {
  numnerOfCakes: 5,
};

const reducer = (state = IntialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numnerOfCakes: state.numnerOfCakes - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log(store.getState());

const unsubscribe = store.subscribe(() =>
  console.log( store.getState())
);

store.dispatch(orderCakeAction());
store.dispatch(orderCakeAction());
store.dispatch(orderCakeAction());

unsubscribe();
store.dispatch(orderCakeAction()); // won't log

