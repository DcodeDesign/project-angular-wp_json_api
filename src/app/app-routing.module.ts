import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlesComponent} from './Components/articles/articles.component';
import {NotFoundComponent} from './Components/not-found/not-found.component';
import {SimpleArticleComponent} from './Components/simple-article/simple-article.component';

const routes: Routes = [
  { path: 'article/:id', component: SimpleArticleComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: '',   redirectTo: '/articles', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
