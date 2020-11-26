import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArticlesComponent} from './Components/articles/articles.component';



import {HtmlEntitiesPipe} from './Pipes/html-entities.pipe';

import {NotFoundComponent} from './Components/not-found/not-found.component';
import {NavigationComponent} from './Components/navigation/navigation.component';
import {SlicerPipe} from './Pipes/slicer.pipe';
import {ApiUrl} from './Configs/ApiUrl';
import {ArticlesService} from './Services/articles.service';
import { SimpleArticleComponent } from './Components/simple-article/simple-article.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    HtmlEntitiesPipe,
    NotFoundComponent,
    NavigationComponent,
    SlicerPipe,
    SimpleArticleComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiUrl, ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
