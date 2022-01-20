export type UserRole = "admin" | "user";

export interface User {
  id: number;
  name: string;
  surname: string;
  username: string;
  email: string;
  role: UserRole;
}

export const USERS: User[] = [
  {
    id: 1,
    name: "Steve",
    surname: "Jobs",
    username: "jsteve",
    email: "js@apple.com",
    role: "admin",
  },
  {
    id: 2,
    name: "Mark",
    surname: "Zuckerberg",
    username: "zmark",
    email: "zm@facebook.com",
    role: "user",
  },
  {
    id: 3,
    name: "Bill",
    surname: "Gates",
    username: "GBill",
    email: "gb@microsoft.com",
    role: "admin",
  },
  {
    id: 4,
    name: "Jeff",
    surname: "Bezos",
    username: "BJeff",
    email: "bj@amazon.com",
    role: "user",
  },
];
