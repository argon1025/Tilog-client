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

// Toaster
import { Toaster } from "react-hot-toast";

// Redux Persist
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

ReactDOM.render(
  <BrowserRouter basename="/">
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster
            toastOptions={{
              className: "p-4 filter drop-shadow-2xl text-xs w-64 h-14",
              style: {
                borderRadius: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(5px)",
              },
            }}
          />
          <Routes>
            {/* 메인 컨테이너 */}
            <Route path="/" element={<Containers.IntroduceContainer />} />
            {/* 포스트 디테일 뷰어 컨테이너 */}
            <Route
              path="/postviewer"
              element={<Containers.PostDetailContainer />}
            />
            <Route
              path="/test"
              element={<Containers.TestContainer />}
            />
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
