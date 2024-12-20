import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('remote2/RemoteRoutingModule').then((m) => m.RemoteRoutingModule),
    component: HomeComponent,
  }
];
