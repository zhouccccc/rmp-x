import { AppCode } from '@tf/utils/commonConsts';
import packagesJSON from '../../../package.json';

export default [
  {
    path: `/${AppCode.Report}/vehicleReport/${packagesJSON.name}`,
    name: 'vehicleReport',
    authority: ['ADMIN', 'SUPERMANAGER', 'MANAGER'],
    component: '/views/VehicleReport',
  },
  {
    path: `/${AppCode.Report}/taskReport/${packagesJSON.name}`,
    name: 'taskReport',
    authority: ['ADMIN', 'SUPERMANAGER', 'MANAGER'],
    component: '/views/TaskReport',
  },
  {
    path: `/${AppCode.Report}/stationReport/${packagesJSON.name}`,
    name: 'stationReport',
    authority: ['ADMIN', 'SUPERMANAGER', 'MANAGER'],
    component: '/views/StationReport',
  },
];
