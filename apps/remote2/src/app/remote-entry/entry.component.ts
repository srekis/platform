import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  imports: [CommonModule, RouterModule],
  selector: `app-remote2-entry`,
  template: `Navigation
    <router-outlet></router-outlet>
  `,
})
export class RemoteEntryComponent {}
