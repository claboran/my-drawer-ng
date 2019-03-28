import { Component, OnInit } from '@angular/core';
import {RadSideDrawer} from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import {IconService} from "~/app/shared/services/icon.service";
import {Observable} from "rxjs";

@Component({
  selector: 'ns-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  moduleId: module.id,
})
export class HeaderComponent implements OnInit {

  constructor(private _iconService: IconService) { }

  ngOnInit() {
  }

  get icon$(): Observable<boolean> {
    return this._iconService.icon$;
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  onIconTap(): void {
    this._iconService.toggle();
  }

}
