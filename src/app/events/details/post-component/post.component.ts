import { Component, Input } from '@angular/core';
import { Post } from '../../../data-models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() item: Post;
}
