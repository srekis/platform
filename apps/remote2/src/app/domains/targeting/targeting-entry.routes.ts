import { Route } from '@angular/router';
import {TargetingHomeComponent} from './home/tageting-home.component';
import {TargetingEnhancedComponent} from './enhanced/targeting-enhanced.component';

export const targetingRemoteRoutes: Route[] = [
  {path: '', component: TargetingHomeComponent},
  {path: 'enhanced', component: TargetingEnhancedComponent},
];
