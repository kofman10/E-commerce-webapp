 import { configureStore, combineReducers } from "@reduxjs/toolkit";
 import cartReducer from "./cartRedux";
// import userReducer from "./userRedux";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export let persistor = persistStore(store);


export default configureStore( {
    reducer: {
        cart: cartReducer
    }
})

// The store is a “container” (really a JavaScript object) that holds the application state, and the only way the state can change is through actions dispatched to the store. Redux allows individual components connect to the store and apply changes to it by dispatching actions.