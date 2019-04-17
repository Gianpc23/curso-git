import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Post} from '../models/Post';
import {Comment} from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  public uri:string = "https://jsonplaceholder.typicode.com";

  constructor(private http:HttpClient) { }
  
  getPosts(){
    return this.http.get<Post[]>(`${this.uri}/posts`);
  }
  getPost(id:string){
    return this.http.get<Post>(`${this.uri}/posts/${id}`);
  }
  getComments(id:string){
    return this.http.get<Comment[]>(`${this.uri}/comments?postId=${id}`);
  }
}
