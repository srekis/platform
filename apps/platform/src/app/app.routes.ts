import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TargetingComponentWrapper } from './domains/targeting/targeting-wrapper.component';
import { InventoryComponentWrapper } from './domains/inventory/inventory-wrapper.component';

export const appRoutes: Route[] = [
  {
    path: '',
    // children: [
    //   {
    //     path: 'remote2',
    //     loadChildren: () =>
    //       import('remote2/RemoteRoutingModule').then((m) => m.RemoteRoutingModule),
    //   },
    // ],
    component: HomeComponent,
  },
  {
    path: 'targeting',
    component: TargetingComponentWrapper,
    loadChildren: () => import('remote2/TargetingRemoteRoutingModule').then((m) => m.TargetingRemoteRoutingModule),
  },
  {
    path: 'inventory',
    component: InventoryComponentWrapper,
    loadChildren: () => import('remote2/InventoryRemoteRoutingModule').then((m) => m.InventoryRemoteRoutingModule),
  }
];
