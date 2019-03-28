import { Component, OnInit } from '@angular/core';
import {ActivityIndicatorService} from "~/app/shared/services/activity-indicator.service";
import {Observable} from "rxjs";

@Component({
  selector: 'ns-load-indicator',
  templateUrl: './load-indicator.component.html',
  styleUrls: ['./load-indicator.component.scss'],
  moduleId: module.id,
})
export class LoadIndicatorComponent implements OnInit {

  private readonly _showLoadIndicator$: Observable<boolean>;

  constructor(private _activityIndicatorService : ActivityIndicatorService) {
    this._showLoadIndicator$ = this._activityIndicatorService.showIndicator$;
  }

  ngOnInit() {
  }


  get showLoadIndicator$(): Observable<boolean> {
    return this._showLoadIndicator$;
  }
}
