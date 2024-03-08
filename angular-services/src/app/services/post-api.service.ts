import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post.model';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {
   baseUrl=`https://jsonplaceholder.typicode.com`
  constructor(private httpclient:HttpClient) { }

  // get All Post
   getAllPost(){
    return this.httpclient.get<Post[]>(`${this.baseUrl}/posts`).pipe(
      map((post)=>{
     let newPost= post.map(p=>({...p,content:p.body}))
      return newPost
    }),
    catchError((error)=>{
      throw error
    })
    )
   }
  // get Single Post
  getSinglePost(postId:number){
    return this.httpclient.get<Post>(`${this.baseUrl}/posts/${postId}`).pipe(map((post)=>{
      // let newPost=new Post(post.id,post.title,post.body,post.userId);
      // newPost.content=post.body
      post.content=post.body
        return post
    }),
    catchError((error)=>{
      console.log(error)
      throw error;
    })
    )
  }

  // all post related api calls
  createPost(post:Post){
    let header=new HttpHeaders()
    header.set("Content-Type","application/json")
    return this.httpclient.post<Post>(`${this.baseUrl}/posts`,post,{
      headers:header
    })
  }
}
