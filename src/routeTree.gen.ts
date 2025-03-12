/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as LayoutImport } from "./routes/_layout";
import { Route as LayoutIndexImport } from "./routes/_layout/index";
import { Route as LayoutSkillIndexImport } from "./routes/_layout/skill/index";
import { Route as LayoutProjectIndexImport } from "./routes/_layout/project/index";
import { Route as LayoutExperienceIndexImport } from "./routes/_layout/experience/index";
import { Route as LayoutContactIndexImport } from "./routes/_layout/contact/index";

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: "/_layout",
  getParentRoute: () => rootRoute,
} as any);

const LayoutIndexRoute = LayoutIndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => LayoutRoute,
} as any);

const LayoutSkillIndexRoute = LayoutSkillIndexImport.update({
  id: "/skill/",
  path: "/skill/",
  getParentRoute: () => LayoutRoute,
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

const LayoutContactIndexRoute = LayoutContactIndexImport.update({
  id: "/contact/",
  path: "/contact/",
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
    "/_layout/": {
      id: "/_layout/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof LayoutIndexImport;
      parentRoute: typeof LayoutImport;
    };
    "/_layout/contact/": {
      id: "/_layout/contact/";
      path: "/contact";
      fullPath: "/contact";
      preLoaderRoute: typeof LayoutContactIndexImport;
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
    "/_layout/skill/": {
      id: "/_layout/skill/";
      path: "/skill";
      fullPath: "/skill";
      preLoaderRoute: typeof LayoutSkillIndexImport;
      parentRoute: typeof LayoutImport;
    };
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutIndexRoute: typeof LayoutIndexRoute;
  LayoutContactIndexRoute: typeof LayoutContactIndexRoute;
  LayoutExperienceIndexRoute: typeof LayoutExperienceIndexRoute;
  LayoutProjectIndexRoute: typeof LayoutProjectIndexRoute;
  LayoutSkillIndexRoute: typeof LayoutSkillIndexRoute;
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutIndexRoute: LayoutIndexRoute,
  LayoutContactIndexRoute: LayoutContactIndexRoute,
  LayoutExperienceIndexRoute: LayoutExperienceIndexRoute,
  LayoutProjectIndexRoute: LayoutProjectIndexRoute,
  LayoutSkillIndexRoute: LayoutSkillIndexRoute,
};

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren);

export interface FileRoutesByFullPath {
  "": typeof LayoutRouteWithChildren;
  "/": typeof LayoutIndexRoute;
  "/contact": typeof LayoutContactIndexRoute;
  "/experience": typeof LayoutExperienceIndexRoute;
  "/project": typeof LayoutProjectIndexRoute;
  "/skill": typeof LayoutSkillIndexRoute;
}

export interface FileRoutesByTo {
  "/": typeof LayoutIndexRoute;
  "/contact": typeof LayoutContactIndexRoute;
  "/experience": typeof LayoutExperienceIndexRoute;
  "/project": typeof LayoutProjectIndexRoute;
  "/skill": typeof LayoutSkillIndexRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/_layout": typeof LayoutRouteWithChildren;
  "/_layout/": typeof LayoutIndexRoute;
  "/_layout/contact/": typeof LayoutContactIndexRoute;
  "/_layout/experience/": typeof LayoutExperienceIndexRoute;
  "/_layout/project/": typeof LayoutProjectIndexRoute;
  "/_layout/skill/": typeof LayoutSkillIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: "" | "/" | "/contact" | "/experience" | "/project" | "/skill";
  fileRoutesByTo: FileRoutesByTo;
  to: "/" | "/contact" | "/experience" | "/project" | "/skill";
  id:
    | "__root__"
    | "/_layout"
    | "/_layout/"
    | "/_layout/contact/"
    | "/_layout/experience/"
    | "/_layout/project/"
    | "/_layout/skill/";
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
        "/_layout/",
        "/_layout/contact/",
        "/_layout/experience/",
        "/_layout/project/",
        "/_layout/skill/"
      ]
    },
    "/_layout/": {
      "filePath": "_layout/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/contact/": {
      "filePath": "_layout/contact/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/experience/": {
      "filePath": "_layout/experience/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/project/": {
      "filePath": "_layout/project/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/skill/": {
      "filePath": "_layout/skill/index.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
