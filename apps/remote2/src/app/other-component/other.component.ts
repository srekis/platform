import { Component, Input, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../service';

@Component({
  imports: [CommonModule],
  selector: 'app-other-component',
  templateUrl: './other.component.html',
})
export class OtherComponent {
  @Input({ required: true }) public campaignId!: WritableSignal<string>;

  constructor(protected service: Service) {

  }
}
