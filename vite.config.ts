// @ts-nocheck
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import fg from "fast-glob";
import { minimatch } from "minimatch";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";

function pascalCaseWithCapitals(str) {
  return str
    .split("/")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

function removeExtension(str: string) {
  return path.basename(str, path.extname(str));
}

function getComponentImports() {
  const directories = [
    {
      pattern: "./src/components/**/*.{tsx,jsx}",
      omit: "./src/components"
    },
    {
      pattern: "./src/layouts/*.{tsx,jsx}",
      omit: "./src/"
    }
  ];

  const entries = fg.sync(
    directories.map((x) => x.pattern),
    {
      dot: true,
      objectMode: true
    }
  );

  return entries.map((entry) => {
    const dirOptions = directories.find((dir) => minimatch(entry.path, dir.pattern));

    const componentName = entry.path
      .replace(new RegExp(dirOptions.omit, "gi"), "")
      .split("/")
      .filter(Boolean)
      .map(pascalCaseWithCapitals)
      .join("");

    const fromPath = entry.path.replace(/\.\/src/gi, "@");

    return {
      [fromPath]: [[removeExtension(entry.name), removeExtension(componentName)]]
    };
  });
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    AutoImport({
      dts: "./auto-imports.d.ts",
      defaultExportByFilename: false,
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true
      },
      include: [
        /\.[tj]sx?$/ // .ts, .tsx, .js, .jsx
      ],
      dirs: ["./src/layouts", "./src/components", "./src/stores", "./src/hooks", "./src/logger", "./src/utils"],
      imports: [
        // @ts-ignore
        ...getComponentImports(),
        // @ts-ignore
        "react",
        // @ts-ignore
        {
          "@tanstack/react-router": ["createRootRoute", "createFileRoute", "createLazyFileRoute", "useNavigate"]
        },
        // @ts-ignore
        {
          "@tanstack/router-devtools": ["TanStackRouterDevtools"]
        },
        // @ts-ignore
        {
          "framer-motion": ["motion"]
        },
        // @ts-ignore
        // {
        //   "@nextui-org/react": []
        // }
      ]
    })
  ],
  css: {
    modules: {
      localsConvention: "camelCaseOnly" // Optional: enforce camelCase class names
    },
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "./src/styles/variables.scss";` // Optional: global SCSS
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
