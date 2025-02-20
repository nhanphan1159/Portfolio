/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as LayoutImport } from "./routes/_layout";
import { Route as LayoutProjectIndexImport } from "./routes/_layout/project/index";
import { Route as LayoutExperienceIndexImport } from "./routes/_layout/experience/index";
import { Route as LayoutAboutIndexImport } from "./routes/_layout/about/index";
import { Route as LayouthomeIndexImport } from "./routes/_layout/(home)/index";

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: "/_layout",
  getParentRoute: () => rootRoute,
} as any);

const LayoutProjectIndexRoute = LayoutProjectIndexImport.update({
  id: "/project/",
  path: "/project/",
  getParentRoute: () => LayoutRoute,
} as any);

const LayoutExperienceIndexRoute = LayoutExperienceIndexImport.update({
  id: "/experience/",
  path: "/experience/",
  getParentRoute: () => LayoutRoute,
} as any);

const LayoutAboutIndexRoute = LayoutAboutIndexImport.update({
  id: "/about/",
  path: "/about/",
  getParentRoute: () => LayoutRoute,
} as any);

const LayouthomeIndexRoute = LayouthomeIndexImport.update({
  id: "/(home)/",
  path: "/",
  getParentRoute: () => LayoutRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/_layout": {
      id: "/_layout";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof LayoutImport;
      parentRoute: typeof rootRoute;
    };
    "/_layout/(home)/": {
      id: "/_layout/(home)/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof LayouthomeIndexImport;
      parentRoute: typeof LayoutImport;
    };
    "/_layout/about/": {
      id: "/_layout/about/";
      path: "/about";
      fullPath: "/about";
      preLoaderRoute: typeof LayoutAboutIndexImport;
      parentRoute: typeof LayoutImport;
    };
    "/_layout/experience/": {
      id: "/_layout/experience/";
      path: "/experience";
      fullPath: "/experience";
      preLoaderRoute: typeof LayoutExperienceIndexImport;
      parentRoute: typeof LayoutImport;
    };
    "/_layout/project/": {
      id: "/_layout/project/";
      path: "/project";
      fullPath: "/project";
      preLoaderRoute: typeof LayoutProjectIndexImport;
      parentRoute: typeof LayoutImport;
    };
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayouthomeIndexRoute: typeof LayouthomeIndexRoute;
  LayoutAboutIndexRoute: typeof LayoutAboutIndexRoute;
  LayoutExperienceIndexRoute: typeof LayoutExperienceIndexRoute;
  LayoutProjectIndexRoute: typeof LayoutProjectIndexRoute;
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayouthomeIndexRoute: LayouthomeIndexRoute,
  LayoutAboutIndexRoute: LayoutAboutIndexRoute,
  LayoutExperienceIndexRoute: LayoutExperienceIndexRoute,
  LayoutProjectIndexRoute: LayoutProjectIndexRoute,
};

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren);

export interface FileRoutesByFullPath {
  "": typeof LayoutRouteWithChildren;
  "/": typeof LayouthomeIndexRoute;
  "/about": typeof LayoutAboutIndexRoute;
  "/experience": typeof LayoutExperienceIndexRoute;
  "/project": typeof LayoutProjectIndexRoute;
}

export interface FileRoutesByTo {
  "/": typeof LayouthomeIndexRoute;
  "/about": typeof LayoutAboutIndexRoute;
  "/experience": typeof LayoutExperienceIndexRoute;
  "/project": typeof LayoutProjectIndexRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/_layout": typeof LayoutRouteWithChildren;
  "/_layout/(home)/": typeof LayouthomeIndexRoute;
  "/_layout/about/": typeof LayoutAboutIndexRoute;
  "/_layout/experience/": typeof LayoutExperienceIndexRoute;
  "/_layout/project/": typeof LayoutProjectIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: "" | "/" | "/about" | "/experience" | "/project";
  fileRoutesByTo: FileRoutesByTo;
  to: "/" | "/about" | "/experience" | "/project";
  id:
    | "__root__"
    | "/_layout"
    | "/_layout/(home)/"
    | "/_layout/about/"
    | "/_layout/experience/"
    | "/_layout/project/";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren;
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/(home)/",
        "/_layout/about/",
        "/_layout/experience/",
        "/_layout/project/"
      ]
    },
    "/_layout/(home)/": {
      "filePath": "_layout/(home)/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/about/": {
      "filePath": "_layout/about/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/experience/": {
      "filePath": "_layout/experience/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/project/": {
      "filePath": "_layout/project/index.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
