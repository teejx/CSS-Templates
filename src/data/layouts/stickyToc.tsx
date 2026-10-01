import React from 'react';
import { LayoutTemplate, LayoutControlValues } from '../../types';

export const stickyTocLayout: LayoutTemplate = {
  id: 'sidebar-sticky-toc',
  title: 'Docs Reader with Sticky TOC',
  category: 'content',
  description: 'Technical documentation or article layout featuring a left navigation tree, central readable prose column, and a sticky right table of contents that tracks reading position.',
  tags: ['Documentation', 'Sticky', 'TOC', 'Blog', 'Technical Docs', 'Flexbox'],
  complexity: 'Intermediate',
  cssTechnique: 'Flexbox / Grid with position: sticky and overflow-y: auto independent scrolling',
  controlConfig: {
    hasGapControl: true,
    minGap: 16,
    maxGap: 40,
    gapStep: 4,
    hasContainerWidthControl: true,
  },
  defaultControls: {
    gap: 24,
    containerWidth: 'boxed',
  },
  renderPreview: (controls: LayoutControlValues, isDarkMode: boolean) => {
    const gap = controls.gap || 24;
    const isBoxed = controls.containerWidth === 'boxed';

    return (
      <div className={`w-full min-h-[480px] bg-slate-950 text-slate-100 rounded-lg p-4 border border-slate-800 text-xs ${isBoxed ? 'max-w-5xl mx-auto' : ''}`}>
        <div className="flex flex-col lg:flex-row min-h-[440px]" style={{ gap: `${gap}px` }}>
          {/* Left Nav (Docs Tree) */}
          <aside className="w-full lg:w-48 shrink-0 bg-slate-900/60 border border-slate-800 rounded-xl p-3.5 hidden md:block">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">Documentation</div>
            <div className="space-y-1 text-slate-400 text-[11px]">
              <div className="text-white font-medium px-2 py-1 rounded bg-slate-800/80">Overview</div>
              <div className="px-2 py-1 hover:text-slate-200">Installation</div>
              <div className="px-2 py-1 hover:text-slate-200">Layout Engines</div>
              <div className="px-2 py-1 hover:text-slate-200">CSS Grid Areas</div>
              <div className="px-2 py-1 hover:text-slate-200">Media Breakpoints</div>
              <div className="px-2 py-1 hover:text-slate-200">Performance</div>
            </div>
          </aside>

          {/* Central Article Body */}
          <main className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-5 overflow-y-auto max-h-[440px] space-y-4">
            <div>
              <span className="text-emerald-400 text-[10px] font-mono uppercase tracking-wider">Guide & Reference</span>
              <h2 className="text-lg font-bold text-white mt-1">Mastering Sticky Sidebars & Grid Flows</h2>
              <p className="text-slate-400 text-xs leading-relaxed mt-2">
                Modern responsive layouts often require contextual navigation elements to stay pinned in place while the user scrolls down an extensive technical article or API document.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 font-mono text-[11px] text-emerald-300">
              <code>position: sticky; top: 1.5rem; max-height: calc(100vh - 3rem);</code>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-200 mb-1">Preventing Parent Overflow Traps</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                A common pitfall with sticky containers is having an ancestor with <code className="text-slate-300">overflow: hidden</code>. Ensuring clean ancestor flow guarantees uninterrupted sticky behavior across all browsers.
              </p>
            </div>

            <div className="p-3 bg-slate-950/60 border border-slate-800/70 rounded-lg">
              <h4 className="text-xs font-medium text-slate-300">Mobile Adaptation Strategy</h4>
              <p className="text-[11px] text-slate-400 mt-1">
                On small screens (&lt; 1024px), the table of contents collapses into a compact expandable drawer or horizontal chip list, giving prose 100% width.
              </p>
            </div>
          </main>

          {/* Right Sticky TOC */}
          <aside className="w-full lg:w-44 shrink-0 bg-slate-900/60 border border-slate-800 rounded-xl p-3.5 hidden lg:block sticky top-0 self-start">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">On This Page</div>
            <ul className="space-y-1.5 text-[11px] border-l border-slate-800 pl-2">
              <li className="text-brand-400 font-medium -ml-[9px] border-l-2 border-brand-400 pl-2">Overview</li>
              <li className="text-slate-400 hover:text-slate-200">Parent Overflow Traps</li>
              <li className="text-slate-400 hover:text-slate-200">Mobile Adaptation</li>
              <li className="text-slate-400 hover:text-slate-200">Code Examples</li>
            </ul>
          </aside>
        </div>
      </div>
    );
  },
  getCode: (framework, controls) => {
    const gap = controls.gap || 24;

    if (framework === 'tailwind') {
      return {
        filename: 'DocsStickyToc.html',
        language: 'html',
        code: `<!-- Technical Docs with Sticky TOC - Tailwind CSS -->
<div class="max-w-7xl mx-auto p-6">
  <div class="flex flex-col lg:flex-row gap-[${gap}px]">
    <!-- Left Navigation -->
    <aside class="w-full lg:w-60 shrink-0 hidden md:block">
      <div class="sticky top-6 space-y-4">
        <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Guides</h4>
        <nav class="space-y-1 text-sm text-slate-300">
          <a href="#" class="block px-3 py-1.5 rounded-lg bg-slate-800 text-white font-medium">Getting Started</a>
          <a href="#" class="block px-3 py-1.5 rounded-lg text-slate-400 hover:text-white">Layout Core</a>
        </nav>
      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 min-w-0 prose prose-invert max-w-none">
      <h1 class="text-3xl font-extrabold text-white">Sticky Table of Contents</h1>
      <p class="text-slate-400 mt-4 leading-relaxed">
        The table of contents stays pinned on the right while readers navigate your content.
      </p>
    </main>

    <!-- Right Sticky TOC -->
    <aside class="w-full lg:w-56 shrink-0 hidden lg:block">
      <div class="sticky top-6 border-l border-slate-800 pl-4 space-y-2 text-xs">
        <span class="font-semibold text-slate-400 uppercase tracking-wider">On this page</span>
        <a href="#overview" class="block text-emerald-400 font-medium">Overview</a>
        <a href="#syntax" class="block text-slate-400 hover:text-white">Syntax</a>
      </div>
    </aside>
  </div>
</div>`,
      };
    }

    if (framework === 'react') {
      return {
        filename: 'DocsLayout.tsx',
        language: 'tsx',
        code: `import React from 'react';

export interface DocsLayoutProps {
  sidebar?: React.ReactNode;
  toc?: React.ReactNode;
  children: React.ReactNode;
}

export const DocsLayout: React.FC<DocsLayoutProps> = ({ sidebar, toc, children }) => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-[${gap}px]">
        {/* Left Docs Nav */}
        <aside className="w-full lg:w-60 shrink-0 hidden md:block">
          <div className="sticky top-6">
            {sidebar || <nav className="space-y-2 text-sm text-slate-400">Navigation links...</nav>}
          </div>
        </aside>

        {/* Article Body */}
        <main className="flex-1 min-w-0">
          {children}
        </main>

        {/* Right Sticky TOC */}
        <aside className="w-full lg:w-56 shrink-0 hidden lg:block">
          <div className="sticky top-6 border-l border-slate-800 pl-4">
            {toc || <div className="text-xs text-slate-400">Table of contents...</div>}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DocsLayout;`,
      };
    }

    if (framework === 'vue') {
      return {
        filename: 'DocsStickyToc.vue',
        language: 'vue',
        code: `<template>
  <div class="docs-container">
    <aside class="left-nav">
      <div class="sticky-box">
        <slot name="navigation">
          <p>Nav Links</p>
        </slot>
      </div>
    </aside>

    <main class="reading-body">
      <slot />
    </main>

    <aside class="right-toc">
      <div class="sticky-box">
        <slot name="toc">
          <p>On This Page</p>
        </slot>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.docs-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  gap: ${gap}px;
}
.left-nav, .right-toc {
  width: 240px;
  flex-shrink: 0;
}
.sticky-box {
  position: sticky;
  top: 1.5rem;
}
.reading-body {
  flex: 1;
  min-width: 0;
}
@media (max-width: 1024px) {
  .right-toc { display: none; }
}
@media (max-width: 768px) {
  .left-nav { display: none; }
}
</style>`,
      };
    }

    if (framework === 'svelte') {
      return {
        filename: 'DocsStickyToc.svelte',
        language: 'svelte',
        code: `<div class="docs-wrapper" style="gap: ${gap}px;">
  <aside class="left-side">
    <div class="sticky-item">
      <slot name="nav">Navigation</slot>
    </div>
  </aside>

  <main class="content">
    <slot />
  </main>

  <aside class="right-side">
    <div class="sticky-item">
      <slot name="toc">TOC</slot>
    </div>
  </aside>
</div>

<style>
  .docs-wrapper {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.5rem;
  }
  .left-side, .right-side {
    width: 220px;
    flex-shrink: 0;
  }
  .sticky-item {
    position: sticky;
    top: 1.5rem;
  }
  .content {
    flex: 1;
    min-width: 0;
  }
  @media (max-width: 900px) {
    .right-side { display: none; }
  }
  @media (max-width: 640px) {
    .left-side { display: none; }
  }
</style>`,
      };
    }

    // Pure HTML / CSS
    return {
      filename: 'sticky-toc.html',
      language: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sticky Table of Contents Layout</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, sans-serif;
      background: #090d16;
      color: #f8fafc;
      padding: 2rem;
    }
    .layout-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      gap: ${gap}px;
      align-items: flex-start;
    }
    .nav-sidebar {
      width: 220px;
      position: sticky;
      top: 2rem;
    }
    .article-main {
      flex: 1;
      min-width: 0;
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 12px;
      padding: 2rem;
      line-height: 1.6;
    }
    .toc-sidebar {
      width: 200px;
      position: sticky;
      top: 2rem;
      border-left: 2px solid #1e293b;
      padding-left: 1rem;
    }
    @media (max-width: 1024px) {
      .toc-sidebar { display: none; }
    }
    @media (max-width: 768px) {
      .nav-sidebar { display: none; }
    }
  </style>
</head>
<body>
  <div class="layout-container">
    <aside class="nav-sidebar">
      <h3>Docs</h3>
    </aside>
    <main class="article-main">
      <h1>Documentation Guide</h1>
      <p>Content scrolls continuously while the table of contents remains anchored.</p>
    </main>
    <aside class="toc-sidebar">
      <h4>On This Page</h4>
    </aside>
  </div>
</body>
</html>`,
    };
  },
};
