import React from "react";
import { Provider } from "react-redux";

import store from "./src/state/createStore";

function wrapRootElement({ element }) {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  return <Provider store={store}>{element}</Provider>
}

export default wrapRootElement