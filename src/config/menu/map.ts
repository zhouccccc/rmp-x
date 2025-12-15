import { AppCode } from '@tf/utils/commonConsts';
import packagesJSON from '../../../package.json';

export default [
  {
    path: `/${AppCode.Map}/sitePlanning/${packagesJSON.name}`,
    name: 'sitePlanning',
    component: '/views/SitePlanning',
    authority: ['ADMIN', 'SUPERMANAGER'],
  },
  {
    path: `/${AppCode.Map}/siteMonitor/${packagesJSON.name}`,
    name: 'siteMonitor',
    component: '/views/SiteMonitor',
    authority: ['ADMIN', 'SUPERMANAGER', 'MANAGER'],
  },
];
