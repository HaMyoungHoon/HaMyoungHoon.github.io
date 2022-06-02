import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashBoardComponent} from "./app/components/common/dash-board/dash-board.component";
import {Error404Component} from "./app/components/common/error/error404/error404.component";
import {Menu1Component} from "./app/components/menu1/menu1.component";
import {Menu2Component} from "./app/components/menu2/menu2.component";
import {Menu3Component} from "./app/components/menu3/menu3.component";
import {Menu1Sub1Component} from "./app/components/menu1/sub1/menu1-sub1.component";

const routes: Routes = [
  { path: "", component: DashBoardComponent},
  { path: "menu-1", component: Menu1Component },
  { path: "menu-2", component: Menu2Component },
  { path: "menu-3", component: Menu3Component },
  { path: "menu-1/sub-1", component: Menu1Sub1Component },
  { path: "menu-2/:sub", component: Menu2Component },
  { path: "menu-3/:sub", component: Menu3Component },
  { path: "**", component: Error404Component }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
