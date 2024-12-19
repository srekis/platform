import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  imports: [CommonModule, RouterModule],
  selector: `app-remote2-entry`,
  template: `
    <h1>Remote 2 MFE</h1>
    <nav>
      <li>
        <a routerLink="/">Home</a>
      </li>
      <li>
        <a routerLink="/test">Test</a>
      </li>
    </nav>

    <router-outlet></router-outlet>
  `,
})
export class RemoteEntryComponent {}
