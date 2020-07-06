import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { PostI } from 'src/app/shared/models/post.interface';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  private image: any;

  constructor(private postSvc: PostService) { }

  public newPostForm = new FormGroup({
    titlePost: new FormControl('', Validators.required),
    contentPost: new FormControl('', Validators.required),
    tagsPost: new FormControl('', Validators.required),
    imagePost: new FormControl('', Validators.required)
  });

  ngOnInit() {
  }

  addNewPost(data: PostI) {
    console.log('New Post', data);
    this.postSvc.preAddAndUpdatePost(data, this.image);
  }

  handleImage(event: any):void {
    this.image = event.target.files[0];
  }

}
