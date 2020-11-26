import {Injectable} from '@angular/core';
import {Observable, throwError, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ApiUrl} from '../Configs/ApiUrl';
import {ArticlesModel} from '../Models/Articles.model';
import {IArticles} from '../Interfaces/IArticles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient, private apiUrl: ApiUrl) {
  }

  private static log(message: string): void {
    console.log(`${message}`);
  }

  /*public getArticles(): Observable<any> {
    return this.http.get<any>(ApiUrl.articlesURL())
      .pipe();
  }*/

  // GET with model
  public getListArticles(): Observable<ArticlesModel[]> {
    return this.http.get<ArticlesModel[]>(this.apiUrl.articlesURL()).pipe(
      map(datas => datas.map(data => new ArticlesModel().deserialize(data))),
      catchError(this.handleHttpError)
    );
  }

  public getListArticle(id: string): Observable<ArticlesModel> {
    return this.http.get<ArticlesModel>(this.apiUrl.articleURL(id)).pipe(
      tap(_ => console.log(`fetched tasks id=${id}`)),
      catchError(this.handleHttpError)
    );
  }

  public handleHttpError(error: HttpErrorResponse): Observable<never> {
    switch (error.status) {
      case 404: {
        console.log('Error 404');
        break;
      }
      case 200: {
        console.log('succes 200');
        break;
      }
    }
    throw(error);
  }
}
