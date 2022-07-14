import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from "@angular/common/http";
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl= "https://jsonplaceholder.typicode.com";

  httpOptions = {
    headers: new HttpHeaders({
      'content-type':"application/json"
    })
  }

  constructor(private httpClient:HttpClient) { }

  getPost(): Observable<any>{
    return this.httpClient.get(this.apiUrl+"/posts/")
    .pipe(
      catchError(this.errorHandler)
    )
  }

  createNewPost(post:any):Observable<any>{
    return this.httpClient.post(this.apiUrl+"/posts/",post,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deletePost(id:number=1){
    return this.httpClient.delete(this.apiUrl+"/posts/"+id,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  fetchSingle(id:number):Observable<any>{
    return this.httpClient.get(this.apiUrl+"/posts/"+id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  updatePost(id:number,post:any):Observable<any>{
    return this.httpClient.put(this.apiUrl+"/posts/"+id,post,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any){
    let erroMessage = "The following error code: "+error.status+" "+error.message;
    return throwError(erroMessage);
  }
}
