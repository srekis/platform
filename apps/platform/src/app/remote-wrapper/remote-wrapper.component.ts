import { Component, OnInit, ViewContainerRef, ViewChild, Input, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-remote-wrapper',
  template: `<ng-container #microFrontendRef />`
})
export class RemoteWrapperComponent implements OnInit {
  @Input({required: true}) public campaignId!: WritableSignal<string>;

  @ViewChild('microFrontendRef', { read: ViewContainerRef })
  microFrontendRef!: ViewContainerRef;
  
  public async ngOnInit() {
    await this.loadMicroFrontend();
  }

  private async loadMicroFrontend(): Promise<void> {
    try {
      const { RemoteEntryComponent } = await import('remote2/RemoteEntryComponent');
      const componentRef = this.microFrontendRef.createComponent(RemoteEntryComponent);
      componentRef.setInput('campaignId', this.campaignId);
    } catch (error) {
      console.error('Error loading remote2 micro-frontend:', error);
    }
  }
}
