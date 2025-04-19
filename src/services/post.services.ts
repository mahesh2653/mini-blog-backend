import PostModel from "../model/post.model";
import { IPost } from "../types/post.type";

export default class PostServices {
  static createPost = async (data: IPost) => {
    const post = await PostModel.create(data);
    return post;
  };

  static getAllPosts = async () => {
    const posts = await PostModel.find().populate(
      "author",
      "username name email -_id"
    );
    return posts;
  };

  static getPostById = async (id: string) => {
    const post = await PostModel.findById(id).populate(
      "author",
      "username name email"
    );
    return post;
  };

  static getPostByUserId = async (userId: string) => {
    const post = await PostModel.find({ author: userId }).populate("author");
    return post;
  };
}
