import React from 'react';
import { LayoutTemplate, LayoutControlValues } from '../../types';

export const stickyFooterLayout: LayoutTemplate = {
  id: 'sticky-footer-shell',
  title: 'Sticky Footer Page Shell',
  category: 'application',
  description: 'Classic viewport-filling flex layout ensuring the footer remains anchored to the bottom of the viewport on short-content pages without overlapping or jumping.',
  tags: ['Sticky Footer', 'Flexbox', 'Full Height', 'App Skeleton', 'min-height: 100vh'],
  complexity: 'Beginner',
  cssTechnique: 'display: flex; flex-direction: column; min-height: 100vh with flex: 1 on main',
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
      <div className={`w-full min-h-[460px] bg-slate-950 text-slate-100 rounded-lg p-4 border border-slate-800 flex flex-col justify-between text-xs`}>
        {/* Header */}
        <header className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-emerald-500 flex items-center justify-center font-bold text-slate-950 text-[10px]">SF</div>
            <span className="font-semibold text-white">StickyFooter.dev</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">min-h-screen</span>
        </header>

        {/* Content Body (Flex 1 expands) */}
        <main
          className={`flex-1 my-3 bg-slate-900/60 border border-dashed border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center text-center ${isBoxed ? 'max-w-2xl mx-auto w-full' : 'w-full'}`}
          style={{ gap: `${gap}px` }}
        >
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-lg">
            ⚓
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Low Content / Sparse Page</h3>
            <p className="text-slate-400 text-xs mt-1 max-w-sm">
              Even with minimal content, the footer remains pinned to the bottom border. When content exceeds viewport height, it naturally pushes the footer down.
            </p>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
            flex: 1 1 0%; min-height: 100vh;
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 flex items-center justify-between text-slate-400 text-[11px]">
          <div>© 2026 Guaranteed Bottom Anchor</div>
          <div className="flex gap-3">
            <span className="hover:text-white cursor-pointer">About</span>
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span className="hover:text-white cursor-pointer">Status</span>
          </div>
        </footer>
      </div>
    );
  },
  getCode: (framework, controls) => {
    const isBoxed = controls.containerWidth === 'boxed';

    if (framework === 'tailwind') {
      return {
        filename: 'StickyFooter.html',
        language: 'html',
        code: `<!-- Sticky Footer Layout with Tailwind CSS -->
<div class="min-h-screen flex flex-col bg-slate-950 text-slate-100">
  <!-- Header -->
  <header class="bg-slate-900 border-b border-slate-800 p-4">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <span class="font-bold text-white">Brand</span>
      <nav class="space-x-4 text-sm text-slate-400">
        <a href="#" class="hover:text-white">Home</a>
      </nav>
    </div>
  </header>

  <!-- Main Body that grows to fill available vertical space -->
  <main class="flex-1 ${isBoxed ? 'max-w-6xl w-full mx-auto' : 'w-full'} p-6">
    <h1 class="text-2xl font-bold text-white">Page Title</h1>
    <p class="text-slate-400 mt-2">Even with little content, footer is pushed to the bottom.</p>
  </main>

  <!-- Sticky Footer -->
  <footer class="bg-slate-900 border-t border-slate-800 p-4 text-center text-sm text-slate-500">
    <p>© 2026 Company, Inc. All rights reserved.</p>
  </footer>
</div>`,
      };
    }

    if (framework === 'react') {
      return {
        filename: 'StickyFooterLayout.tsx',
        language: 'tsx',
        code: `import React from 'react';

export interface StickyFooterLayoutProps {
  children: React.ReactNode;
}

export const StickyFooterLayout: React.FC<StickyFooterLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <header className="bg-slate-900 border-b border-slate-800 p-4">
        <div className="max-w-6xl mx-auto flex justify-between">
          <span className="font-bold">Logo</span>
        </div>
      </header>

      <main className="flex-1 ${isBoxed ? 'max-w-6xl w-full mx-auto' : 'w-full'} p-6">
        {children}
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 p-4 text-center text-sm text-slate-400">
        © 2026 App Shell
      </footer>
    </div>
  );
};

export default StickyFooterLayout;`,
      };
    }

    if (framework === 'vue') {
      return {
        filename: 'StickyFooter.vue',
        language: 'vue',
        code: `<template>
  <div class="page-shell">
    <header class="header">
      <div class="logo">App</div>
    </header>

    <main class="main-content">
      <slot />
    </main>

    <footer class="footer">
      <p>© 2026 Sticky Footer</p>
    </footer>
  </div>
</template>

<style scoped>
.page-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #020617;
  color: #f8fafc;
}
.header, .footer {
  background: #0f172a;
  padding: 1rem 1.5rem;
}
.main-content {
  flex: 1 1 0%;
  padding: 1.5rem;
}
</style>`,
      };
    }

    if (framework === 'svelte') {
      return {
        filename: 'StickyFooter.svelte',
        language: 'svelte',
        code: `<div class="app-shell">
  <header>Header</header>
  <main>
    <slot />
  </main>
  <footer>Footer</footer>
</div>

<style>
  .app-shell {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #030712;
    color: #e5e7eb;
  }
  main {
    flex: 1;
    padding: 1.5rem;
  }
</style>`,
      };
    }

    // Pure HTML / CSS
    return {
      filename: 'sticky-footer.html',
      language: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sticky Footer Flexbox Layout</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { height: 100%; }
    body {
      font-family: system-ui, sans-serif;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background: #090d16;
      color: #f1f5f9;
    }
    header { background: #0f172a; padding: 1.25rem 2rem; border-bottom: 1px solid #1e293b; }
    main {
      flex: 1 0 auto;
      padding: 2rem;
      ${isBoxed ? 'max-width: 1000px; margin: 0 auto; width: 100%;' : ''}
    }
    footer {
      flex-shrink: 0;
      background: #0f172a;
      padding: 1.25rem 2rem;
      border-top: 1px solid #1e293b;
      text-align: center;
      color: #64748b;
    }
  </style>
</head>
<body>
  <header>Navigation Header</header>
  <main>
    <h1>Minimalist Content</h1>
    <p>The footer stays firmly at the bottom of the viewport even when content is tiny.</p>
  </main>
  <footer>Footer & Copyright © 2026</footer>
</body>
</html>`,
    };
  },
};
