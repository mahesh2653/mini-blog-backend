import e, { Request, Response, NextFunction } from "express";
import PostServices from "../services/post.services";
import successResponse from "../utils/successResponse";

export default class PostController {
  static createPost = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const post = await PostServices.createPost(req.body);
      res.status(201).json(post);
    } catch (error) {
      next(error);
    }
  };

  static getAllPosts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const posts = await PostServices.getAllPosts();
      res.status(200).json(posts);
    } catch (error) {
      next(error);
    }
  };

  static getPostByUserId = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.params.id as string;
      const posts = await PostServices.getPostByUserId(userId);
      res.json(successResponse(200, "All Post get successfully", posts));
    } catch (error) {
      next(error);
    }
  };
}
