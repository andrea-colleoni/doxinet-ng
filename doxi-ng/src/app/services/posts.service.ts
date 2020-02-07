import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';
import { Observable, concat } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserService } from './user.service';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  users: User[];

  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) {
    this.userService.getUsers().subscribe(u => this.users = u);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      tap(ps => console.log(ps)),
      map(ps => {
        ps.forEach(p => p.user = this.users.find(u => u.id === p.userId));
        return ps;
      }),
      tap(ps => console.log(ps))
    );
  }

}


/*
{
  this.userService.getUser(p.userId).subscribe(u => p.user = u);
}
*/
