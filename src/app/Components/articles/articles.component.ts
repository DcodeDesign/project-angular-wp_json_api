import {Component,  EventEmitter, OnInit, Output} from '@angular/core';
import {ArticlesService} from '../../Services/articles.service';
import {ArticlesModel} from '../../Models/articles-model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public listArticles: ArticlesModel[];
  public listArticlesLength: number;
  @Output() public isCharged = new EventEmitter<boolean>();

  constructor(private articlesServices: ArticlesService) {
  }

  ngOnInit(): void {
    this.articles();
  }

  public articles(): void {
    this.articlesServices.getListContact().subscribe(
      item => {
        this.listArticles = item;
        this.charged(true);
        this.listArticlesLength = item.length;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('completed !');
      });
  }

  public charged(completed: boolean = false): void {
    this.isCharged.emit(completed);
  }

}
