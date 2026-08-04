import { Component, OnInit, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostCard } from '../../components/post-card/post-card';
import { BlogService } from '../../services/blog';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostCard, FormsModule],
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts implements OnInit {
  posts = signal<Post[]>([]);
  users: User[] = [];
  loading = true;
  searchTerm = signal('');
  selectedUserId = signal<number | null>(null);

  totalPosts = computed(() => this.posts().length);

  filteredPosts = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const userId = this.selectedUserId();

    return this.posts().filter(p => {
      const matchesTitle = p.title.toLowerCase().includes(term);
      const matchesUser = userId === null || p.userId === userId;
      return matchesTitle && matchesUser;
    });
  });

  filteredCount = computed(() => this.filteredPosts().length);

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.loadPosts().subscribe(() => {
      this.posts.set(this.blogService.getPosts());
      this.loading = false;
    });

    this.blogService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  onSearchChange(value: string): void {
    this.searchTerm.set(value);
  }

  onUserFilterChange(value: string): void {
    this.selectedUserId.set(value ? Number(value) : null);
  }

  onDeletePost(post: Post): void {
    this.blogService.deletePost(post);
    this.posts.set(this.blogService.getPosts());
  }
}
