import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Increase warning limit if you want
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        manualChunks(id) {
          // If module comes from node_modules
          if (id.includes("node_modules")) {
            // Split react + react-dom + router
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router")
            ) {
              return "react-vendor";
            }

            // Split firebase libs
            if (id.includes("firebase")) {
              return "firebase-vendor";
            }

            // Split icon libraries
            if (id.includes("react-icons") || id.includes("lucide-react")) {
              return "icons-vendor";
            }

            // Put other node_modules in a separate chunk
            return "vendor";
          }
        },
      },
    },
  },
});
