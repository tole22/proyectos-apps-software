import { Component, OnInit, Input } from '@angular/core';
import { PostI } from '../../../shared/models/post.interface';
import { PostService } from '../../posts/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  //public posts$: Observable<PostI[]>;

  @Input() post: PostI;
  constructor(private postSvc: PostService) { }

  ngOnInit() {
    //this.posts$ = this.postSvc.getAllPosts();
  }

}
