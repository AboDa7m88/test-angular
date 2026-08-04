import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Posts } from './pages/posts/posts';
import { PostDetails } from './pages/post-details/post-details';
import { AddPost } from './pages/add-post/add-post';
import { About } from './pages/about/about';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'posts', component: Posts },
  { path: 'posts/:id', component: PostDetails },
  { path: 'add-post', component: AddPost },
  { path: 'about', component: About },
  { path: '**', component: NotFound }
];
