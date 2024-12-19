import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { TestComponent } from './test.component';

export const remoteRoutes: Route[] = [
  {path: '', component: RemoteEntryComponent},
  {path: 'test', component: TestComponent},
];
