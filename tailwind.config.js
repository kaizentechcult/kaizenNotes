// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   darkMode: "class", // Enable dark mode with class strategy
//   theme: {
//     extend: {
//       colors: {
//         // Light theme colors
//         light: {
//           primary: "#0A1128",     // Dark Navy - Main background color (for primary elements)
//           secondary: "#1F3A65",   // Deep Blue - Secondary background or borders
//           accent: "#3AB0FF",      // Sky Blue - Accents (links, buttons, highlights)
//           form: "#F4F7FB",        // Off-White for form backgrounds
//           lightBG: "#F1F7FF",     // Soft Light Blue for general background (off-white)
//           mutedText: "#9CA3AF",   // Light Gray for text that is less important
//           error: "#F87171",       // Light Red for error messages or warnings
//           success: "#22C55E",     // Green for success or positive feedback
//           warning: "#F59E0B",     // Yellow for warnings or alerts
//           info: "#3B82F6",        // Blue for informational messages
//         },
//         // Dark theme colors
//         dark: {
//           primary: "#121C2D",     // Darker Navy for primary background
//           secondary: "#223A56",   // Deep Blue (slightly darker) for secondary elements
//           accent: "#1E8AFC",      // Light Blue for accents (links, buttons, highlights)
//           form: "#2B3A4B",        // Dark Gray for form fields (subtle but readable)
//           lightBG: "#1F2937",     // Dark background for the main body
//           mutedText: "#A0AEC0",   // Light Gray for text in dark mode
//           error: "#F87171",       // Light Red for error messages (same for both themes)
//           success: "#4CAF50",     // Green for success messages
//           warning: "#F59E0B",     // Yellow for warnings (same for both themes)
//           info: "#3B82F6",        // Blue for informational messages (same for both themes)
//         },
//       },
//     },
//   },
//   plugins: [],
// };

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0A1128",
        secondary: "#1F3A65",
        accent: "#3AB0FF",
        form: "#F4F7FB",
        lightBG: "#F1F7FF",
        mutedText: "#9CA3AF",
        error: "#F87171",
        success: "#22C55E",
        warning: "#F59E0B",
        info: "#3B82F6",
      },
    },
  },
  plugins: [],
};
