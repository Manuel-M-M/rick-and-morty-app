export const theme = {
  colors: {
    bg: "#202329",
    surface: "#2c2f36",
    header: "#0b0c10",
    text: "#f5f5f5",
    accent: "#97ce4c",
    border: "#333",
  },
  font: {
    family: "'Segoe UI', sans-serif",
    size: {
      base: "0.9rem",
      heading: "1rem",
      small: "0.8rem",
    },
  },
  spacing: (factor: number) => `${factor * 8}px`,
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
  shadow: {
    glow: "0 0 20px rgba(151, 206, 76, 0.25)",
  },
};
