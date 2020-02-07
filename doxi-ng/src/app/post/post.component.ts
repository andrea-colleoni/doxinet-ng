import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
  ) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      const id = +url[1];
      this.postService.getPost(id).subscribe(p => {
        this.post = p;
      });
    });
  }

}
