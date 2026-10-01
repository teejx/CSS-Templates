import React from 'react';
import { LayoutTemplate, LayoutControlValues } from '../../types';

export const masonryLayout: LayoutTemplate = {
  id: 'masonry-gallery',
  title: 'Masonry Pinterest Grid',
  category: 'grid',
  description: 'Variable-height Pinterest-style masonry grid using CSS multi-columns (columns: 3 240px) and break-inside: avoid. Prevents jagged gaps between staggered cards.',
  tags: ['Masonry', 'CSS Columns', 'Pinterest', 'Gallery', 'Dynamic Heights'],
  complexity: 'Intermediate',
  cssTechnique: 'CSS multi-columns (column-count & column-gap) with break-inside: avoid-column',
  controlConfig: {
    hasGapControl: true,
    minGap: 12,
    maxGap: 32,
    gapStep: 4,
    hasColumnsControl: true,
    minColumns: 2,
    maxColumns: 4,
  },
  defaultControls: {
    gap: 16,
    columns: 3,
  },
  renderPreview: (controls: LayoutControlValues, isDarkMode: boolean) => {
    const gap = controls.gap || 16;
    const cols = controls.columns || 3;

    const items = [
      { h: 'h-32', title: 'Minimalist Typography', tag: 'Visual', desc: 'Serif and sans-serif contrast pairing.' },
      { h: 'h-48', title: 'Color Palettes 2026', tag: 'Inspiration', desc: 'Deep obsidian themes with luminous emerald and cyan accents for developer tools and dark interfaces.' },
      { h: 'h-28', title: 'Responsive Icons', tag: 'Vector', desc: 'Scalable SVG symbols.' },
      { h: 'h-52', title: 'Micro-Interactions', tag: 'Animation', desc: 'Crafting 60fps spring transitions on card hovers and layout shifts without layout recalculation penalties.' },
      { h: 'h-36', title: 'Component States', tag: 'UI Kit', desc: 'Active, focused, disabled, and loading states.' },
      { h: 'h-44', title: 'Spatial Hierarchy', tag: 'Layout', desc: 'Balancing whitespace and density for data-rich dashboards.' },
    ];

    return (
      <div className="w-full min-h-[460px] bg-slate-950 text-slate-100 rounded-lg p-4 sm:p-6 border border-slate-800">
        <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h3 className="font-bold text-white text-sm sm:text-base">Masonry Visual Stream</h3>
            <p className="text-slate-400 text-xs">Dynamic card heights packed without vertical whitespace holes.</p>
          </div>
          <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
            columns: {cols}
          </span>
        </div>

        <div
          className="w-full"
          style={{
            columnCount: cols,
            columnGap: `${gap}px`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-xl p-4 transition-all duration-200 mb-4 inline-block w-full break-inside-avoid shadow-sm group hover:-translate-y-0.5"
              style={{ marginBottom: `${gap}px` }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                  {item.tag}
                </span>
                <span className="text-[10px] text-slate-500">#{i + 1}</span>
              </div>
              <h4 className="font-semibold text-white text-xs sm:text-sm group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
                <span>Dynamic Height</span>
                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
  getCode: (framework, controls) => {
    const gap = controls.gap || 16;
    const cols = controls.columns || 3;

    if (framework === 'tailwind') {
      return {
        filename: 'MasonryGrid.html',
        language: 'html',
        code: `<!-- Masonry Grid with Tailwind CSS -->
<div class="max-w-6xl mx-auto p-6">
  <div class="columns-1 sm:columns-2 lg:columns-${cols} gap-[${gap}px]">
    <!-- Masonry Card -->
    <div class="break-inside-avoid mb-[${gap}px] bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/40 transition">
      <span class="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">Inspiration</span>
      <h3 class="text-base font-bold text-white mt-2">Card with Variable Height</h3>
      <p class="text-slate-400 text-sm mt-2">
        Masonry cards naturally fit together without leaving blank vertical spaces under short cards.
      </p>
    </div>
  </div>
</div>`,
      };
    }

    if (framework === 'react') {
      return {
        filename: 'MasonryGrid.tsx',
        language: 'tsx',
        code: `import React from 'react';

export interface MasonryItem {
  id: string | number;
  title: string;
  tag: string;
  content: string;
}

export interface MasonryGridProps {
  items?: MasonryItem[];
}

export const MasonryGrid: React.FC<MasonryGridProps> = ({ items = [] }) => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div
        className="w-full"
        style={{
          columnCount: ${cols},
          columnGap: '${gap}px',
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="inline-block w-full break-inside-avoid bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/40 transition mb-[${gap}px]"
          >
            <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
              {item.tag}
            </span>
            <h3 className="text-base font-bold text-white mt-2">{item.title}</h3>
            <p className="text-slate-400 text-sm mt-2">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;`,
      };
    }

    if (framework === 'vue') {
      return {
        filename: 'MasonryGrid.vue',
        language: 'vue',
        code: `<template>
  <div class="masonry-wrap">
    <div class="masonry-columns">
      <slot>
        <div v-for="i in 8" :key="i" class="masonry-item">
          <span class="tag">Pin #{{ i }}</span>
          <h4>Masonry Card Title</h4>
          <p>Dynamic content naturally flowing into columns.</p>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.masonry-wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
}
.masonry-columns {
  column-count: ${cols};
  column-gap: ${gap}px;
}
.masonry-item {
  display: inline-block;
  width: 100%;
  break-inside: avoid;
  margin-bottom: ${gap}px;
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 0.75rem;
  padding: 1.25rem;
}
@media (max-width: 768px) {
  .masonry-columns {
    column-count: 1;
  }
}
</style>`,
      };
    }

    if (framework === 'svelte') {
      return {
        filename: 'MasonryGrid.svelte',
        language: 'svelte',
        code: `<div class="masonry-container">
  <div class="masonry-flow" style="column-count: ${cols}; column-gap: ${gap}px;">
    <slot>
      {#each Array(6) as _, i}
        <div class="card" style="margin-bottom: ${gap}px;">
          <h3>Pin {i + 1}</h3>
          <p>CSS Columns masonry flow.</p>
        </div>
      {/each}
    </slot>
  </div>
</div>

<style>
  .masonry-flow {
    width: 100%;
  }
  .card {
    display: inline-block;
    width: 100%;
    break-inside: avoid;
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 0.75rem;
    padding: 1.25rem;
  }
  @media (max-width: 768px) {
    .masonry-flow {
      column-count: 1 !important;
    }
  }
</style>`,
      };
    }

    // Pure HTML / CSS
    return {
      filename: 'masonry.html',
      language: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Masonry Layout</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, sans-serif;
      background: #090d16;
      color: #f1f5f9;
      padding: 2rem;
    }
    .masonry-grid {
      column-count: ${cols};
      column-gap: ${gap}px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .masonry-card {
      display: inline-block;
      width: 100%;
      break-inside: avoid;
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 12px;
      padding: 1.25rem;
      margin-bottom: ${gap}px;
    }
    h3 { font-size: 1.1rem; margin-bottom: 0.5rem; color: #fff; }
    p { color: #94a3b8; font-size: 0.88rem; line-height: 1.5; }
    @media (max-width: 900px) {
      .masonry-grid { column-count: 2; }
    }
    @media (max-width: 600px) {
      .masonry-grid { column-count: 1; }
    }
  </style>
</head>
<body>
  <div class="masonry-grid">
    <div class="masonry-card">
      <h3>Compact Card</h3>
      <p>Short snippet of content.</p>
    </div>
    <div class="masonry-card">
      <h3>Detailed Article Card</h3>
      <p>This card has more content to demonstrate variable heights within the column flow. Masonry automatically packs beneath it without gaps.</p>
    </div>
    <div class="masonry-card">
      <h3>Medium Card</h3>
      <p>Standard paragraph text with responsive spacing.</p>
    </div>
  </div>
</body>
</html>`,
    };
  },
};
