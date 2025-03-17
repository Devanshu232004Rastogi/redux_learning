const CAKE_ORDERED = CAKE_ORDERED;
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
git add . && \
> git commit -m"app->action->reducer->stateChange " && \
> git push