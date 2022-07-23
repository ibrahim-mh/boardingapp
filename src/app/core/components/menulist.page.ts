import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menulist',
  templateUrl: 'menulist.page.html',
  styleUrls: ['menulist.page.scss'],
})
export class MenulistComponent {

  @Input() pages: any[];
  constructor() {

  }
  sidemenuClick(p){
    console.log(p);
  }
}
