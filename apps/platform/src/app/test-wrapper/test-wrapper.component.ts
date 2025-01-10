import {loadRemoteModule} from '@angular-architects/module-federation';
import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test-wrapper',
  template: `<ng-container #microFrontendRef />`
})
export class TestWrapperComponent implements OnInit {
  @ViewChild('microFrontendRef', { read: ViewContainerRef })
  microFrontendRef!: ViewContainerRef;

  protected componentName = 'TestComponent';
  
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
      console.error('Error loading remote2 micro-frontend:', error);
    }
  }
} 
