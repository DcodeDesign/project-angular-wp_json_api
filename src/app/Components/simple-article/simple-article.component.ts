import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ArticlesModel} from '../../Models/Articles.model';
import {ActivatedRoute} from '@angular/router';
import {ArticlesService} from '../../Services/articles.service';

@Component({
  selector: 'app-simple-article',
  templateUrl: './simple-article.component.html',
  styleUrls: ['./simple-article.component.scss']
})
export class SimpleArticleComponent implements OnInit {
  public getArticles$: Subscription;
  article: ArticlesModel;

  constructor(private route: ActivatedRoute, private articlesServices: ArticlesService) {
  }

  ngOnInit(): void {
    this.getArticle();
  }

  public getArticle(): Subscription {
    const idArticles = this.route.snapshot.paramMap.get('id');
    this.getArticles$ = this.articlesServices.getListArticle(idArticles).subscribe(
      values => this.article = values,
      (error) => {
        // console.log(error);
      },
      () => {
        console.log('completed!');
      });
    return this.getArticles$;
  }
}
