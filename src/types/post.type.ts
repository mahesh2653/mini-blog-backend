import { Schema } from "mongoose";

export interface IPost {
  title: string;
  content: string;
  tags: string[];
  author: Schema.Types.ObjectId;
}
