export class Post{
   public content:string;
     constructor(
        public id:number,
        public title:string,
        public body:string,
        public userId:number,
       
     ){
      this.content=''
     }
}