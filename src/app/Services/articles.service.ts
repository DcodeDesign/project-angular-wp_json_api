import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {ApiUrl} from '../Configs/ApiUrl';
import {ArticlesModel} from '../Models/articles-model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) {
  }

  /*public getArticles(): Observable<any> {
    return this.http.get<any>(ApiUrl.articlesURL())
      .pipe();
  }*/

  public getListContact(): any {
    return this.http.get<ArticlesModel[]>(ApiUrl.articlesURL()).pipe(
      map(datas => datas.map(data => new ArticlesModel().deserialize(data))),
      catchError(this.handleHttpError)
    );
  }

  public handleHttpError(error: HttpErrorResponse): Observable<never>{
    switch (error.status) {
      case 404: {
        console.log('Error 404');
        break;
      }
    }
    return throwError(error);
  }
}
