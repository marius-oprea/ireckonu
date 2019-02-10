import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { Observable } from 'rxjs';
import { Post } from '../../data-models/post';

@Injectable()
export class DetailsService {
  posts: Post[];

  constructor(private httpService: HttpService) {
    this.posts = [];
  }

  getPosts(): Observable<any> {
    return new Observable((observable) => {
      const url = './assets/posts.json';
      this.httpService.get(url).subscribe(result => {
        this.posts = result.posts as Post[];
        observable.next(this.posts);
      }, error => {
        console.error(error);
        observable.error(error);
      });
    });
  }
}
