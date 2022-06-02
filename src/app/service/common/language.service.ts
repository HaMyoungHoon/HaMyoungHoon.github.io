import { Injectable } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {CommonService} from "./common.service";
import {getKeyName, LangType} from "../../model/common/lang-type";
import {getLocalStorage, setLocalStorage} from "../../guards/amhohwa";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  langList: string[];
  constructor(private translateService: TranslateService, private commonService: CommonService) {
    this.langList = Object.keys(LangType);
  }

  onInit(): void {
    for (let lang of this.langList) {
      this.translateService.addLangs([lang]);
    }

    const localLang = getLocalStorage('lang');
    let browserLang : string | undefined = "";
    let existLang : string | undefined = "";
    let matchingLang : string | undefined = "";
    if (localLang === 'NaN' || localLang.length <= 0) {
      browserLang = this.translateService.getBrowserLang();
      existLang = this.langList.find(lang => browserLang == lang);
      matchingLang = existLang ? browserLang : 'ko';
      matchingLang = matchingLang == undefined ? 'ko' : matchingLang;
      setLocalStorage('lang', matchingLang);
    } else {
      matchingLang = localLang;
    }

    this.translateService.setDefaultLang(matchingLang);
    this.translateService.use(matchingLang);
    this.setLanguage(matchingLang);
  }

  change(lang: LangType): void {
    const existLang = this.langList.find(x => getKeyName(lang) == x);
    if (existLang) {
      this.translateService.use(existLang);
      this.setLanguage(existLang);
    }
  }

  setLanguage(lang: string): void {
//    this.commonService.setLanguage(lang).then().catch(response => {
//      if (response.status == 504) {
//        alert("서버 연결이 끊겼습니다.");
//      } else {
//        alert(response.statusText);
//      }
//    });
    setLocalStorage('lang', lang);
  }
}
