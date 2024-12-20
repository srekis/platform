import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {RemoteEntryComponent} from '@platform/remote';
import {RemoteWrapperComponent} from '../remote-wrapper/remote-wrapper.component';
import {TestWrapperComponent} from '../test-wrapper/test-wrapper.component';

@Component({
  selector: 'app-home-component',
  imports: [CommonModule, RemoteEntryComponent, RemoteWrapperComponent, TestWrapperComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  protected campaignId = '3';

  protected onButtonClicked(): void {
    console.log('Button clicked');
  }
}
