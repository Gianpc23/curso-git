export class Comment {
    id: string;
    postId:string;
    name:string;
    email:string;
    body:string;
  
    constructor(id='', postId='', name='',email='', body='') {
      this.id = id;
      this.postId = postId
      this.name = name;
      this.email = email;
      this.body = body;
    }
  }