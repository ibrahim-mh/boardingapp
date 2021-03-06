import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    exports: [
        RouterModule,
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule,
    ],
})
export class SharedModule { }
