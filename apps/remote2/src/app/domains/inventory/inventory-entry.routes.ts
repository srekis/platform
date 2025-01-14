import { Route } from '@angular/router';
import {InventoryHomeComponent} from './home/inventory-home.component';
import {InventoryEnhancedComponent} from './enhanced/inventory-enhanced.component';

export const inventoryRemoteRoutes: Route[] = [
  {path: '', component: InventoryHomeComponent},
  {path: 'enhanced', component: InventoryEnhancedComponent},
];
