import { Component, Input, WritableSignal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  imports: [CommonModule, RouterModule],
  selector: `app-remote2-entry`,
  templateUrl: './entry.component.html',
})
export class RemoteEntryComponent {
  @Input({required: true}) public campaignId!: WritableSignal<string>;

  public constructor() {
    effect(() => {
      console.log('Remote2 app: campaignId from platform (host app)', this.campaignId());
    });
  }
}
