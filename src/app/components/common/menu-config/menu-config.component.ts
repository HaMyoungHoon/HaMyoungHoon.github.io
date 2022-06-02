import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LangType} from "../../../model/common/lang-type";
import {MenuItem} from "primeng/api";
import {MainMenuItem} from "../../../model/common/main-menu-item";
import {LangChangeEvent, TranslateService} from "@ngx-translate/core";
import {getLocalStorage, setLocalStorage} from "../../../guards/amhohwa";
import {AppConfigService} from "../../../service/common/app-config.service";
import {AppConfig} from "../../../model/common/app-config";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-menu-config',
  templateUrl: './menu-config.component.html',
  styleUrls: ['./menu-config.component.scss']
})
export class MenuConfigComponent implements OnInit {
  @Output() langChange: EventEmitter<LangType>
  menuVisible: boolean;
  menuItems: MenuItem[];
  scale: number = 14;
  scales: number[] = [10,12,14,16,18];
  constructor(private translateService: TranslateService, public configService: AppConfigService) {
    this.langChange = new EventEmitter<LangType>();
    this.menuVisible = false;
    this.menuItems = [];
    configService.configUpdate$.subscribe(config => {
      if (config.dark == (getLocalStorage("primeng-isDark") == "true")) {
        return;
      }
      const themeElement = document.getElementById('theme-link');
      if (themeElement) {
        const hrefAttribute = themeElement.getAttribute('href')
        if (hrefAttribute) {
//          themeElement.removeAttribute('href');
          themeElement.setAttribute('href', `assets/styles/${config.theme}/theme.css`);
          setLocalStorage('primeng-theme', config.theme!!);
          setLocalStorage('primeng-isDark', config.dark!!.toString());
        }
      }
    });
  }

  ngOnInit(): void {
    this.menuItems = MainMenuItem();
    if (getLocalStorage("primeng-isDark") == "true") {
      this.configService.updateConfig(true);
    } else {
      this.configService.updateConfig(false);
    }
  }
  menuInit(): void {
    this.menuVisible = false;
    this.menuItems = MainMenuItem();
  }
  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }
  langToEn(): void {
    this.langChange.emit(LangType.en);
  }
  langToKo(): void {
    this.langChange.emit(LangType.ko);
  }
  decrementScale(): void {
    this.scale = this.scale - 2;
    this.applyScale();
  }
  incrementScale(): void {
    this.scale = this.scale + 2;
    this.applyScale();
  }
  applyScale(): void {
    document.documentElement.style.fontSize = `${this.scale}px`;
    setLocalStorage('scale', this.scale.toString());
  }
  changeTheme(toDark: boolean): void {
    this.configService.updateConfig(toDark);
  }
}
