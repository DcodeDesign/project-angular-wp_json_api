import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
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

  /*public getArticles(): Observable<any> {
    return this.http.get<any>(ApiUrl.articlesURL())
      .pipe();
  }*/

  // GET with model
  public getListArticles(): any {
    return this.http.get<ArticlesModel[]>(this.apiUrl.articlesURL()).pipe(
      map(datas => datas.map(data => new ArticlesModel().deserialize(data))),
      catchError(this.handleHttpError)
    );
  }

  public getListArticle(id: string): any {
    return this.http.get<ArticlesModel[]>(this.apiUrl.articleURL(id)).pipe(
      map(data => new ArticlesModel().deserialize(data)),
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
    return throwError(error);
  }

  // GET with Interfaces
  public getListContactV2(): Observable<IArticles[]> {
    return this.http.get<IArticles[]>(this.apiUrl.articlesURL()).pipe(
      map(data => data,
        tap(() => {
            catchError(this.handleHttpError);
          },
        )
      )
    );
  }

  /* private handleError<T>(operation = 'operation', result?: T):  {
     return (error: any): Observable<T> => {
       console.error(error); // log to console instead
       DataTasksService.log(`${operation} failed: ${error.message}`);
       return of(result as T);
     };
   }*/


}
