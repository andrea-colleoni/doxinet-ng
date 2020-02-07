import { Post } from './post';
import { User } from './user';

export class Comment {
  postId: number;
  post: Post;
  id: number;
  name: string;
  email: string;
  user: User;
  body: string;
}
