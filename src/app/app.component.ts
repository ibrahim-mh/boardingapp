import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  appPages=[];
  constructor(public translate: TranslateService,
              @Inject(DOCUMENT) private doc
              ) {
    const lang =localStorage.getItem('lang');
    translate.addLangs(['ar', 'en']);
    if(lang){
      translate.setDefaultLang(lang);
      if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
      this.translate.use(lang);
    } else {
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
    }
    this.appPages = [
      { title: 'Home', url: 'home', icon: 'home' },
      { title: 'About', url: '/about', icon: 'people' },
      { title: 'Contact', url: '/contact', icon: 'call' },
      { title: 'Gallery', url: '/gallery', icon: 'images' },
      { title: 'Setting', url: '', icon: 'settings',
   children: [
          { title: 'sub-menu1', url: '/sub-menu1', icon: 'images' },
          { title: 'sub-menu2', url: '/sub-menu2', icon: 'images' },
          { title: 'sub-menu3', url: '/sub-menu3', icon: 'images' }
   ]}];
  }
  ngOnInit(): void {
    this.selectedIndex = 1;
  }
  sidemenuClick(p){
    console.log(p);
  }
  changeLang(lang){
    localStorage.setItem('lang',lang);
    window.location.reload();
  }
}
