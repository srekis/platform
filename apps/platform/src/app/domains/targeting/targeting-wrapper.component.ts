import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-targeting',
  template: `<ng-container #microFrontendRef />`
})
export class TargetingComponentWrapper {
  @ViewChild('microFrontendRef', { read: ViewContainerRef })
  microFrontendRef!: ViewContainerRef;
  
  public async ngOnInit() {
    await this.loadMicroFrontend();
  }

  private async loadMicroFrontend(): Promise<void> {
    try {
      const { TargetingEntryComponent } = await import('remote2/TargetingEntryComponent');
      this.microFrontendRef.createComponent(TargetingEntryComponent);
    } catch (error) {
      console.error('Error loading remote2 micro-frontend (Targeting):', error);
    }
  }
}
