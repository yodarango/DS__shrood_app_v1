import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.ts", // Path to your library's entry file
      name: "@shrood/ds", // The name of the global variable for UMD builds
      fileName: (format) => `ds.${format}.js`,
    },
    rollupOptions: {
      // Externalize peer dependencies
      external: ["react", "react-dom", "prop-types", "@mui/utils"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "prop-types": "PropTypes",
          "@mui/utils": "MUIUtils",
        },
      },
    },
  },
});
