import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitserviceService {


 
  
  constructor(private http: Http) { }

  getUserProfile(username){
      
      return this.http.get('http://api.github.com/users/' + username).map(res=> res.json());
  }

   getRepos(username){
      
      return this.http.get('http://api.github.com/users/' + username + '/repos').map(res=> res.json());
  }
}
