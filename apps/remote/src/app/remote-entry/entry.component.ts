import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-remote-entry',
  templateUrl: './entry.component.html',
})
export class RemoteEntryComponent {
  @Input({required: true}) public campaignId!: string;

  @Output() public buttonClicked = new EventEmitter<void>();
}
