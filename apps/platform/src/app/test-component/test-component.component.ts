import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {RemoteEntryComponent} from '@platform/remote';
import {RemoteWrapperComponent} from '../remote-wrapper/remote-wrapper.component';
import {TestWrapperComponent} from '../test-wrapper/test-wrapper.component';

@Component({
  selector: 'app-test-component',
  imports: [CommonModule, RemoteEntryComponent, RemoteWrapperComponent, TestWrapperComponent],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss',
})
export class TestComponentComponent {
  public campaignId = '3';
}
