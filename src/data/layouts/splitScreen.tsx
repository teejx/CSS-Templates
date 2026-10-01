import React from 'react';
import { LayoutTemplate, LayoutControlValues } from '../../types';

export const splitScreenLayout: LayoutTemplate = {
  id: 'split-screen-hero',
  title: 'Split Screen Hero Landing',
  category: 'landing',
  description: '50/50 dual pane split screen hero section. Perfect for landing pages showcasing value propositions with CTA on one side and an interactive preview/mockup on the other.',
  tags: ['Split Screen', 'Hero', 'Landing Page', '50/50', 'Flexbox', 'Responsive'],
  complexity: 'Beginner',
  cssTechnique: 'CSS Grid / Flexbox 50/50 split with automatic responsive vertical stacking',
  controlConfig: {
    hasGapControl: true,
    minGap: 16,
    maxGap: 48,
    gapStep: 8,
    hasSidebarPositionControl: true, // Used as 'content on left' vs 'content on right'
    hasContainerWidthControl: true,
  },
  defaultControls: {
    gap: 32,
    sidebarPosition: 'left',
    containerWidth: 'boxed',
  },
  renderPreview: (controls: LayoutControlValues, isDarkMode: boolean) => {
    const gap = controls.gap || 32;
    const isContentLeft = controls.sidebarPosition !== 'right';
    const isBoxed = controls.containerWidth === 'boxed';

    return (
      <div className={`w-full min-h-[460px] bg-slate-950 text-slate-100 rounded-lg p-4 sm:p-8 border border-slate-800 flex items-center justify-center`}>
        <div className={`w-full ${isBoxed ? 'max-w-4xl' : 'max-w-full'}`}>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 items-center ${isContentLeft ? '' : 'md:[&>*:first-child]:order-2'}`}
            style={{ gap: `${gap}px` }}
          >
            {/* Left Content / CTA */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                Modern CSS Layouts 2.0
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Design Faster with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-400">Zero-Config</span> CSS Templates
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Empower your development workflow with hyper-responsive, battle-tested layout primitives. One-click copy for React, Tailwind, Vue, and Pure CSS.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-2">
                <button className="px-4 py-2 bg-brand-500 hover:bg-brand-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors shadow-lg shadow-brand-500/20">
                  Explore Templates
                </button>
                <button className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 font-medium rounded-lg text-xs transition-colors">
                  View Documentation
                </button>
              </div>
              <div className="flex items-center gap-3 pt-3 text-[11px] text-slate-400 border-t border-slate-800/80">
                <span className="flex items-center gap-1 text-emerald-400">✓ 100% Responsive</span>
                <span className="flex items-center gap-1 text-emerald-400">✓ Multi-Framework</span>
              </div>
            </div>

            {/* Right Mockup Pane */}
            <div className="relative">
              <div className="w-full bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-xl p-4 shadow-2xl relative overflow-hidden group">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">layout-preview.css</span>
                </div>
                <div className="space-y-2">
                  <div className="h-6 w-3/4 bg-slate-800 rounded animate-pulse" />
                  <div className="h-16 w-full bg-slate-800/60 rounded border border-slate-700/50 p-2 flex flex-col justify-between">
                    <div className="w-1/2 h-3 bg-brand-500/20 rounded" />
                    <div className="w-full h-2 bg-slate-700/40 rounded" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-14 bg-slate-800/40 rounded border border-slate-700/30 p-2">
                      <div className="w-8 h-2 bg-cyan-500/30 rounded mb-1" />
                      <div className="w-12 h-4 bg-slate-700/50 rounded" />
                    </div>
                    <div className="h-14 bg-slate-800/40 rounded border border-slate-700/30 p-2">
                      <div className="w-8 h-2 bg-emerald-500/30 rounded mb-1" />
                      <div className="w-12 h-4 bg-slate-700/50 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  getCode: (framework, controls) => {
    const gap = controls.gap || 32;
    const isContentLeft = controls.sidebarPosition !== 'right';

    if (framework === 'tailwind') {
      return {
        filename: 'SplitScreenHero.html',
        language: 'html',
        code: `<!-- Responsive Split Screen Hero with Tailwind CSS -->
<section class="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 lg:p-12">
  <div class="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-[${gap}px]">
    <!-- Text / Call to Action -->
    <div class="space-y-6 ${isContentLeft ? '' : 'lg:order-2'}">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
        <span>✨ New Release</span>
      </div>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
        Build responsive layouts at <span class="text-emerald-400">warp speed</span>.
      </h1>
      <p class="text-lg text-slate-400 leading-relaxed">
        Production-ready layout architecture tailored for modern web apps. Copy-paste into React, Vue, Svelte, or vanilla HTML.
      </p>
      <div class="flex flex-wrap gap-4 pt-2">
        <a href="#cta" class="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition shadow-lg shadow-emerald-500/20">
          Get Started Free
        </a>
        <a href="#demo" class="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold rounded-xl transition">
          Live Demo
        </a>
      </div>
    </div>

    <!-- Visual / Product Mockup -->
    <div class="${isContentLeft ? '' : 'lg:order-1'}">
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
        <div class="h-64 flex items-center justify-center text-slate-500 border border-dashed border-slate-800 rounded-xl">
          Interactive Product Showcase / Graphic
        </div>
      </div>
    </div>
  </div>
</section>`,
      };
    }

    if (framework === 'react') {
      return {
        filename: 'SplitScreenHero.tsx',
        language: 'tsx',
        code: `import React from 'react';

export interface SplitScreenHeroProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  visualSlot?: React.ReactNode;
}

export const SplitScreenHero: React.FC<SplitScreenHeroProps> = ({
  title = "Build responsive layouts at warp speed",
  subtitle = "Production-ready layout architecture for modern web applications.",
  badge = "✨ CSS Templates Studio",
  visualSlot,
}) => {
  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 lg:p-12">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-[${gap}px]">
        <div className="space-y-6 ${isContentLeft ? '' : 'lg:order-2'}">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            {badge}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition shadow-lg shadow-emerald-500/20">
              Get Started Free
            </button>
            <button className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold rounded-xl transition">
              Explore Layouts
            </button>
          </div>
        </div>

        <div className="${isContentLeft ? '' : 'lg:order-1'}">
          {visualSlot || (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
              <div className="h-64 flex items-center justify-center text-slate-500 border border-dashed border-slate-800 rounded-xl">
                Visual Showcase / Hero Graphic
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SplitScreenHero;`,
      };
    }

    if (framework === 'vue') {
      return {
        filename: 'SplitScreenHero.vue',
        language: 'vue',
        code: `<template>
  <section class="split-hero">
    <div class="split-container ${isContentLeft ? '' : 'reversed'}">
      <div class="content-side">
        <span class="badge">New Release</span>
        <h1 class="title">Modern Split-Screen Hero</h1>
        <p class="description">Effortless 50/50 dual pane section that automatically stacks on mobile screens.</p>
        <div class="cta-row">
          <button class="primary-btn">Start Building</button>
          <button class="secondary-btn">Learn More</button>
        </div>
      </div>
      <div class="visual-side">
        <slot name="visual">
          <div class="visual-box">Interactive Preview</div>
        </slot>
      </div>
    </div>
  </section>
</template>

<style scoped>
.split-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #020617;
  color: #f8fafc;
  padding: 2rem;
}
.split-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${gap}px;
  max-width: 1200px;
  width: 100%;
  align-items: center;
}
.split-container.reversed .content-side {
  order: 2;
}
.split-container.reversed .visual-side {
  order: 1;
}
.title {
  font-size: 2.75rem;
  font-weight: 800;
  line-height: 1.2;
}
.visual-box {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 1rem;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 900px) {
  .split-container {
    grid-template-columns: 1fr;
  }
}
</style>`,
      };
    }

    if (framework === 'svelte') {
      return {
        filename: 'SplitScreenHero.svelte',
        language: 'svelte',
        code: `<section class="split-hero">
  <div class="container ${isContentLeft ? '' : 'reversed'}" style="gap: ${gap}px;">
    <div class="text-pane">
      <h1>Modern Split-Screen Layout</h1>
      <p>Clean dual-column responsive presentation for modern products.</p>
      <div class="buttons">
        <button class="btn-primary">Get Started</button>
      </div>
    </div>
    <div class="graphic-pane">
      <slot>
        <div class="placeholder-card">Hero Graphic</div>
      </slot>
    </div>
  </div>
</section>

<style>
  .split-hero {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #030712;
    padding: 2rem;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1200px;
    width: 100%;
  }
  .reversed {
    direction: rtl;
  }
  .reversed > * {
    direction: ltr;
  }
  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
</style>`,
      };
    }

    // Pure HTML / CSS
    return {
      filename: 'split-hero.html',
      language: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Split Screen Hero Layout</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #090d16;
      color: #f1f5f9;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
    .split-hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: ${gap}px;
      max-width: 1100px;
      width: 100%;
      align-items: center;
    }
    .content-pane {
      ${isContentLeft ? '' : 'order: 2;'}
    }
    .visual-pane {
      ${isContentLeft ? '' : 'order: 1;'}
    }
    h1 {
      font-size: 2.5rem;
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 1rem;
    }
    p {
      color: #94a3b8;
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    .btn {
      display: inline-block;
      padding: 0.8rem 1.5rem;
      background: #10b981;
      color: #020617;
      font-weight: 600;
      text-decoration: none;
      border-radius: 8px;
    }
    .card-preview {
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 12px;
      height: 340px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #64748b;
    }
    @media (max-width: 768px) {
      .split-hero {
        grid-template-columns: 1fr;
      }
      .content-pane { order: 1; }
      .visual-pane { order: 2; }
    }
  </style>
</head>
<body>
  <section class="split-hero">
    <div class="content-pane">
      <h1>Responsive Split Screen Layout</h1>
      <p>Clean 50/50 dual pane hero that collapses seamlessly on tablet and mobile viewports.</p>
      <a href="#" class="btn">Get Started Now</a>
    </div>
    <div class="visual-pane">
      <div class="card-preview">
        Hero Mockup / Visual Graphic
      </div>
    </div>
  </section>
</body>
</html>`,
    };
  },
};
