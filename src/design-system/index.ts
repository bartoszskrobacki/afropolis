/**
 * Afropolis Design System
 * Portable design system that can be used across projects
 *
 * Usage:
 * import { colors, typography, spacing, Container, Section } from '@/design-system'
 */

// Export all tokens
export * from './tokens';

// Export all components
export { Container } from './components/Container';
export { Section } from './components/Section';

// Re-export types
export type { ContainerProps } from './components/Container';
export type { SectionProps } from './components/Section';
