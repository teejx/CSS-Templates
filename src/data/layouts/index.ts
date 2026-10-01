import { LayoutTemplate, ComponentCategory } from '../../types';
import { dashboardLayout } from './dashboard';
import { holyGrailLayout } from './holyGrail';
import { splitScreenLayout } from './splitScreen';
import { cardGridLayout } from './cardGrid';
import { masonryLayout } from './masonry';
import { stickyTocLayout } from './stickyToc';
import { stickyFooterLayout } from './stickyFooter';
import { magazineLayout } from './magazine';
import { appShellLayout } from './appShell';
import { alternatingFeaturesLayout } from './alternatingFeatures';
import { centeredAuthLayout } from './centeredAuth';
import { pricingMatrixLayout } from './pricingMatrix';

export const allLayouts: LayoutTemplate[] = [
  dashboardLayout,
  holyGrailLayout,
  splitScreenLayout,
  cardGridLayout,
  masonryLayout,
  stickyTocLayout,
  stickyFooterLayout,
  magazineLayout,
  appShellLayout,
  alternatingFeaturesLayout,
  centeredAuthLayout,
  pricingMatrixLayout,
];

export const layoutCategories = [
  { id: 'all', label: 'All Layouts', icon: 'Grid' },
  { id: 'application', label: 'Application & Dashboards', icon: 'LayoutDashboard' },
  { id: 'landing', label: 'Landing & Marketing', icon: 'Sparkles' },
  { id: 'grid', label: 'Grids & Masonry', icon: 'Columns' },
  { id: 'content', label: 'Content & Reading', icon: 'BookOpen' },
  { id: 'navigation', label: 'Navigation & Shells', icon: 'Compass' },
] as const;

export const futureComponentCategories: ComponentCategory[] = [
  { id: 'buttons', name: 'Buttons & CTAs', count: 0, status: 'coming-soon' },
  { id: 'cards', name: 'Interactive Cards', count: 0, status: 'coming-soon' },
  { id: 'navigation', name: 'Navbars & Menus', count: 0, status: 'coming-soon' },
  { id: 'modals', name: 'Modals & Dialogs', count: 0, status: 'coming-soon' },
  { id: 'forms', name: 'Form Controls', count: 0, status: 'coming-soon' },
  { id: 'tables', name: 'Data Tables', count: 0, status: 'coming-soon' },
];
