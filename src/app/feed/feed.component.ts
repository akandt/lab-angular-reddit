import { Component, OnInit } from '@angular/core';
import { RedditApiService } from '../services/reddit-api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts;

  constructor(private redditApiService: RedditApiService) { }

  ngOnInit(): void {
    this.getRedditData();
  }

  getRedditData(){
    this.redditApiService.getRedditData().subscribe((response: any) => {
      this.posts = response.data.children;
    });
  }

}
