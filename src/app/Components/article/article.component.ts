import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {ArticlesService} from '../../Services/articles.service';
import {IArticles} from '../../Interfaces/IArticles';
import {ArticlesModel} from '../../Models/Articles.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public articlesId: string;
  public getListArti: Subscription;
  public arti: ArticlesModel[];
  // private listArticlesLength: any;
  constructor(private route: ActivatedRoute, private articlesServices: ArticlesService) { }

  ngOnInit(): void {
    this.articles();
  }

   public getParam(): string {
    return this.articlesId = this.route.snapshot.paramMap.get('id');
  }

  public articles(): Subscription {
    const id =  this.getParam();
    this.getListArti = this.articlesServices.getListArticle(id).subscribe(
      values  => {
        this.arti = values;
        console.log(values);
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
