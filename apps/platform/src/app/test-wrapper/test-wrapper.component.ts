import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test-wrapper',
  template: `<ng-container #microFrontendRef />`
})
export class TestWrapperComponent implements OnInit {
  @ViewChild('microFrontendRef', { read: ViewContainerRef })
  microFrontendRef!: ViewContainerRef;
  
  public async ngOnInit() {
    await this.loadMicroFrontend();
  }

  private async loadMicroFrontend(): Promise<void> {
    try {
      const { TestComponent } = await import('remote2/TestComponent');
      this.microFrontendRef.createComponent(TestComponent);
    } catch (error) {
      console.error('Error loading remote2 micro-frontend:', error);
    }
  }
} 
