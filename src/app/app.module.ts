import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './Components/articles/articles.component';

import { HttpClientModule } from '@angular/common/http';
import { HtmlEntitiesPipe } from './Pipes/html-entities.pipe';

import { NotFoundComponent } from './Components/not-found/not-found.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { SlicerPipe } from './Pipes/slicer.pipe';
import { ArticleComponent } from './Components/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    HtmlEntitiesPipe,
    NotFoundComponent,
    NavigationComponent,
    SlicerPipe,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
