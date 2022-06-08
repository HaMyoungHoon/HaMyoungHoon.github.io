import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom, map} from "rxjs";
import {ListResult} from "../model/common/list-result";
import {TestModel} from "../model/test-model";

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private baseUrl = "http://old.gw.ssipec.com:51600/v1/gwAPI/get/ec_item_info_test/SICO"

  constructor(private http: HttpClient) { }

  testRestAPI(): Promise<TestModel[] | null> {
    return lastValueFrom(this.http.get<ListResult<TestModel>>(this.baseUrl).pipe(
      map(response => response.data)
    ));
  }
}
