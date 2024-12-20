import {CommonModule} from '@angular/common';
import {Component, effect, Input, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-counter-component',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  @Input({required: true}) public count!: WritableSignal<number>;
  @Input({required: true}) public campaignId!: WritableSignal<string>;

  constructor() {
    effect(() => {
      console.log('campaignId', this.campaignId());
      console.log('count', this.count());
    });
  }
}
