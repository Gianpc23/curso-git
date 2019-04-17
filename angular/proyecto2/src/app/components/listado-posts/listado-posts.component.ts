import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/services/post-service.service';
import { Post } from '../../models/Post'
import { Comment } from '../../models/Comment';
import { strictEqual } from 'assert';
@Component({
  selector: 'app-listado-posts',
  templateUrl: './listado-posts.component.html',
  styleUrls: ['./listado-posts.component.css']
})
export class ListadoPostsComponent implements OnInit {

  posts: Post[];
  comments: Comment[] = [];
  hayComments = false;
  constructor(private listadoService: PostServiceService) { }

  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    this.listadoService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }
  getComments(id: string) {
    if (this.comments.length === 0) {
      this.listadoService.getComments(id).subscribe((data) => {
        console.log(data);
        this.comments = data;
        this.hayComments = true;
      });
    } else {
      this.hayComments = !this.hayComments;
    }

  }
}
