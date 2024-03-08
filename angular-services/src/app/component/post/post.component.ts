import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostApiService } from 'src/app/services/post-api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
      // allPostUrl=`https://jsonplaceholder.typicode.com/posts`
      // singlePostUrl=`https://jsonplaceholder.typicode.com/posts/1`
      posts:Post[]|undefined
      post:Post|undefined
      loading=false
      constructor(private  http:HttpClient,private postApi:PostApiService){
        
      }
      getAllPostLocal(){
        this.loading=true
        this.postApi.getAllPost().subscribe({
          next:(response)=>{
            console.log(response)
            this.posts=response
          },
          error:(error)=>{
            console.log(error)
            this.loading=false
          },
          complete:()=>{
            console.log("Request Completed")
            this.loading=false
          }
        })
      }
      getSinglePostLocal(){
        this.loading=true
        this.postApi.getSinglePost(1).subscribe({
          next:(data)=>{
            console.log(data)
            this.post=data

          },
          error:(error)=>{
              console.log(error)
              this.loading=false
          },
          complete:()=>{
            console.log("Completed single request")
            this.loading=false
          }
        })
      }
      createPost(){
        let post=new Post(0,"This is title","This is body",3);
        this.postApi.createPost(post).subscribe({
          next:(data)=>{
            console.log(data)
          },
          error:(error)=>{
            console.log(error)
          },
          complete:()=>{
            console.log("Creation Completed")
          }
        })
      }
      // getAllPost(){
      //   this.loading=true
      //   console.log("Going for get request")
      //   this.http.get<Post[]>(this.allPostUrl).subscribe({
      //     next:(response)=>{
      //       console.log(response)
      //       this.posts=response
      //     },
      //     error:(error)=>{
      //       console.log(error)
      //       this.loading=false
      //     },
      //     complete:()=>{
      //       console.log("Request Completed")
      //       this.loading=false
      //     }
      //   })
      // }
      // GetSinglePost(){
      //   this.loading=true
      //   const  header=new HttpHeaders()
      //   header.append("Content-Type","application/json")
      //   const params=new HttpParams()
      //   params.append("title","title")
      //   params.append("sortBy","title")
      //   this.http.get<Post>(this.singlePostUrl,{
      //     headers:header,
      //     params:params,
      //   //  responseType:'json'
      //   }).subscribe({
      //     next:(data)=>{
      //       console.log(data)
      //       this.post=data

      //     },
      //     error:(error)=>{
      //         console.log(error)
      //         this.loading=false
      //     },
      //     complete:()=>{
      //       console.log("Completed single rrequest")
      //       this.loading=false
      //     }
          
      //   })
      // }
}
