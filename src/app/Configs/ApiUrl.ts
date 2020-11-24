import {HttpHeaders} from '@angular/common/http';

export class ApiUrl {
  constructor() {
  }

  private typeJosn: { headers: HttpHeaders };

  private static baseUrl(): string {
    return 'https://labs.dcode.design/wp-json/wp/v2/';
  }

  public static articlesURL(): string {
    return ApiUrl.baseUrl() + 'posts/';
  }

  public static articleURL(id: string): string {
    return ApiUrl.articlesURL() + id;
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
