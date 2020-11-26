import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-wp';
  public charged;

  constructor() { }

  ngOnInit(): void {
  }

  public isCharged(completed: boolean): void {
    completed ? this.charged = true : this.charged = false;
  }
}
