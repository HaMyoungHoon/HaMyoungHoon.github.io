import {Component, ViewChild} from '@angular/core';
import {NavigationStart, Router, Event, RouterEvent, NavigationEnd, NavigationCancel, NavigationError} from "@angular/router";
import {LanguageService} from "./service/common/language.service";
import {filter} from "rxjs";
import {MenuConfigComponent} from "./components/common/menu-config/menu-config.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MenuConfigComponent) child: MenuConfigComponent | null;
  constructor(public router: Router, public languageService: LanguageService) {
    router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
    ).subscribe((e: RouterEvent) => {
      this.updateRouter(e);
    });
    languageService.onInit();
    this.child = null;
  }

  updateRouter(event: RouterEvent): void {
    if (event instanceof NavigationStart) {

    }
    if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
      this.child?.menuInit();
    }
  }
}
