// organize-imports-ignore
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import '@/styles/index.css'

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </StrictMode>
  );
}
