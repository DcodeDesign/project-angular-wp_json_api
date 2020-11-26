import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ArticlesService} from '../../Services/articles.service';
import {ArticlesModel} from '../../Models/Articles.model';
import {IArticles} from '../../Interfaces/IArticles';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  public listArticles: ArticlesModel[];
  public listArticlesV2: IArticles[];
  public listArticlesLength: number;
  public test = false;
  public name: string;
  public sub: Subscription;
  @Output() public isCharged = new EventEmitter<boolean>();
  // @ts-ignore
  private inter: NodeJS.Timeout;
  private getListArti: Subscription;

  constructor(private articlesServices: ArticlesService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.articles();
    this.articles();
    this.getParam();
  }

  // Get Articles based on model
  public articles(): Subscription {
    this.getListArti = this.articlesServices.getListArticles().subscribe(
      values => {
        this.listArticles = values;
        this.charged(true);
        this.listArticlesLength = values.length;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('completed !');
        this.test = true;
      });
    return this.getListArti;
  }

  // Get Articles based on model
  public articlesV2(): Subscription {
    /*return this.articlesServices.getListContactV2().subscribe(
      values => {
        this.listArticlesV2 = values;
        this.charged(true);
        this.listArticlesLength = values.length;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('completed !');
        this.test = true;
      });*/
    this.inter = setInterval(() => {
      this.sub = this.articlesServices.getListContactV2().subscribe(
        values => {
          this.listArticlesV2 = values;
          this.listArticlesLength = values.length;
          this.charged(true);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('completed !');
          this.test = true;
        });
    }, 3000);
    return this.sub;
  }


  public getParam(): void {
    // ?name=salut
    this.route.queryParams.subscribe(params => {
      // this.name = (params['name'] as Array<string>);
      this.name = params.name;
    });
  }

  public charged(completed: boolean = false): void {
    this.isCharged.emit(completed);
  }

  ngOnDestroy(): void {
    clearInterval(this.inter);
    // this.sub.unsubscribe();
    this.getListArti.unsubscribe();
  }

}
