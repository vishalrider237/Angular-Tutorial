import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { EMPTY, Observable, map } from 'rxjs';
export class OneInterceptor implements HttpInterceptor{
      
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log("Before sending the request")
        // req modify
        // req:immutable
       // console.log(req.headers.get("Content-Type"))
       // usefull in authentication
    //    const notLoggedIn=true
    //    if(notLoggedIn){
    //     return EMPTY;
    //    }
       const token="234dffg4rffe33ed"
       req= req.clone({
            headers:req.headers.set("Content-Type","application/json")
        })
        req= req.clone({
            headers:req.headers.set("Authorization",`Bearer ${token}`)
        })
        // modifyinng url
        // req=req.clone({
        //     url:"new Url"
        // })
        console.log(req.headers.get("Content-Type"))
        console.log(req.headers.get("Authorization"))
        return next.handle(req).pipe(map((data)=>{
           // console.log("Data from map operator")
           if(data instanceof HttpResponse){
            console.log("Response Recieved");
        //   const ob=  data.clone<any>({
        //         body:{}
        //     })
        //     return ob;
            }
            return data
        }))
    }
}