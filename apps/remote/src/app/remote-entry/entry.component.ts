import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-remote-entry',
  template: `test REMOTE {{campaignId}}`,
})
export class RemoteEntryComponent {
  @Input() public campaignId = '2';
}
