import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(
    public translate: TranslateService,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      const lang = paramMap.get('lang');
      this.translate.use(paramMap.get('lang'));
      if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
    });
   }

  ngOnInit() {
  }

}
