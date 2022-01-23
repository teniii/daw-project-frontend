import React, { useState, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { Link as RouterLink } from "react-router-dom";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/react";
import MyBox from "../components/MyBox";
import { Movie } from "../data/movies";
import { getMovie, getMovies } from "../api/mockApiCalls";

interface MoviePageProps {
  movieId?: number;
}

const MoviePage: React.FC<MoviePageProps> = ({ movieId }) => {
  const [movies, setMovies] = useState<Movie[]>();
  const [error, setError] = useState(false);
  // const
  useEffect(() => {
    movieId
      ? getMovie(movieId)
          .then((result) => {
            if (result) {
              setMovies([result]);
            } else {
              setError(true);
            }
          })
          .catch((err) =>
            console.log(" != Error while fetching the movie: ", err)
          )
      : getMovies()
          .then((result) => setMovies(result))
          .catch((err) =>
            console.log(" != Error while fetching the movies: ", err)
          );
  }, [movieId]);

  if (error) {
    return (
      <MyBox alignItems="center" justifyContent="center">
        <Heading> Something went wrong </Heading>
      </MyBox>
    );
  }

  if (movies?.length === 0) {
    return (
      <MyBox alignItems="center" justifyContent="center">
        <Heading> 404 Not found </Heading>
      </MyBox>
    );
  }

  const renderMovie = (movie: Movie) => (
    <Flex
      direction="column"
      bg="yellow"
      //   minWidth="25rem"
      alignSelf="center"
      alignItems="center"
      key={movie.id + "-" + movie.title}
    >
      <Heading alignSelf="center" marginBottom="1rem">
        MOVIE
      </Heading>
      <Flex>
        <Text alignSelf="start" marginRight="0.5rem">
          Title:
        </Text>

        <Text
          marginBottom="0.8rem"
          placeholder="First Name"
          children={movie.title}
        />
      </Flex>
      <Flex>
        <Text alignSelf="start" marginRight="0.5rem">
          Release date:
        </Text>
        <Text
          marginBottom="0.8rem"
          placeholder="First Name"
          children={movie.releaseDate.toLocaleDateString()}
        />
      </Flex>
      <RouterLink to={"/"}>
        <Button
          marginY="0.5rem"
          width="30%"
          minWidth="6rem"
          value="Register"
          bg="green.200"
          alignSelf="center"
        >
          Go back
        </Button>
      </RouterLink>
    </Flex>
  );

  return (
    <MyBox alignSelf="center">
      {movies?.map((movie) => renderMovie(movie))}
    </MyBox>
  );
};

export default MoviePage;
