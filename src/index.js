// React
import React from "react";
import ReactDOM from "react-dom";

// TailWind Style
import "./index.css";

// Container
import * as Containers from "./Containers";
import { HelmetComponent } from "./Components";

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

// Helmet
import { HelmetProvider } from "react-helmet-async";

const persistor = persistStore(store);

ReactDOM.render(
  <BrowserRouter basename="/">
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster
            toastOptions={{
              className: "filter drop-shadow-2xl text-xs w-full md:w-64 h-14",
              style: {
                borderRadius: "2px",
                backgroundColor: "rgba(255, 255, 255)",
              },
            }}
          />
          <HelmetProvider>
            <HelmetComponent />
            <Routes>
              {/* 메인 컨테이너 */}
              <Route path="/" element={<Containers.IntroduceContainer />} />
              {/* 포스트 디테일 뷰어 컨테이너 */}
              <Route
                path="/:username/:postid"
                element={<Containers.PostDetailContainer />}
              />
              {/* 포스트 작성기 */}
              <Route
                path="/post/editor"
                element={<Containers.PostCreateContainer />}
              />
              {/* 유저 블로그 */}
              <Route
                path="/:username"
                element={<Containers.UserBlogContainer />}
              />
              {/* 포스트 수정 */}
              <Route
                path="/post/modify/:postid"
                element={<Containers.PostModifyContainer />}
              />
              {/* 로그인 컴펌 */}
              <Route path="/login" element={<Containers.LoginContainer />} />
            </Routes>
          </HelmetProvider>
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
