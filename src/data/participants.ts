export interface Participant {
  id: number;
  name: string;
  surname: string;
  date_of_birth: Date;
  role: string[];
}

export const PARTICIPANTS: Participant[] = [
  {
    id: 1,
    name: "Steven",
    surname: "Spielberg",
    date_of_birth: new Date("04/24/1965"),
    role: ["director"],
  },
  {
    id: 2,
    name: "Martin",
    surname: "Scorsese",
    date_of_birth: new Date("01/01/1957"),
    role: ["producer"],
  },
  {
    id: 3,
    name: "Christopher",
    surname: "Nolan",
    date_of_birth: new Date("01/10/1973"),
    role: ["director", "producer"],
  },
  {
    id: 4,
    name: "Leonardo",
    surname: "DiCaprio",
    date_of_birth: new Date("07/23/1976"),
    role: ["actor", "producer"],
  },
  {
    id: 5,
    name: "Dwayne",
    surname: "Johnson",
    date_of_birth: new Date("09/14/1980"),
    role: ["actor"],
  },
  {
    id: 6,
    name: "Scarlett",
    surname: "Johansson",
    date_of_birth: new Date("11/22/1984"),
    role: ["actress"],
  },
];
