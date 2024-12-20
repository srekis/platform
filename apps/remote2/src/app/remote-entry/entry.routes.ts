import { Route } from '@angular/router';
import {TestComponent} from '../test/test.component';
import {HomeComponent} from '../home/home.component';

export const remoteRoutes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'test', component: TestComponent},
];
