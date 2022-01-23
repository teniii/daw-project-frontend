import Route1 from "../routes/route1";
import Route2 from "../routes/route2";
import LoginPage from "../routes/login";
import RegisterPage from "../routes/register";
import SignInPage from "../routes/sign-in";
import MoviePage from "../routes/movie";
import PrivateRoute from "../components/PrivateRoute";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./app/App";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../store/authSlice";

const NavigationRoutes: React.FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const privateRoute = (element: React.ReactNode) =>
    isLoggedIn ? element : <Navigate to={"/sign-in"} />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={privateRoute(<App />)} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="route1" element={<Route1 />} />
        <Route path="route2" element={<Route2 />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route
          path={`movie/:movieId`}
          element={privateRoute(<MoviePage movieId={1} />)}
        />
        <Route path={`movie`} element={privateRoute(<MoviePage />)} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavigationRoutes;