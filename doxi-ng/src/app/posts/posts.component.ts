import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../services/posts.service';
import { faAlignCenter, faUser, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  faAlignCenter = faAlignCenter;
  faUser = faUser;
  faLocationArrow = faLocationArrow;

  constructor(
    private postService: PostsService,
  ) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(p => this.posts = p);
  }

}
