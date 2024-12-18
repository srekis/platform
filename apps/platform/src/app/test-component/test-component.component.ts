import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {RemoteEntryComponent} from '@platform/remote';

@Component({
  selector: 'app-test-component',
  imports: [CommonModule, RemoteEntryComponent],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss',
})
export class TestComponentComponent {
  public campaignId = '3';
}
