import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider as NativeRouterProvider
} from '@tanstack/react-router';

import { Header } from '@/components/common/header';
import { MainLayout } from '@/components/layout/';
import { ROUTES } from '@/constants';
import { Feed } from '@/pages';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Header />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  )
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.HOME,
  component: function () {
    return <Feed />;
  }
});

const routeTree = rootRoute.addChildren([indexRoute]);

const router = createRouter({ routeTree });

export const RouterProvider = () => {
  return <NativeRouterProvider router={router} />;
};
