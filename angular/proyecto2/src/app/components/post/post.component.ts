import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post = new Post();
  comments:string[] = [];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostServiceService) {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.getPost(params.get('id'));
      }
    });
  }

  ngOnInit() {

  }

  getPost(id: string) {
    this.postService.getPost(id).subscribe(data => {
      console.log(data);
      this.post = data;
    });
  }

 

}
