import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'remote2',
  exposes: {
    './RemoteEntryComponent': 'apps/remote2/src/app/remote-entry/entry.component.ts',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
