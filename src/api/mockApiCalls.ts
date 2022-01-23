import { Movie, MOVIES } from "../data/movies";
import { PARTICIPANTS } from "../data/participants";
import { USERS } from "../data/users";

const MAX_DELAY = 500; //ms

export const getMovie = (movieId: number): Promise<Movie | undefined> => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(MOVIES.find((item) => item.id === movieId));
    }, Math.random() * MAX_DELAY)
  );
};

export const getMovies = async () => {
  setTimeout(() => {}, Math.random() * MAX_DELAY);
  return MOVIES;
};

export const getParticipant = async (movieId: number) => {
  setTimeout(() => {
    return PARTICIPANTS.find((item) => item.id === movieId);
  }, Math.random() * MAX_DELAY);
};

export const getParticipants = async () => {
  setTimeout(() => {
    return PARTICIPANTS;
  }, Math.random() * MAX_DELAY);
};

export const getUser = async (movieId: number) => {
  setTimeout(() => {
    return USERS.find((item) => item.id === movieId);
  }, Math.random() * MAX_DELAY);
};

export const getUsers = async () => {
  setTimeout(() => {
    return USERS;
  }, Math.random() * MAX_DELAY);
};
