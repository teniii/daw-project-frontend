import Route1 from "../routes/route1";
import Route2 from "../routes/route2";
import RegisterPage from "../routes/register";
import SignInPage from "../routes/sign-in";
import MoviePage from "../routes/movie";
import { Routes, Route, Navigate } from "react-router-dom";
import App from "./app/App";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../store/authSlice";
import ProfilePage from "../routes/profile";
import EditProfilePage from "../routes/editProfile";
import ParticipantPage from "../routes/participant";

const NavigationRoutes: React.FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const privateRoute = (element: React.ReactNode) =>
    isLoggedIn ? element : <Navigate to={"/sign-in"} />;

  return (
    <Routes>
      <Route path="/" element={privateRoute(<App />)} />
      <Route path="sign-in" element={<SignInPage />} />
      <Route path="route1" element={<Route1 />} />
      <Route path="route2" element={<Route2 />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="movie" element={privateRoute(<MoviePage />)}>
        <Route path=":movieId" element={privateRoute(<MoviePage />)} />
      </Route>
      <Route path="profile" element={privateRoute(<ProfilePage />)} />
      <Route path="profile/edit" element={privateRoute(<EditProfilePage />)} />
      <Route path="participant" element={privateRoute(<ParticipantPage />)} />
    </Routes>
  );
};

export default NavigationRoutes;
