import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-remote-wrapper',
  template: `<div #angularViewContainerRef></div>`
})
export class RemoteWrapperComponent implements OnInit {
  @ViewChild('angularViewContainerRef', { read: ViewContainerRef })
  angularViewContainerRef!: ViewContainerRef;
  
  public async ngOnInit() {
    try {
      const m = await import('remote2/RemoteEntryComponent');
      this.angularViewContainerRef.createComponent(m.RemoteEntryComponent);
    } catch (e) {
      console.error('Chyba při načítání remote2:', e);
    }
  }
} 