import { Component, OnInit, ViewContainerRef, ViewChild, Input, WritableSignal, Type } from '@angular/core';
import {loadRemoteModule} from '@angular-architects/module-federation';

@Component({
  selector: 'app-remote-wrapper',
  template: `<ng-container #microFrontendRef />
  @if(elementFetchingFailed){
    <div class="error">
      Remote Element <strong> {{ componentName }} </strong> can not be displayed
    </div>
  }
 `
})
export class RemoteWrapperComponent implements OnInit {
  @Input({required: true}) public campaignId!: WritableSignal<string>;

  @ViewChild('microFrontendRef', { read: ViewContainerRef })
  microFrontendRef!: ViewContainerRef;

  protected elementFetchingFailed = false;
  protected componentName = 'RemoteEntryComponent';

  public async ngOnInit() {
    await this.loadMicroFrontend();
  }

  private async loadMicroFrontend(): Promise<void> {
    const remoteEntry = 'http://localhost:4206/remoteEntry.js';

    try {
      const fetchedComponents = await loadRemoteModule({
        type: 'module',
        remoteEntry,
        exposedModule: `./${this.componentName}`
      });

      const componentRef = this.microFrontendRef.createComponent(fetchedComponents[this.componentName]);
      componentRef.setInput('campaignId', this.campaignId);
    } catch (error) {
      this.elementFetchingFailed = true;
      console.error('Error loading remote2 micro-frontend:', error);
    }
  }
}
