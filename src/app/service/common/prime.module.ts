import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogModule} from "primeng/dialog";
import {MessagesModule} from "primeng/messages";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {TableModule} from "primeng/table";
import {PasswordModule} from "primeng/password";
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {SidebarModule} from "primeng/sidebar";
import {MenuModule} from "primeng/menu";
import {CheckboxModule} from "primeng/checkbox";
import {PanelModule} from "primeng/panel";
import {BadgeModule} from "primeng/badge";
import {PanelMenuModule} from "primeng/panelmenu";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DialogModule,
    MessagesModule,
    ToastModule,
    ConfirmDialogModule,
    InputTextModule,
    PasswordModule,
    TableModule,
    CardModule,
    ToolbarModule,
    ButtonModule,
    SidebarModule,
    MenuModule,
    CheckboxModule,
    PanelModule,
    BadgeModule,
    PanelMenuModule,
  ],
  exports: [
    DialogModule,
    MessagesModule,
    ToastModule,
    ConfirmDialogModule,
    InputTextModule,
    PasswordModule,
    TableModule,
    CardModule,
    ToolbarModule,
    ButtonModule,
    SidebarModule,
    MenuModule,
    CheckboxModule,
    PanelModule,
    BadgeModule,
    PanelMenuModule,
  ]
})
export class PrimeModule { }
