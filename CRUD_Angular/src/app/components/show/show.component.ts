import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {

  Posts: Post[] = [];

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getPost().subscribe(
      (response) => {
        this.Posts = response.map(
          (e) => {
            return {
              id: e.payload.doc.id,
              ...(e.payload.doc.data() as Post)
            };
          }
        );
      }
    );
  }

  deleteRecord = (post) => this.postService.deletePost(post);

}
