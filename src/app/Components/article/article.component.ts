import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {ArticlesService} from '../../Services/articles.service';
import {IArticles} from '../../Interfaces/IArticles';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public articlesId: string;
  public getListArti: Subscription;
  public article: IArticles;
  // private listArticlesLength: any;
  constructor(private route: ActivatedRoute, private articlesServices: ArticlesService) { }

  ngOnInit(): void {
    const id =  this.getParam();
    this.articles(id);
  }

  public getParam(): string {
    return this.articlesId = this.route.snapshot.paramMap.get('id');
  }

  public articles(id: string): Subscription {
    this.getListArti = this.articlesServices.getListArticle(id).subscribe(
      values => {
        this.article = values;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('completed !');

      });
    return this.getListArti;
  }
}
