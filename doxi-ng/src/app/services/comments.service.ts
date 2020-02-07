import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../comment';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private http: HttpClient,
  ) { }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  }

  getCommentsByEmail(email: string): Observable<Comment[]> {
    return this.getComments().pipe(
      map(c => c.filter(cm => cm.email === email))
    );
  }
}
