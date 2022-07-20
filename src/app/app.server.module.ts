import { NgModule } from '@angular/core';
import { ServerModule,ServerTransferStateModule  } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
// Tell Ionic components how to render on the server
import { IonicServerModule } from '@ionic/angular-server';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { translateServerLoaderFactory } from './core/utils/translate-server.loader';

import { TransferState } from '@angular/platform-browser';
@NgModule({
  imports: [
    AppModule,
    ServerModule,
    IonicServerModule,
    ServerTransferStateModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: translateServerLoaderFactory,
        deps: [TransferState]
      }
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
