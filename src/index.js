// React
import React from "react";
import ReactDOM from "react-dom";

// TailWind Style
import "./index.css";

// Container
import * as Containers from "./Containers";

// Redux Modules
import store from "./Redux/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Redux Persist
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
const persistor = persistStore(store);

ReactDOM.render(
  <BrowserRouter basename="/">
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            {/* 테스트 컨테이너 */}
            <Route path="/" element={<Containers.TestContainer />} />
          </Routes>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
