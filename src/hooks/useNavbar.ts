import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { reduxLogout } from "../store/authSlice";

const MENU_ENTRIES = [
  "Movies",
  "Participants",
  "My Movies",
  "Profile",
  "Logout",
];

interface MenuItem {
  title: string;
  onPress: () => void;
}

export const useNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onMoviesPress = () => {
    navigate("/movie");
  };

  const moviesItem: MenuItem = {
    title: MENU_ENTRIES[0],
    onPress: onMoviesPress,
  };

  const participantsItem: MenuItem = {
    title: MENU_ENTRIES[1],
    onPress: () => navigate("/participant"),
  };

  const myMoviesItem: MenuItem = {
    title: MENU_ENTRIES[2],
    onPress: () => navigate("/my_movies"),
  };

  const profileItem: MenuItem = {
    title: MENU_ENTRIES[3],
    onPress: () => navigate("/profile"),
  };

  const logoutItem: MenuItem = {
    title: MENU_ENTRIES[4],
    onPress: () => {
      dispatch(reduxLogout());
      navigate("/sign-in");
    },
  };

  return {
    menuItems: [
      moviesItem,
      participantsItem,
      myMoviesItem,
      profileItem,
      logoutItem,
    ],
  };
};
