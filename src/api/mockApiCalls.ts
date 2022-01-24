import { Movie, MOVIES } from "../data/movies";
import { Participant, PARTICIPANTS } from "../data/participants";
import { User, USERS } from "../data/users";

const MAX_DELAY = 500; //ms

export const getMovie = (movieId: number): Promise<Movie | undefined> => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(MOVIES.find((item) => item.id === movieId));
    }, Math.random() * MAX_DELAY)
  );
};

export const getMovies = (): Promise<Movie[] | undefined> => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(MOVIES);
    }, Math.random() * MAX_DELAY)
  );
};

export const getParticipant = (
  id: number
): Promise<Participant | undefined> => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(PARTICIPANTS.find((item) => item.id === id));
    }, Math.random() * MAX_DELAY)
  );
};

export const getParticipants = (): Promise<Participant[] | undefined> => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(PARTICIPANTS);
    }, Math.random() * MAX_DELAY)
  );
};

export const getUser = (userId: number): Promise<User | undefined> => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(USERS.find((item) => item.id === userId));
    }, Math.random() * MAX_DELAY)
  );
};

export const getUsers = (): Promise<User[] | undefined> => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(USERS);
    }, Math.random() * MAX_DELAY)
  );
};
