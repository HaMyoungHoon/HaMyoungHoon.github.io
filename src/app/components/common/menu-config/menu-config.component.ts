import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LangType} from "../../../model/common/lang-type";

@Component({
  selector: 'app-menu-config',
  templateUrl: './menu-config.component.html',
  styleUrls: ['./menu-config.component.css']
})
export class MenuConfigComponent implements OnInit {
  @Output() langChange: EventEmitter<LangType>
  menuVisible: boolean;
  constructor() {
    this.langChange = new EventEmitter<LangType>();
    this.menuVisible = false;
  }

  ngOnInit(): void {
  }
  menuInit(): void {
  }
}
