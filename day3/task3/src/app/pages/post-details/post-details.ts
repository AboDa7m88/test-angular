import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [],
  templateUrl: './post-details.html',
  styleUrl: './post-details.css'
})
export class PostDetails implements OnInit, OnDestroy {
  post: Post | undefined;
  author: User | undefined;
  comments: Comment[] = [];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Looking for post id:', id);
    console.log('Available posts in service:', this.blogService.getPosts());

    this.post = this.blogService.getPostById(id);
    console.log('Found post:', this.post);

    if (this.post) {
      this.blogService.getUsers().subscribe(users => {
        this.author = users.find(u => u.id === this.post!.userId);
        this.loading = false;
      });

      this.blogService.getComments(id).subscribe(comments => {
        this.comments = comments;
      });
    } else {
      this.loading = false;
    }
  }

  ngOnDestroy(): void {
    console.log('PostDetails destroyed, was viewing post id:', this.post?.id);
  }
}
