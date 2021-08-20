import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/counterSlice";
import routerQueryReducer from "../store/routerQuery";
export default configureStore({
  reducer: {
    counter: counterReducer,
    router_query: routerQueryReducer,
  },
});
