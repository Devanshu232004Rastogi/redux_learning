const redux = require("redux");
const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
function orderCakeAction() {
  return {
    type: CAKE_ORDERED,
    payload: 2,
  };
}
function cakeRestocking(qnt ){
    return{
        type: "CAKE_RESTOCKED",
        payload: qnt
    }
}
// (IntialState , action ) => newState  :logic of reducer

const IntialState = {
  numberOfCakes: 10,
};

const reducer = (state = IntialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    case CAKE_RESTOCKED:
        return{
            ...state,
            numberOfCakes : state.numberOfCakes + action.payload,
        }
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
store.dispatch(cakeRestocking(3));

unsubscribe();
// store.dispatch(orderCakeAction()); // won't log

 