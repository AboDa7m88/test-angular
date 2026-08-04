import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostForm } from '../../components/post-form/post-form';
import { BlogService } from '../../services/blog';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [PostForm],
  templateUrl: './add-post.html',
  styleUrl: './add-post.css'
})
export class AddPost {
  constructor(
    private blogService: BlogService,
    private router: Router
  ) {}

  onPostSubmitted(data: { title: string; body: string }): void {
    this.blogService.addPost(data.title, data.body);
    this.router.navigate(['/posts']);
  }
}
