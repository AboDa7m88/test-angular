import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './post-card.html',
  styleUrl: './post-card.css'
})
export class PostCard implements OnChanges, OnDestroy {
  @Input({ required: true }) post!: Post;
  @Output() delete = new EventEmitter<void>();

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('PostCard: post input changed ->', changes['post']?.currentValue);
  }

  ngOnDestroy(): void {
    console.log('PostCard destroyed:', this.post?.title);
  }

  get isLong(): boolean {
    return this.post.body.length > 150;
  }

  get shortBody(): string {
    return this.post.body.length > 100 ? this.post.body.slice(0, 100) + '...' : this.post.body;
  }

  viewDetails(): void {
    this.router.navigate(['/posts', this.post.id]);
  }
}
