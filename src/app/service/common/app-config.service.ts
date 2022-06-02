import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {AppConfig} from "../../model/common/app-config";

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private config: AppConfig = {
    theme: 'saga-green',
    dark: false,
    inputStyle: 'outlined'
  };
  private configUpdate = new Subject<AppConfig>();
  configUpdate$ = this.configUpdate.asObservable();

  constructor() {
    this.config = AppConfigService.getDarkConfig();
  }

  updateConfig(toDark: boolean): void {
    if (toDark) {
      this.updateToDark();
    } else {
      this.updateToLight();
    }
  }
  updateAppConfig(config: AppConfig): void {
    this.config = config;
    this.configUpdate.next(config);
  }
  updateToDark(): void {
    this.updateAppConfig(AppConfigService.getDarkConfig());
  }
  updateToLight(): void {
    this.updateAppConfig(AppConfigService.getLightConfig());
  }

  static getLightConfig(): AppConfig {
    return {
      theme: 'saga-green',
      dark: false,
      inputStyle: 'outlined'
    };
  }
  static getDarkConfig(): AppConfig {
    return {
      theme: 'arya-orange',
      dark: true,
      inputStyle: 'outlined'
    };
  }
}
