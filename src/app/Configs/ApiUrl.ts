import {HttpHeaders} from '@angular/common/http';

export class ApiUrl {
  constructor() {
  }

  private typeJosn: { headers: HttpHeaders };

  private static baseUrl(): string {
    return 'https://labs.dcode.design/wp-json/wp/v2/';
  }

  public articlesURL(): string {
    return ApiUrl.baseUrl() + 'posts/';
  }

  public articleURL(id: string): string {
    return this.articlesURL() + id;
  }

  public httpOptions(): any {
    return this.typeJosn = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json'
      })
    };
  }
}
