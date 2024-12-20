import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-remote-wrapper',
  template: `<ng-container #microFrontendRef />`
})
export class RemoteWrapperComponent implements OnInit {
  @ViewChild('microFrontendRef', { read: ViewContainerRef })
  microFrontendRef!: ViewContainerRef;
  
  public async ngOnInit() {
    await this.loadMicroFrontend();
  }

  private async loadMicroFrontend(): Promise<void> {
    try {
      const { RemoteEntryComponent } = await import('remote2/RemoteEntryComponent');
      this.microFrontendRef.createComponent(RemoteEntryComponent);
    } catch (error) {
      console.error('Error loading remote2 micro-frontend:', error);
    }
  }
}
