import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private counterSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public counter$: Observable<number> = this.counterSubject.asObservable();

  increment(): void {
    console.log('click service')
    this.counterSubject.next(this.counterSubject.value + 1);
  }

  decrement(): void {
    this.counterSubject.next(this.counterSubject.value - 1);
  }

  getValue(): number {
    return this.counterSubject.value;
  }
}
