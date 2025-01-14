import { Route } from '@angular/router';
import { PlatformHomeComponent } from './home/platform-home.component';
import { TargetingComponentWrapper } from './domains/targeting/targeting-wrapper.component';
import {InventoryComponentWrapper} from './domains/inventory/inventory-wrapper.component';
import {loadRemoteModule} from '@angular-architects/module-federation';

export const appRoutes: Route[] = [
  {
    path: '',
    component: PlatformHomeComponent,
  },
  {
    path: 'targeting',
    component: TargetingComponentWrapper,
    loadChildren: getRemoteExposedModule('http://localhost:4206/remoteEntry.js', 'TargetingRemoteRoutingModule')
  },
  {
    path: 'inventory',
    component: InventoryComponentWrapper,
    loadChildren: getRemoteExposedModule('http://localhost:4206/remoteEntry.js', 'InventoryRemoteRoutingModule')
  }
];

function getRemoteExposedModule(remoteEntry: string, exposedModule: string) {
  return async () => {
    try {
      const module = await loadRemoteModule({
        type: 'module',
        remoteEntry,
        exposedModule: `./${exposedModule}`
      });

      return module[exposedModule];
    } catch (error) {
      console.error('Error loading remote micro-frontend:', error);

      return null;
    }
  }
}
