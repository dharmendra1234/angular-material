


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import Feed from './feed';
import { Users } from './users';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ItuneAppleService {

  private heroesUrl = 'api/v1/us/apple-music/coming-soon/all/100/explicit.json';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET heroes from the server */
  getHeroes (): Observable<Feed[]> {
    return this.http.get<Feed[]>(this.heroesUrl)
      .pipe(  
      );
  }


  getUsers () {
    return this.http.get('/api/posts').subscribe(user=>{
console.log("tewtwet"+user);
    })
     
  }
}