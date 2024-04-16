import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider as NativeRouterProvider
} from '@tanstack/react-router';

import { MainLayout } from '@/components/layout/';
import { ROUTES } from '@/constants';
import { FeedPage, PostPage } from '@/pages';

/*----------  Routes  ----------*/

const rootRoute = createRootRoute({
  component: () => (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  )
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.HOME,
  component: FeedPage
});

export const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.POST,
  component: PostPage
});

const routeTree = rootRoute.addChildren([indexRoute, postRoute]);

const router = createRouter({ routeTree });

/*----------  Global Routes Provider ----------*/

export const RouterProvider = () => {
  return <NativeRouterProvider router={router} />;
};
