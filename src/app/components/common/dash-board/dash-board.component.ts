import { Component, OnInit } from '@angular/core';
import {TestService} from "../../../service/test.service";
import {TestModel} from "../../../model/test-model";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  testData: TestModel[];
  constructor(private testService: TestService) {
    this.testData = [];
    testService.testRestAPI().then(response => {
      console.log(response);
      this.testData = response!!
    }).catch(response => {
      console.log(response);
      this.testData = response.message;
    });
  }

  ngOnInit(): void {
  }

}
