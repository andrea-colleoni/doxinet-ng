import { User } from './user';

export class Post {
  userId: number;
  user: User; // questa prop non c'è nel JSON
  id: number;
  title: string;
  body: string;
}
