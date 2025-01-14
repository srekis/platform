import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'remote2',
  exposes: {
    './RemoteRoutingModule': 'apps/remote2/src/app/remote.routing.module.ts',
    './RemoteEntryComponent': 'apps/remote2/src/app/remote-entry/entry.component.ts',
    './OtherComponent': 'apps/remote2/src/app/other-component/other.component.ts',
    './TestComponent': 'apps/remote2/src/app/test/test.component.ts',
    './InventoryRemoteRoutingModule': 'apps/remote2/src/app/domains/inventory/inventory-remote.routing.module.ts',
    './InventoryEntryComponent': 'apps/remote2/src/app/domains/inventory/inventory-entry.component.ts',
    './TargetingRemoteRoutingModule': 'apps/remote2/src/app/domains/targeting/targeting-remote.routing.module.ts',
    './TargetingEntryComponent': 'apps/remote2/src/app/domains/targeting/targeting-entry.component.ts',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
