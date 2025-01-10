import config from './module-federation.config';
import { withModuleFederationPlugin } from '@angular-architects/module-federation/webpack';

export default withModuleFederationPlugin(config);

