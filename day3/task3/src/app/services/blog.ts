import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  private posts: Post[] = [];
  private nextId = 1000;

  constructor(private http: HttpClient) {}

  loadPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`).pipe(
      tap(posts => {
        this.posts = posts;
      })
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/comments?postId=${postId}`);
  }

  getPosts(): Post[] {
    return this.posts;
  }

  getPostById(id: number): Post | undefined {
    return this.posts.find(p => p.id === id);
  }

  addPost(title: string, body: string): Post {
    const newPost: Post = {
      id: this.nextId++,
      userId: 1,
      title,
      body
    };
    this.posts.push(newPost);
    return newPost;
  }

  deletePost(post: Post): void {
    this.posts = this.posts.filter(p => p !== post);
  }
}
