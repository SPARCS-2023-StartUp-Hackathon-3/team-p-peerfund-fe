import { RouteProps } from 'react-router-dom';

interface CustomRouteProps {
  title: string;
  hide: boolean;
  account: boolean;
}

export type RouteMetaProps = Omit<RouteProps, 'component'> & Partial<CustomRouteProps>;

export type RouteMetaType = string | RouteMetaProps;

export type RouterMetaTypes = { [key: string]: RouteMetaType | RouteMetaType[] };

const routerMeta: RouterMetaTypes = {
  Home: { path: '/' },
  Peer: { path: '/peer' },
  Register: {
    path: '/register',
    account: false,
    hide: true,
  },
  Project: '/project/:projectId',
  Apply: '/apply/:projectId',
  TestForm: '/testform',
};

export default routerMeta;
