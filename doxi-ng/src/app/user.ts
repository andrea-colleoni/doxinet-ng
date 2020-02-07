import { Address } from './address';
import { Company } from './company';
import { Comment } from './comment';

export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;

  comments: Comment[];
}
