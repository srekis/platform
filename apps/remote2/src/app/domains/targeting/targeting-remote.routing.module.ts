import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {targetingRemoteRoutes} from './targeting-entry.routes';


@NgModule({
  imports: [ RouterModule.forChild(targetingRemoteRoutes) ], exports: [ RouterModule ]
})
export class TargetingRemoteRoutingModule {}
