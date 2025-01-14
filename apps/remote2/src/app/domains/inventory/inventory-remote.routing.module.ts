import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {inventoryRemoteRoutes} from './inventory-entry.routes';


@NgModule({
  imports: [ RouterModule.forChild(inventoryRemoteRoutes) ], exports: [ RouterModule ]
})
export class InventoryRemoteRoutingModule {}
