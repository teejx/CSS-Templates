import React from 'react';
import { LayoutTemplate, LayoutControlValues } from '../../types';

export const holyGrailLayout: LayoutTemplate = {
  id: 'holy-grail',
  title: 'Holy Grail Layout',
  category: 'application',
  description: 'The definitive web layout structure: full-width header, fluid main content flanked by two equal/proportional sidebars, and a full-width footer, collapsing gracefully on mobile.',
  tags: ['CSS Grid', 'Classic', '3-Column', 'Responsive', 'Flexbox'],
  complexity: 'Beginner',
  cssTechnique: 'CSS Grid with named template areas: header, nav, main, aside, footer',
  controlConfig: {
    hasGapControl: true,
    minGap: 8,
    maxGap: 32,
    gapStep: 4,
    hasContainerWidthControl: true,
  },
  defaultControls: {
    gap: 16,
    containerWidth: 'boxed',
  },
  renderPreview: (controls: LayoutControlValues, isDarkMode: boolean) => {
    const gap = controls.gap || 16;
    const isBoxed = controls.containerWidth === 'boxed';

    return (
      <div className={`w-full min-h-[460px] bg-slate-950 text-slate-100 rounded-lg p-3 sm:p-4 border border-slate-800 text-xs flex flex-col justify-between ${isBoxed ? 'max-w-4xl mx-auto' : ''}`}>
        {/* Header */}
        <header className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center font-bold text-white text-[10px]">HG</div>
            <span className="font-semibold text-white">Holy Grail System</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400 text-[11px]">
            <span className="hidden sm:inline">Docs</span>
            <span className="hidden sm:inline">Showcase</span>
            <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-mono text-[10px]">Grid Areas</span>
          </div>
        </header>

        {/* 3-Column Middle Body */}
        <div
          className="my-3 flex-1 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5"
          style={{ gap: `${gap}px` }}
        >
          {/* Navigation Sidebar */}
          <nav className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 hidden md:flex md:flex-col justify-between">
            <div>
              <div className="font-semibold text-slate-300 text-[11px] mb-2 uppercase tracking-wider">Navigation</div>
              <ul className="space-y-1.5 text-slate-400">
                <li className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 font-medium">Getting Started</li>
                <li className="px-2 py-1 hover:text-slate-200">Layout Primitives</li>
                <li className="px-2 py-1 hover:text-slate-200">Breakpoints</li>
                <li className="px-2 py-1 hover:text-slate-200">Typography</li>
              </ul>
            </div>
            <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-800">v2.4.0 active</div>
          </nav>

          {/* Main Reading Content */}
          <main className="md:col-span-2 lg:col-span-3 bg-slate-900 border border-slate-800 rounded-lg p-4 flex flex-col justify-between">
            <div>
              <div className="inline-block px-2 py-0.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 rounded mb-2 border border-emerald-500/20">
                grid-template-areas: "nav main aside"
              </div>
              <h3 className="text-base font-bold text-white mb-2">Primary Content Region</h3>
              <p className="text-slate-400 leading-relaxed text-[11px] mb-3">
                The Holy Grail layout represents the cornerstone of web design patterns. On desktop screens, it seamlessly splits into navigation, central content, and contextual aside metadata.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="p-2.5 rounded bg-slate-950/60 border border-slate-800/80">
                  <div className="text-slate-300 font-medium">Fluid Flexing</div>
                  <div className="text-[10px] text-slate-500">Expands to consume remaining space</div>
                </div>
                <div className="p-2.5 rounded bg-slate-950/60 border border-slate-800/80">
                  <div className="text-slate-300 font-medium">Zero Overlap</div>
                  <div className="text-[10px] text-slate-500">Sidebars maintain strict sizing</div>
                </div>
              </div>
            </div>
            <div className="text-[11px] text-slate-500 mt-4 flex items-center justify-between pt-2 border-t border-slate-800/60">
              <span>Main area automatically wraps and scrolls</span>
              <span className="text-blue-400 font-medium cursor-pointer">Read more →</span>
            </div>
          </main>

          {/* Right Aside */}
          <aside className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 hidden lg:flex lg:flex-col justify-between">
            <div>
              <div className="font-semibold text-slate-300 text-[11px] mb-2 uppercase tracking-wider">Related Info</div>
              <div className="p-2 rounded bg-slate-950/50 border border-slate-800 mb-2">
                <div className="text-[11px] font-medium text-slate-300">Quick Tip</div>
                <div className="text-[10px] text-slate-400 mt-1">Use CSS Grid named areas for semantic structure.</div>
              </div>
              <div className="p-2 rounded bg-slate-950/50 border border-slate-800">
                <div className="text-[11px] font-medium text-slate-300">Responsiveness</div>
                <div className="text-[10px] text-slate-400 mt-1">Collapses to 1 column on screens &lt; 768px.</div>
              </div>
            </div>
            <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-800">Aside Widget</div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 flex items-center justify-between text-slate-400 text-[11px]">
          <div>© 2026 Holy Grail Template</div>
          <div className="flex gap-4">
            <span className="hover:text-slate-200 cursor-pointer">Privacy</span>
            <span className="hover:text-slate-200 cursor-pointer">Terms</span>
            <span className="hover:text-slate-200 cursor-pointer">Status</span>
          </div>
        </footer>
      </div>
    );
  },
  getCode: (framework, controls) => {
    const gap = controls.gap || 16;
    const isBoxed = controls.containerWidth === 'boxed';
    const containerClass = isBoxed ? 'max-w-6xl mx-auto' : 'w-full';

    if (framework === 'tailwind') {
      return {
        filename: 'HolyGrail.html',
        language: 'html',
        code: `<!-- Holy Grail Layout with Tailwind CSS -->
<div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col p-4">
  <div class="${containerClass} w-full flex-1 flex flex-col gap-[${gap}px]">
    <!-- Header -->
    <header class="bg-slate-900 border border-slate-800 rounded-xl px-6 py-4 flex items-center justify-between">
      <div class="font-bold text-lg text-white">BrandLogo</div>
      <nav class="flex gap-6 text-sm text-slate-400">
        <a href="#" class="hover:text-white">Home</a>
        <a href="#" class="hover:text-white">Features</a>
        <a href="#" class="hover:text-white">Contact</a>
      </nav>
    </header>

    <!-- 3-Column Middle Body -->
    <div class="flex-1 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-[${gap}px]">
      <!-- Left Navigation -->
      <nav class="md:col-span-1 lg:col-span-3 bg-slate-900 border border-slate-800 rounded-xl p-5">
        <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Navigation</h3>
        <ul class="space-y-2 text-sm text-slate-300">
          <li><a href="#" class="text-blue-400 font-medium">Introduction</a></li>
          <li><a href="#" class="hover:text-white">Architecture</a></li>
          <li><a href="#" class="hover:text-white">Components</a></li>
        </ul>
      </nav>

      <!-- Main Content -->
      <main class="md:col-span-3 lg:col-span-6 bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h1 class="text-2xl font-bold text-white mb-4">Main Content Area</h1>
        <p class="text-slate-400 leading-relaxed">
          This is the primary content block. On mobile screens it stacks neatly under the header and navigation.
        </p>
      </main>

      <!-- Right Aside -->
      <aside class="md:col-span-4 lg:col-span-3 bg-slate-900 border border-slate-800 rounded-xl p-5">
        <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">On This Page</h3>
        <p class="text-xs text-slate-400">Contextual widgets, ads, or quick navigation links.</p>
      </aside>
    </div>

    <!-- Footer -->
    <footer class="bg-slate-900 border border-slate-800 rounded-xl px-6 py-4 flex justify-between text-sm text-slate-400">
      <span>© 2026 Layout Platform</span>
      <div class="flex gap-4">
        <a href="#" class="hover:text-white">Privacy</a>
        <a href="#" class="hover:text-white">Terms</a>
      </div>
    </footer>
  </div>
</div>`,
      };
    }

    if (framework === 'react') {
      return {
        filename: 'HolyGrailLayout.tsx',
        language: 'tsx',
        code: `import React from 'react';

export interface HolyGrailProps {
  navContent?: React.ReactNode;
  children: React.ReactNode;
  asideContent?: React.ReactNode;
}

export const HolyGrailLayout: React.FC<HolyGrailProps> = ({
  navContent,
  children,
  asideContent,
}) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col p-4">
      <div className="${containerClass} w-full flex-1 flex flex-col gap-[${gap}px]">
        {/* Header */}
        <header className="bg-slate-900 border border-slate-800 rounded-xl px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-lg text-white">HolyGrail</div>
          <nav className="flex gap-6 text-sm text-slate-400">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#docs" className="hover:text-white">Docs</a>
          </nav>
        </header>

        {/* Middle Body */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-[${gap}px]">
          <nav className="md:col-span-1 lg:col-span-3 bg-slate-900 border border-slate-800 rounded-xl p-5">
            {navContent || (
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="text-blue-400 font-medium">Getting Started</li>
                <li>Layouts</li>
                <li>Utilities</li>
              </ul>
            )}
          </nav>

          <main className="md:col-span-3 lg:col-span-6 bg-slate-900 border border-slate-800 rounded-xl p-6">
            {children}
          </main>

          <aside className="md:col-span-4 lg:col-span-3 bg-slate-900 border border-slate-800 rounded-xl p-5">
            {asideContent || (
              <div className="text-sm text-slate-400">
                <h4 className="font-semibold text-slate-200 mb-2">Meta Info</h4>
                <p>Additional widgets or contextual navigation.</p>
              </div>
            )}
          </aside>
        </div>

        {/* Footer */}
        <footer className="bg-slate-900 border border-slate-800 rounded-xl px-6 py-4 flex justify-between text-sm text-slate-400">
          <span>© 2026 HolyGrail Platform</span>
          <span>All rights reserved</span>
        </footer>
      </div>
    </div>
  );
};

export default HolyGrailLayout;`,
      };
    }

    if (framework === 'vue') {
      return {
        filename: 'HolyGrail.vue',
        language: 'vue',
        code: `<template>
  <div class="holy-grail-container">
    <header class="header">
      <div class="logo">HolyGrail</div>
      <nav class="top-nav">
        <a href="#">Home</a>
        <a href="#">Docs</a>
      </nav>
    </header>

    <div class="middle-layout">
      <nav class="sidebar-nav">
        <slot name="nav">
          <p>Nav Links</p>
        </slot>
      </nav>

      <main class="main-body">
        <slot />
      </main>

      <aside class="aside-panel">
        <slot name="aside">
          <p>Aside Panel</p>
        </slot>
      </aside>
    </div>

    <footer class="footer">
      <p>© 2026 HolyGrail Layout</p>
    </footer>
  </div>
</template>

<style scoped>
.holy-grail-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: ${gap}px;
  padding: 1rem;
  background: #020617;
  color: #f8fafc;
}
.header, .footer {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 0.75rem;
  padding: 1rem 1.5rem;
}
.middle-layout {
  flex: 1;
  display: grid;
  grid-template-columns: 240px 1fr 240px;
  gap: ${gap}px;
}
.sidebar-nav, .main-body, .aside-panel {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 0.75rem;
  padding: 1.5rem;
}
@media (max-width: 900px) {
  .middle-layout {
    grid-template-columns: 1fr;
  }
}
</style>`,
      };
    }

    if (framework === 'svelte') {
      return {
        filename: 'HolyGrail.svelte',
        language: 'svelte',
        code: `<div class="holy-grail">
  <header class="box header">
    <h2>Holy Grail Layout</h2>
  </header>

  <div class="body-row" style="gap: ${gap}px;">
    <nav class="box nav">
      <slot name="nav">Navigation</slot>
    </nav>
    <main class="box main">
      <slot>Main content</slot>
    </main>
    <aside class="box aside">
      <slot name="aside">Aside</slot>
    </aside>
  </div>

  <footer class="box footer">
    <p>Footer</p>
  </footer>
</div>

<style>
  .holy-grail {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 1rem;
    gap: 1rem;
    background: #020617;
    color: #f1f5f9;
  }
  .box {
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 0.5rem;
    padding: 1.25rem;
  }
  .body-row {
    flex: 1;
    display: grid;
    grid-template-columns: 220px 1fr 220px;
  }
  @media (max-width: 800px) {
    .body-row {
      grid-template-columns: 1fr;
    }
  }
</style>`,
      };
    }

    // HTML / CSS
    return {
      filename: 'holy-grail.html',
      language: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Holy Grail CSS Layout</title>
  <style>
    :root {
      --gap: ${gap}px;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, sans-serif;
      background: #030712;
      color: #f3f4f6;
      padding: 1rem;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .holy-grail-grid {
      display: grid;
      grid-template-areas:
        "header header header"
        "nav    main   aside"
        "footer footer footer";
      grid-template-columns: 240px 1fr 240px;
      grid-template-rows: auto 1fr auto;
      gap: var(--gap);
      flex: 1;
      ${isBoxed ? 'max-width: 1200px; margin: 0 auto; width: 100%;' : ''}
    }
    header { grid-area: header; background: #111827; border: 1px solid #1f2937; padding: 1.25rem; border-radius: 8px; }
    nav    { grid-area: nav;    background: #111827; border: 1px solid #1f2937; padding: 1.25rem; border-radius: 8px; }
    main   { grid-area: main;   background: #111827; border: 1px solid #1f2937; padding: 1.5rem; border-radius: 8px; }
    aside  { grid-area: aside;  background: #111827; border: 1px solid #1f2937; padding: 1.25rem; border-radius: 8px; }
    footer { grid-area: footer; background: #111827; border: 1px solid #1f2937; padding: 1.25rem; border-radius: 8px; }

    @media (max-width: 768px) {
      .holy-grail-grid {
        grid-template-areas:
          "header"
          "nav"
          "main"
          "aside"
          "footer";
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="holy-grail-grid">
    <header>Header Bar</header>
    <nav>Navigation Sidebar</nav>
    <main>Main Reading Content</main>
    <aside>Right Widget Aside</aside>
    <footer>Footer & Legal</footer>
  </div>
</body>
</html>`,
    };
  },
};
