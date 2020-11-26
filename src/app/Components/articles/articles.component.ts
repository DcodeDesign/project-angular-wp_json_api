import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ArticlesService} from '../../Services/articles.service';
import {ArticlesModel} from '../../Models/Articles.model';
import {IArticles} from '../../Interfaces/IArticles';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  public isCharged = false;
  // private inter: NodeJS.Timeout;
  Article$: Subscription;
  public listArticles: ArticlesModel[];
  public listArticlesLength: number;

  constructor(private articlesServices: ArticlesService) {
  }

  ngOnInit(): void {
    this.articles();
  }

  public articles(): Subscription {
    this.Article$ = this.articlesServices.getListArticles().subscribe(
      values => {
        this.listArticles = values;
        this.listArticlesLength = values.length;
        this.isCharged = true;
      },
      (error) => {
        console.log(error);
      },
      () => {
        if (environment.production !== true) {
          console.log('completed !');
        }
      });
    return this.Article$;
  }

  ngOnDestroy(): void {
    // clearInterval(this.inter);
    this.Article$.unsubscribe();
  }

}
