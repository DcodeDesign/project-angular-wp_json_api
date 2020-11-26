import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { SimpleArticleComponent } from './simple-article.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {ApiUrl} from '../../Configs/ApiUrl';

describe('SimpleArticleComponent', () => {
  let component: SimpleArticleComponent;
  let fixture: ComponentFixture<SimpleArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleArticleComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [ApiUrl]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
