export interface Participant {
  id: number;
  name: string;
  surname: string;
  date_of_birth: Date;
}

export const PARTICIPANTS: Participant[] = [
  {
    id: 1,
    name: "Steven",
    surname: "Spielberg",
    date_of_birth: new Date("04/24/1965"),
  },
  {
    id: 2,
    name: "Martin",
    surname: "Scorsese",
    date_of_birth: new Date("01/01/1957"),
  },
  {
    id: 3,
    name: "Christopher",
    surname: "Nolan",
    date_of_birth: new Date("01/10/1973"),
  },
  {
    id: 4,
    name: "Leonardo",
    surname: "DiCaprio",
    date_of_birth: new Date("07/23/1976"),
  },
  {
    id: 5,
    name: "Dwaine",
    surname: "Johnson",
    date_of_birth: new Date("09/14/1980"),
  },
  {
    id: 6,
    name: "Scarlett",
    surname: "Johansson",
    date_of_birth: new Date("22/11/1984"),
  },
];
