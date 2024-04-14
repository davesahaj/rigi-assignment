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
import { Feed, Post } from '@/pages';

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
  component: Feed
});

export const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.POST,
  component: Post
});

const routeTree = rootRoute.addChildren([indexRoute, postRoute]);

const router = createRouter({ routeTree });

export const RouterProvider = () => {
  return <NativeRouterProvider router={router} />;
};
