const redux = require("redux");
const { createLogger } = require("redux-logger");
const logger = createLogger();



const { createStore, bindActionCreators, combineReducers  , applyMiddleware} = redux;
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";
function orderCakeAction() {
  return {
    type: CAKE_ORDERED,
    // payload: 2,
  };
}
function cakeRestocking(qnt) {
  return {
    type: "CAKE_RESTOCKED",
    payload: qnt,
  };
}
function orderIceCreamAction() {
  return {
    type: ICECREAM_ORDERED,
    // payload: 2,
  };
}
function IceCreamRestocking(qnt) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qnt,
  };
}
// (IntialState , action ) => newState  :logic of reducer

const IntialState1 = {
  numberOfCakes: 15,
};
const IntialState2 = {
  numberOfIceCream: 10,
};

const cakeReducer = (state = IntialState1, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };

      
    default:
      return state;
  }
};
const iceCreamReducer = (state = IntialState2, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
    cakeReducer,
    iceCreamReducer
})
const store = createStore(rootReducer , applyMiddleware(logger));
console.log(store.getState());

const unsubscribe = store.subscribe(()=>{});

const actions = bindActionCreators(
  { orderCakeAction, cakeRestocking, IceCreamRestocking, orderIceCreamAction },
  store.dispatch
);

actions.orderCakeAction();
actions.orderCakeAction();
actions.orderCakeAction();
actions.cakeRestocking(3);
actions.orderIceCreamAction();
actions.orderIceCreamAction();
actions.orderIceCreamAction();
actions.orderIceCreamAction();
actions.orderIceCreamAction();
actions.IceCreamRestocking(5);

unsubscribe();
// store.dispatch(orderCakeAction()); // won't log
