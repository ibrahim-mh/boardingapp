import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap,Params, Router  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { element } from 'protractor';
// import { DOCUMENT } from '@angular/common';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  appPages=[];
  constructor(
    public translate: TranslateService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
              ) {
    translate.addLangs(['ar', 'en']);
    // const browserLang = this.translate.getBrowserLang();
    translate.setDefaultLang('en');
    // this.translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');

  }
  ngOnInit(): void {
    this.selectedIndex = 1;
    setTimeout(() => {
      const path=this.router.url.split('/');
      console.log(this.router.url);
      this.appPages = [
        { title: 'Home', url: path[1]+'/home', icon: 'home' },
        { title: 'About', url: path[1]+'/about', icon: 'people' },
        { title: 'Contact', url: path[1]+'/contact', icon: 'call' },
        { title: 'Gallery', url: path[1]+'/gallery', icon: 'images' },
        { title: 'Setting', url: '', icon: 'settings',
     children: [
            { title: 'sub-menu1', url: path[1]+'/sub-menu1', icon: 'images' },
            { title: 'sub-menu2', url: path[1]+'/sub-menu2', icon: 'images' },
            { title: 'sub-menu3', url: path[1]+'/sub-menu3', icon: 'images' }
     ]}];
    }, 100);

  }
  sidemenuClick(p){
    console.log(p);
  }
  changeLang(lang){
    const path=this.router.url.split('/');
    const paths=[];
    for (let index = 2; index < path.length; index++) {
      paths.push(path[index]);
    }
    console.log(paths);
    this.router.navigate([lang,...paths], { relativeTo: this.activatedRoute}).then(() => {
      window.location.reload();
    });
  }
}
