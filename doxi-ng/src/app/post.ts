import { User } from './user';
import { Comment } from './comment';

export class Post {
  userId: number;
  user: User; // questa prop non c'è nel JSON
  id: number;
  title: string;
  body: string;

  comments: Comment[];
}
