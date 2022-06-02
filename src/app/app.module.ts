import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpRequestInterceptorService} from "./service/common/http-request-interceptor.service";
import { DashBoardComponent } from './components/common/dash-board/dash-board.component';
import { MenuConfigComponent } from './components/common/menu-config/menu-config.component';
import {AppRoutingModule} from "../app-routing.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonService} from "./service/common/common.service";
import { Error404Component } from './components/common/error/error404/error404.component';
import { Menu1Component } from './components/menu1/menu1.component';
import { Menu2Component } from './components/menu2/menu2.component';
import { Menu3Component } from './components/menu3/menu3.component';
import { Menu1Sub1Component } from './components/menu1/sub1/menu1-sub1.component';
import { Menu2Sub1Component } from './components/menu2/sub1/menu2-sub1.component';
import { Menu2Sub2Component } from './components/menu2/sub2/menu2-sub2.component';
import { Menu3Sub1Component } from './components/menu3/menu3-sub1/menu3-sub1.component';
import { Menu3Sub2Component } from './components/menu3/menu3-sub2/menu3-sub2.component';
import { Menu3Sub3Component } from './components/menu3/menu3-sub3/menu3-sub3.component';
import {PrimeModule} from "./service/common/prime.module";
import {MessageService} from "primeng/api";
import {DialogService} from "primeng/dynamicdialog";

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    MenuConfigComponent,
    Error404Component,
    Menu1Component,
    Menu2Component,
    Menu3Component,
    Menu1Sub1Component,
    Menu2Sub1Component,
    Menu2Sub2Component,
    Menu3Sub1Component,
    Menu3Sub2Component,
    Menu3Sub3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    FormsModule,
    PrimeModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptorService,
      multi: true,
    },
    CommonService,
    MessageService,
    DialogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json")
}
