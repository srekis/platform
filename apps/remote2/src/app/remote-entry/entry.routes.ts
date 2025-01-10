import { Route } from '@angular/router';
import {TestComponent} from '../test/test.component';
import {HomeComponent} from '../home/home.component';
import {TargetingEntryComponent} from '../domains/targeting/targeting-entry.component';
import {InventoryEntryComponent} from '../domains/inventory/inventory-entry.component';
import {TargetingRemoteRoutingModule} from '../domains/targeting/targeting-remote.routing.module';
import {InventoryRemoteRoutingModule} from '../domains/inventory/inventory-remote.routing.module';

export const remoteRoutes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'test', component: TestComponent},
  {
    path: 'targeting',
    component: TargetingEntryComponent,
    loadChildren: () => TargetingRemoteRoutingModule,
  },
  {
    path: 'inventory',
    component: InventoryEntryComponent,
    loadChildren: () => InventoryRemoteRoutingModule,
  },
];
