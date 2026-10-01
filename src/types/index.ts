import React from 'react';

export type FrameworkType = 'html-css' | 'tailwind' | 'react' | 'vue' | 'svelte';

export type LayoutCategory =
  | 'all'
  | 'application'
  | 'landing'
  | 'grid'
  | 'content'
  | 'navigation';

export type ViewportMode = 'desktop' | 'tablet' | 'mobile' | 'fluid';

export interface LayoutControlValues {
  gap: number; // in pixels or tailwind spacing
  columns?: number;
  sidebarPosition?: 'left' | 'right';
  stickyHeader?: boolean;
  containerWidth?: 'fluid' | 'boxed';
  padding?: number;
}

export interface LayoutControlConfig {
  hasGapControl?: boolean;
  minGap?: number;
  maxGap?: number;
  gapStep?: number;
  hasColumnsControl?: boolean;
  minColumns?: number;
  maxColumns?: number;
  hasSidebarPositionControl?: boolean;
  hasStickyHeaderControl?: boolean;
  hasContainerWidthControl?: boolean;
}

export interface LayoutTemplate {
  id: string;
  title: string;
  category: Exclude<LayoutCategory, 'all'>;
  description: string;
  tags: string[];
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  cssTechnique: string;
  controlConfig: LayoutControlConfig;
  defaultControls: LayoutControlValues;
  renderPreview: (controls: LayoutControlValues, isDarkMode: boolean) => React.ReactNode;
  getCode: (framework: FrameworkType, controls: LayoutControlValues) => {
    code: string;
    language: string;
    filename: string;
  };
}

export interface ComponentCategory {
  id: string;
  name: string;
  count: number;
  status: 'available' | 'coming-soon';
}
