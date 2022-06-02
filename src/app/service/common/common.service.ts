import { Injectable } from '@angular/core';
import {lastValueFrom, map} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CommonResult} from "../../model/common/common-result";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private baseUrl = "/baseUrl/v1/common"

  constructor(private http: HttpClient) { }

  setLanguage(lang: string): Promise<any> {
    const params = new FormData();
    params.append("lang", lang);
    return lastValueFrom(this.http.post<CommonResult>(`${this.baseUrl}/lang`, params).pipe(
      map(response => response.success)
    ));
  }
}
