import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {loadRemote} from '@module-federation/enhanced/runtime';
import {RemoteEntryComponent} from '@platform/remote';

@Component({
  selector: 'app-test-component',
  imports: [CommonModule, RemoteEntryComponent],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss',
})
export class TestComponentComponent implements OnInit {
  public campaignId = '3';

  async loadExternalComponent() {
    loadRemote<typeof import('external')>('my-remote-app/Module').then(m => m.RemoteEntryModule);
  }
}
