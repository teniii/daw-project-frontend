export interface Movie {
  id: number;
  title: string;
  releaseDate: Date;
}

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: "Kung Fu Panda",
    releaseDate: new Date("12/24/2010"),
  },
  {
    id: 2,
    title: "X-Men",
    releaseDate: new Date("05/11/2004"),
  },
  {
    id: 3,
    title: "Mr. and Ms. Smith",
    releaseDate: new Date("08/05/2005"),
  },
  {
    id: 4,
    title: "Brother Bear",
    releaseDate: new Date("11/01/2003"),
  },
  {
    id: 5,
    title: "Lucy",
    releaseDate: new Date("29/04/2014"),
  },
  {
    id: 6,
    title: "Equalizer",
    releaseDate: new Date("11/11/2011"),
  },
];
