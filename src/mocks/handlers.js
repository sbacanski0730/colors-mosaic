import { http } from "msw";

const handlers = [
  http.post("/login", (args) => {
    console.log(" I am here");
    console.log(args);
  }),
];

export default handlers;
