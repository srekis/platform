import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test-wrapper',
  template: `<div #angularViewContainerRef></div>`
})
export class TestWrapperComponent implements OnInit {
  @ViewChild('angularViewContainerRef', { read: ViewContainerRef })
  angularViewContainerRef!: ViewContainerRef;
  
  public async ngOnInit() {
    try {
      const m = await import('remote2/TestComponent');
      this.angularViewContainerRef.createComponent(m.TestComponent);
    } catch (e) {
      console.error('Chyba při načítání remote2:', e);
    }
  }
} 