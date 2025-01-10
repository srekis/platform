import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-inventory',
  template: `<ng-container #microFrontendRef />`
})
export class InventoryComponentWrapper {
  @ViewChild('microFrontendRef', { read: ViewContainerRef })
  microFrontendRef!: ViewContainerRef;
  
  public async ngOnInit() {
    await this.loadMicroFrontend();
  }

  private async loadMicroFrontend(): Promise<void> {
    try {
      const { InventoryEntryComponent } = await import('remote2/InventoryEntryComponent');
      this.microFrontendRef.createComponent(InventoryEntryComponent);
    } catch (error) {
      console.error('Error loading remote2 micro-frontend (Inventory):', error);
    }
  }
}
