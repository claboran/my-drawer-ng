import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IconService {

  private readonly _icon$: BehaviorSubject<boolean>;
  private _state = true;

  constructor() {
    this._icon$ = new BehaviorSubject(this._state);
  }

  get icon$(): BehaviorSubject<boolean> {
    return this._icon$;
  }

  toggle(): void {
    this._state = !this._state;
    this._icon$.next(this._state);
  }
}
