import React from 'react';
import { LayoutTemplate, LayoutControlValues } from '../../types';

export const cardGridLayout: LayoutTemplate = {
  id: 'auto-fit-card-grid',
  title: 'Auto-Fit Responsive Card Grid',
  category: 'grid',
  description: 'Fluid, media-query-free responsive grid using repeat(auto-fit, minmax(260px, 1fr)). Automatically arranges items dynamically depending on viewport space.',
  tags: ['CSS Grid', 'Auto-Fit', 'Minmax', 'Responsive Cards', 'Zero Media Queries'],
  complexity: 'Beginner',
  cssTechnique: 'grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)) with auto-flow dense',
  controlConfig: {
    hasGapControl: true,
    minGap: 12,
    maxGap: 36,
    gapStep: 4,
    hasColumnsControl: true, // controls min column width
    minColumns: 200,
    maxColumns: 340,
    hasContainerWidthControl: true,
  },
  defaultControls: {
    gap: 16,
    columns: 240, // minmax min width
    containerWidth: 'boxed',
  },
  renderPreview: (controls: LayoutControlValues, isDarkMode: boolean) => {
    const gap = controls.gap || 16;
    const minWidth = controls.columns || 240;

    const cards = [
      { tag: 'Design', title: 'Fluid Typography Scale', desc: 'Implementing clamp() for dynamic screen sizing.', author: 'Alex Chen', time: '4 min' },
      { tag: 'CSS', title: 'Subgrid Deep Dive', desc: 'Aligning nested card elements across disparate parents.', author: 'Sarah Lin', time: '7 min' },
      { tag: 'Layout', title: 'Container Queries 101', desc: 'Component-level responsive breakpoints made easy.', author: 'Mark R.', time: '5 min' },
      { tag: 'Performance', title: 'Zero Runtime Styling', desc: 'Compile-time utility extraction benchmarks.', author: 'David K.', time: '9 min' },
      { tag: 'Accessibility', title: 'Accessible Focus Rings', desc: 'Polished keyboard navigation outlines.', author: 'Elena T.', time: '3 min' },
      { tag: 'Architecture', title: 'Modern Design Systems', desc: 'Tokenizing colors, spacing, and typography.', author: 'TJ Dev', time: '6 min' },
    ];

    return (
      <div className="w-full min-h-[460px] bg-slate-950 text-slate-100 rounded-lg p-4 sm:p-6 border border-slate-800">
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <h3 className="font-bold text-white text-sm sm:text-base">Resource Library</h3>
            <p className="text-slate-400 text-xs">Dynamic auto-fit grid re-arranging without media queries.</p>
          </div>
          <span className="text-[11px] font-mono text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded border border-brand-500/20 self-start sm:self-auto">
            minmax({minWidth}px, 1fr)
          </span>
        </div>

        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}px, 1fr))`,
            gap: `${gap}px`,
          }}
        >
          {cards.map((c, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800/90 hover:border-brand-500/50 rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-semibold text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded">
                    {c.tag}
                  </span>
                  <span className="text-[10px] text-slate-500">{c.time}</span>
                </div>
                <h4 className="font-semibold text-white text-sm group-hover:text-brand-300 transition-colors">
                  {c.title}
                </h4>
                <p className="text-slate-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                  {c.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-medium text-slate-300">{c.author}</span>
                <span className="text-brand-400 text-xs font-semibold group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
  getCode: (framework, controls) => {
    const gap = controls.gap || 16;
    const minWidth = controls.columns || 260;

    if (framework === 'tailwind') {
      return {
        filename: 'CardGrid.html',
        language: 'html',
        code: `<!-- Auto-Fit Card Grid with Tailwind CSS -->
<div class="max-w-7xl mx-auto p-6">
  <div class="grid grid-cols-[repeat(auto-fit,minmax(${minWidth}px,1fr))] gap-[${gap}px]">
    <!-- Card Item -->
    <div class="bg-slate-900 border border-slate-800 hover:border-emerald-500/40 rounded-xl p-6 transition flex flex-col justify-between">
      <div>
        <span class="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">Development</span>
        <h3 class="text-lg font-bold text-white mt-3">Fluid Grid Systems</h3>
        <p class="text-slate-400 text-sm mt-2">Zero-media-query responsiveness leveraging CSS Grid minmax.</p>
      </div>
      <div class="mt-6 pt-4 border-t border-slate-800 flex justify-between text-xs text-slate-400">
        <span>By Antigravity</span>
        <a href="#" class="text-emerald-400 font-semibold hover:underline">Read →</a>
      </div>
    </div>
  </div>
</div>`,
      };
    }

    if (framework === 'react') {
      return {
        filename: 'AutoFitCardGrid.tsx',
        language: 'tsx',
        code: `import React from 'react';

export interface CardItem {
  id: string | number;
  tag: string;
  title: string;
  description: string;
  author?: string;
}

export interface AutoFitCardGridProps {
  items?: CardItem[];
}

export const AutoFitCardGrid: React.FC<AutoFitCardGridProps> = ({ items = [] }) => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div
        className="grid"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(${minWidth}px, 1fr))',
          gap: '${gap}px',
        }}
      >
        {items.map((item) => (
          <article
            key={item.id}
            className="bg-slate-900 border border-slate-800 hover:border-emerald-500/40 rounded-xl p-6 transition flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                {item.tag}
              </span>
              <h3 className="text-lg font-bold text-white mt-3">{item.title}</h3>
              <p className="text-slate-400 text-sm mt-2">{item.description}</p>
            </div>
            {item.author && (
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
                {item.author}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

export default AutoFitCardGrid;`,
      };
    }

    if (framework === 'vue') {
      return {
        filename: 'AutoFitCardGrid.vue',
        language: 'vue',
        code: `<template>
  <div class="card-grid-container">
    <div class="grid-wrap">
      <slot>
        <div class="card" v-for="i in 6" :key="i">
          <span class="badge">Article #{{ i }}</span>
          <h3>Modern Card Title</h3>
          <p>Auto-fit responsive item without media queries.</p>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.card-grid-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
}
.grid-wrap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${minWidth}px, 1fr));
  gap: ${gap}px;
}
.card {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>`,
      };
    }

    if (framework === 'svelte') {
      return {
        filename: 'AutoFitCardGrid.svelte',
        language: 'svelte',
        code: `<div class="card-grid" style="gap: ${gap}px;">
  <slot>
    {#each Array(6) as _, i}
      <div class="card">
        <h4>Auto-Fit Item {i + 1}</h4>
        <p>Responsive CSS Grid minmax card.</p>
      </div>
    {/each}
  </slot>
</div>

<style>
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${minWidth}px, 1fr));
    padding: 1.5rem;
  }
  .card {
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 0.75rem;
    padding: 1.25rem;
  }
</style>`,
      };
    }

    // Pure HTML / CSS
    return {
      filename: 'card-grid.html',
      language: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Auto-Fit Responsive Card Grid</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, sans-serif;
      background: #090d16;
      color: #f8fafc;
      padding: 2rem;
    }
    .auto-fit-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(${minWidth}px, 1fr));
      gap: ${gap}px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .card {
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 12px;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 180px;
    }
    .tag {
      font-size: 0.75rem;
      color: #34d399;
      background: rgba(16, 185, 129, 0.1);
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      width: fit-content;
      margin-bottom: 0.75rem;
    }
    h3 { font-size: 1.15rem; margin-bottom: 0.5rem; }
    p { color: #94a3b8; font-size: 0.9rem; line-height: 1.5; }
  </style>
</head>
<body>
  <div class="auto-fit-grid">
    <div class="card">
      <div>
        <div class="tag">Architecture</div>
        <h3>CSS Grid Minmax</h3>
        <p>Adapts fluidly across 320px phone screens up to 4K ultra-wide monitors without breakpoint queries.</p>
      </div>
    </div>
    <div class="card">
      <div>
        <div class="tag">Flexibility</div>
        <h3>Auto-Fit Expansion</h3>
        <p>Fills entire container width evenly while strictly honoring the specified minimum item bounds.</p>
      </div>
    </div>
    <div class="card">
      <div>
        <div class="tag">Performance</div>
        <h3>Hardware Accelerated</h3>
        <p>Native browser rendering with zero runtime layout thrashing.</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    };
  },
};
