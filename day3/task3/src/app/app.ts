import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet, RouterLink, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private router = inject(Router);

  currentUrl = signal(this.router.url);

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.currentUrl.set((event as NavigationEnd).urlAfterRedirects);
      });
  }

  isActive(path: string): boolean {
    if (path === '/') {
      return this.currentUrl() === '/';
    }
    return this.currentUrl().startsWith(path);
  }
}
