import { LoadChildrenCallback, Route } from '@angular/router';
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
    loadChildren: async () => {
      try {
        const module = await loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4206/remoteEntry.js',
          exposedModule: './TargetingRemoteRoutingModule'
        });

        return module.TargetingRemoteRoutingModule;
      } catch (error) {
        console.error('Error loading remote micro-frontend:', error);

        return null;
      }
    }
  },
  {
    path: 'inventory',
    component: InventoryComponentWrapper,
    loadChildren: async () => {
      try {
        const module = await loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4206/remoteEntry.js',
          exposedModule: './InventoryRemoteRoutingModule'
        });

        return module.InventoryRemoteRoutingModule;
      } catch (error) {
        console.error('Error loading remote micro-frontend:', error);

        return null;
      }
    }
  }
];



// export const appRoutes: Route[] = [
//   {
//     path: '',
//     component: PlatformHomeComponent,
//   },
//   {
//     path: 'targeting',
//     component: TargetingComponentWrapper,
//     loadChildren: getLoadChildrenCallback(
//       'http://localhost:4206/remoteEntry.js',
//       './TargetingRemoteRoutingModule'
//     )
//   },
//   {
//     path: 'inventory',
//     component: InventoryComponentWrapper,
//     loadChildren: getLoadChildrenCallback(
//       'http://localhost:4206/remoteEntry.js',
//       './InventoryRemoteRoutingModule'
//     )
//   }
// ];

// function getLoadChildrenCallback(remoteEntry: string, exposedModule: string): any {
//   return async () => {
//     try {
//       const module = await loadRemoteModule({
//         type: 'module',
//         remoteEntry,
//         exposedModule
//       });

//       return module[exposedModule];
//     } catch (error) {
//       console.error('Error loading remote micro-frontend:', error);

//       return null;
//     }
//   }
// }