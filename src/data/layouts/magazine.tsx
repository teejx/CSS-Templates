import React from 'react';
import { LayoutTemplate, LayoutControlValues } from '../../types';

export const magazineLayout: LayoutTemplate = {
  id: 'magazine-editorial',
  title: 'Magazine Editorial Grid',
  category: 'content',
  description: 'Editorial newspaper layout with a prominent lead feature article spanning 2x2 grid units, flanked by breaking headlines and a 3-column sub-feature row.',
  tags: ['CSS Grid', 'Editorial', 'Magazine', 'News', 'Grid Spanning'],
  complexity: 'Advanced',
  cssTechnique: 'CSS Grid with grid-column: span 2 & grid-row: span 2 with responsive collapse',
  controlConfig: {
    hasGapControl: true,
    minGap: 12,
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
      <div className={`w-full min-h-[480px] bg-slate-950 text-slate-100 rounded-lg p-4 sm:p-6 border border-slate-800 text-xs ${isBoxed ? 'max-w-5xl mx-auto' : ''}`}>
        {/* Masthead */}
        <div className="border-b-2 border-slate-800 pb-3 mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-black tracking-tight text-white">THE CHRONICLE DISPATCH</h2>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">Vol. 48 — Issue #12 • Global Tech & Architecture</div>
          </div>
          <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 font-mono text-[10px] border border-amber-500/20">
            EDITORIAL SPREAD
          </span>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: `${gap}px` }}>
          {/* Hero Feature Article (Spans 2 columns on desktop) */}
          <article className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-xl p-5 flex flex-col justify-between group hover:border-slate-700 transition">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[9px] uppercase tracking-wider">Cover Story</span>
                <span className="text-[10px] text-slate-500">8 min read</span>
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-amber-200 transition leading-snug">
                The Next Decade of Autonomous Web Layouts: How CSS Grid & Subgrid Redefined Interface Engineering
              </h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                As display form factors diverge from wearable smartbands to expansive 8K curved monitors, layout designers have abandoned brittle rigid frameworks in favor of mathematical fluidity.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span className="font-medium text-slate-300">By Marcus Vance</span>
              <span className="text-amber-400 font-medium">Continue Reading →</span>
            </div>
          </article>

          {/* Flanking Side Column: Fast Breaking Stories */}
          <div className="flex flex-col justify-between space-y-3">
            {[
              { tag: 'Analysis', title: 'Subgrid adoption reaches 98% browser parity', time: '14m ago' },
              { tag: 'Opinion', title: 'Why 12-column frameworks are fading away', time: '1h ago' },
              { tag: 'Hardware', title: 'Foldable screens challenge vertical rhythm', time: '3h ago' },
            ].map((story, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800/80 rounded-xl p-3.5 flex-1 flex flex-col justify-between hover:border-slate-700 transition">
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{story.tag}</span>
                  <h4 className="font-semibold text-slate-200 text-xs mt-1 hover:text-amber-300 transition-colors line-clamp-2">
                    {story.title}
                  </h4>
                </div>
                <div className="text-[10px] text-slate-500 mt-2">{story.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Column Sub-Feature Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 mt-4" style={{ gap: `${gap}px` }}>
          {['Typography Hierarchy', 'Viewport Fluidity', 'Container Queries'].map((topic, i) => (
            <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-lg p-3">
              <span className="text-[10px] text-amber-400/80 font-mono">0{i + 1} / DISPATCH</span>
              <h5 className="font-semibold text-white text-xs mt-1">{topic}</h5>
              <p className="text-slate-400 text-[11px] mt-1">Deep analysis into practical implementation guidelines.</p>
            </div>
          ))}
        </div>
      </div>
    );
  },
  getCode: (framework, controls) => {
    const gap = controls.gap || 16;

    if (framework === 'tailwind') {
      return {
        filename: 'MagazineEditorial.html',
        language: 'html',
        code: `<!-- Magazine Editorial Layout with Tailwind CSS -->
<div class="max-w-7xl mx-auto p-6 text-slate-100">
  <!-- Masthead -->
  <header class="border-b-2 border-slate-800 pb-4 mb-6">
    <h1 class="text-3xl font-serif font-black">THE DAILY EDITORIAL</h1>
    <span class="text-xs text-slate-400">Issue #104 • Responsive Grid Edition</span>
  </header>

  <!-- Main Editorial Grid -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[${gap}px]">
    <!-- Lead Feature (2 cols) -->
    <article class="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between">
      <div>
        <span class="text-xs font-bold text-amber-400 uppercase tracking-wider">Top Story</span>
        <h2 class="text-2xl font-serif font-bold text-white mt-2">Fluid Grid Layout Architecture</h2>
        <p class="text-slate-400 mt-4 leading-relaxed">
          Modern editorial layout spanning multiple columns on desktop and collapsing to single-column viewports.
        </p>
      </div>
      <div class="mt-6 pt-4 border-t border-slate-800 text-sm text-slate-400">By Senior Editor</div>
    </article>

    <!-- Side Headlines -->
    <div class="space-y-[${gap}px]">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-5">
        <h3 class="font-bold text-white">Headline Story One</h3>
        <p class="text-xs text-slate-400 mt-1">Brief summary of recent updates.</p>
      </div>
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-5">
        <h3 class="font-bold text-white">Headline Story Two</h3>
        <p class="text-xs text-slate-400 mt-1">Further details and commentary.</p>
      </div>
    </div>
  </div>
</div>`,
      };
    }

    if (framework === 'react') {
      return {
        filename: 'MagazineLayout.tsx',
        language: 'tsx',
        code: `import React from 'react';

export const MagazineLayout: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="border-b-2 border-slate-800 pb-4 mb-6">
        <h1 className="text-3xl font-serif font-black text-white">THE MAGAZINE</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[${gap}px]">
        <article className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <span className="text-xs font-bold text-amber-400 uppercase">Cover Story</span>
          <h2 className="text-2xl font-serif font-bold text-white mt-2">
            The Evolution of Responsive Editorial Design
          </h2>
          <p className="text-slate-400 mt-4">
            Comprehensive multi-column layout with spanning hero unit.
          </p>
        </article>

        <aside className="space-y-[${gap}px]">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h3 className="font-semibold text-white">Side Dispatch 1</h3>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h3 className="font-semibold text-white">Side Dispatch 2</h3>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MagazineLayout;`,
      };
    }

    if (framework === 'vue') {
      return {
        filename: 'MagazineLayout.vue',
        language: 'vue',
        code: `<template>
  <div class="magazine-root">
    <header class="masthead">
      <h1>EDITORIAL GAZETTE</h1>
    </header>
    <div class="editorial-grid">
      <article class="lead-story">
        <slot name="lead">
          <h2>Lead Editorial Story</h2>
          <p>Main feature spanning 2 grid columns.</p>
        </slot>
      </article>
      <aside class="side-column">
        <slot name="side">
          <div class="side-item">Sub-story A</div>
          <div class="side-item">Sub-story B</div>
        </slot>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.magazine-root {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
}
.editorial-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${gap}px;
}
.lead-story, .side-item {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 0.75rem;
  padding: 1.5rem;
}
@media (max-width: 868px) {
  .editorial-grid {
    grid-template-columns: 1fr;
  }
}
</style>`,
      };
    }

    if (framework === 'svelte') {
      return {
        filename: 'MagazineLayout.svelte',
        language: 'svelte',
        code: `<div class="magazine-wrap">
  <div class="grid-body" style="gap: ${gap}px;">
    <div class="hero-item">
      <slot name="lead">Lead Story</slot>
    </div>
    <div class="side-items">
      <slot name="side">Side items</slot>
    </div>
  </div>
</div>

<style>
  .grid-body {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  .hero-item, .side-items {
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 0.75rem;
    padding: 1.5rem;
  }
  @media (max-width: 768px) {
    .grid-body {
      grid-template-columns: 1fr;
    }
  }
</style>`,
      };
    }

    // Pure HTML / CSS
    return {
      filename: 'magazine.html',
      language: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Magazine Editorial Layout</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: Georgia, serif;
      background: #090d16;
      color: #f8fafc;
      padding: 2rem;
    }
    .magazine-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: ${gap}px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .lead-story {
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 12px;
      padding: 2rem;
    }
    .side-column {
      display: flex;
      flex-direction: column;
      gap: ${gap}px;
    }
    .side-story {
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 12px;
      padding: 1.25rem;
      flex: 1;
    }
    @media (max-width: 768px) {
      .magazine-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="magazine-grid">
    <article class="lead-story">
      <h2>Major Breaking Lead Story</h2>
      <p>Multi-column editorial grid balancing hero features and rapid headline streams.</p>
    </article>
    <div class="side-column">
      <div class="side-story">Side Brief 1</div>
      <div class="side-story">Side Brief 2</div>
    </div>
  </div>
</body>
</html>`,
    };
  },
};
