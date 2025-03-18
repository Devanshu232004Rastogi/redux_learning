const redux = require("redux");
const { createStore } = redux;
const immer = require("immer");
const { produce } = immer;

const personInfo = {
  name: "mohan",
  address: {
    street: "01 Taj Ganj",
    city: "Ludhiana",
    region: "Punjab",
  },
};

// action type define
const CITY_UPDATE = "CITY_UPDATE";

// action creator

const cityUpdater = (city) => {
  return {
    type: "CITY_UPDATE",
    payload: city,
  };
};

// // reducer using normal approach
// const reducer = (state = personInfo, action) => {
//   switch (action.type) {
//     case "CITY_UPDATE":
//       return {
//         ...state,
//         address: {
//           ...state.address,
//           city: action.payload,
//         },
//       };
//     default: {
//       return state;
//     }
//   }
// };

// // using immer

const reducer = (state = personInfo, action) => {
  switch (action.type) {
    case "CITY_UPDATE":
      return produce(state, (draft) => {
        draft.address.city = action.payload;
      });

    default: {
      return state;
    }
  }
};
const store = createStore(reducer);
console.log(store.getState());
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(cityUpdater("Jalandhar"));

unsubscribe();
