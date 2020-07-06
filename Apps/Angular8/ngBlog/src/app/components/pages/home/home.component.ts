import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostI } from 'src/app/shared/models/post.interface';
import { PostService } from '../../posts/post.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts$: Observable<PostI[]>;

  constructor(private postSvc: PostService) { }

  ngOnInit(){
    this.posts$ = this.postSvc.getAllPosts();
  }
 

}
