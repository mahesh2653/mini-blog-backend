import { Router } from "express";
import PostController from "../controller/post.controller";
import authMiddleWare from "../middleware/authMiddleware";

const postRouter = Router();

postRouter.use(authMiddleWare);

postRouter
  .route("/")
  .post(PostController.createPost)
  .get(PostController.getAllPosts);

postRouter.get("/:id", PostController.getPostByUserId);

export default postRouter;
