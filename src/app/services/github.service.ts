import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const GITHUB_API_BASE:string = 'http://api.github.com';

@Injectable()
export class GithubService {
  private username:string; //Github Username

  constructor(private _http:Http) { 
    this.username = 'bdolly';
  }

  /**
   * Gets the User Profile from the Github API
   */
  getUser(){
    return this._http
          .get(`${GITHUB_API_BASE}/users/${this.username}`)
          .map(res=>res.json());
  }

  /**
   * Gets the Users Repos from the Github API
   */
  getRepos(){
    return this._http
          .get(`${GITHUB_API_BASE}/users/${this.username}/repos`)
          .map(res=>res.json());
  }


}
