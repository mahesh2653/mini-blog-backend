import { Router } from "express";
import userRouter from "./user.route";
import postRouter from "./post.route";

const routerV1 = Router();

const routes = [
  {
    name: "/users",
    router: userRouter,
  },
  {
    name: "/posts",
    router: postRouter,
  },
];

routes.forEach((route) => {
  routerV1.use(route.name, route.router);
});

export default routerV1;
