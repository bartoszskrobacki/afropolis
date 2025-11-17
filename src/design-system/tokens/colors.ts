/**
 * Afropolis Brand Colors
 * These colors define the brand identity and can be used across components
 */
export const colors = {
  // Primary brand colors
  brand: {
    blue: '#1a3a8b',
    orange: '#f9a626',
    green: '#059669',
  },

  // Neutral colors
  neutral: {
    white: '#ffffff',
    black: '#000000',
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
  },

  // Semantic colors
  semantic: {
    success: '#059669',
    warning: '#f9a626',
    error: '#dc2626',
    info: '#1a3a8b',
  },
} as const;

export type ColorPalette = typeof colors;
