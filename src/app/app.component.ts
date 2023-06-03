import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-project';
selectedIndex:number = 0;

  constructor(private route: Router) {

  }

  onChangeView(page: string, index:number) {
    this.route.navigate([`/${page}`]);
    this.selectedIndex = index;
  }
}
