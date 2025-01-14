import {loadRemoteModule} from '@angular-architects/module-federation';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-targeting',
  template: `<ng-container #microFrontendRef />`
})
export class TargetingComponentWrapper {
  @ViewChild('microFrontendRef', { read: ViewContainerRef })
  microFrontendRef!: ViewContainerRef;

  protected componentName = 'TargetingEntryComponent';
  
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
      this.microFrontendRef.createComponent(fetchedComponents[this.componentName]);
    } catch (error) {
      console.error('Error loading remote2 micro-frontend (Targeting):', error);
    }
  }
}
