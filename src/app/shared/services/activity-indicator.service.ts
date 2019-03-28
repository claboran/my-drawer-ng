import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActivityIndicatorService {

  private readonly _showIndicator$:  BehaviorSubject<boolean>;

  constructor() {
    this._showIndicator$ = new BehaviorSubject<boolean>(false);
  }


  get showIndicator$(): BehaviorSubject<boolean> {
    return this._showIndicator$;
  }

  switchOn(): void {
    this._showIndicator$.next(true);
  }

  switchOff(): void {
    this._showIndicator$.next(false);
  }
}
