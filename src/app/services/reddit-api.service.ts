import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RedditApiService {

  constructor(private httpClient: HttpClient) { }

  getRedditData() {
    return this.httpClient.get(
      'https://www.reddit.com/r/aww/.json'
    );
  }
  
}
