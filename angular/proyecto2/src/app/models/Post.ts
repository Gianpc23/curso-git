export class Post {
    id: string;
    userId:string;
    title:string;
    body:string;
  
    constructor(id='', userId='', title='', body='') {
      this.id = id;
      this.userId = userId
      this.title = title;
      this.body = body;
    }
  }