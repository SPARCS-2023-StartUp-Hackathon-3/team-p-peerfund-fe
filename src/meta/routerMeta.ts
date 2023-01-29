import { RouteProps } from 'react-router-dom';
import ProjectManagement from '../containers/ProjectManagement/ProjectManagement';

interface CustomRouteProps {
  title: string;
  hide: boolean;
  account: boolean;
}

export type RouteMetaProps = Omit<RouteProps, 'component'> & Partial<CustomRouteProps>;

export type RouteMetaType = string | RouteMetaProps;

export type RouterMetaTypes = { [key: string]: RouteMetaType | RouteMetaType[] };

const routerMeta: RouterMetaTypes = {
  Home: { path: '/', hide: true },
  Peer: { title: 'PEER 모집', path: '/peer' },
  Register: {
    path: '/register',
    account: false,
    hide: true,
  },
  PeerForm: { path: '/pear_create', hide: true, account: true },
  Detail: '/project/:projectId',
  ProjectManagement: { path: '/project_management', title: '프로젝트 관리', account: true },
  Apply: {
    path: '/apply/:projectId',
    account: true,
  },
  TestForm: { path: '/testform', hide: true },
};

export default routerMeta;
