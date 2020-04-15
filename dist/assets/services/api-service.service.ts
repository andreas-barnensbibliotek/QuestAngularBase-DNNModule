import { AllreadyExistError } from '../AllreadyExistError';
import { NotFoundError } from '../NotFoundError';
import { AppError } from '../appErrors';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
 
  constructor(private url:string, private http:HttpClient) { 
  }

  getPosts(url?){    
    console.log("kommer hit " + url);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    if(url) this.url =url;
      return this.http.get(this.url,httpOptions)
    .pipe(      
      retry(4),// använd retry för att göra om reqesten x gånger
      catchError(this.HandleThisClassErrors)
    );
  } 

  doPost(url:string, postobj){    
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post(url,JSON.stringify(postobj),httpOptions)
    .pipe(
      catchError(this.HandleThisClassErrors)
    );   
  }

  deletePost(id){    
    return this.http.delete(this.url +'/'+ id)
    .pipe(     
      catchError(this.HandleThisClassErrors)
    );
  }

  
  
  private HandleThisClassErrors(error: Response){
    
    if(error.status === 400){
      return Observable.throw(new AllreadyExistError(error.json()));
    }

    if(error.status === 404){
      return Observable.throw(new NotFoundError());
    }
    
    return Observable.throw(new AppError(error));
  }
}
