import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './Components/articles/articles.component';

import { HttpClientModule } from '@angular/common/http';
import { HtmlEntitiesPipe } from './Pipes/html-entities.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    HtmlEntitiesPipe
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
