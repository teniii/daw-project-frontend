import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Route1 from "./routes/route1";
import Route2 from "./routes/route2";
import { ChakraProvider } from "@chakra-ui/react";
import LoginPage from "./routes/login";
import RegisterPage from "./routes/register";
import SignInPage from "./routes/sign-in";
import MoviePage from "./routes/movie";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import NavigationRoutes from "./components/NavigationRoutes";

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <Provider store={store}>
        <Layout>
          <NavigationRoutes />
        </Layout>
      </Provider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
