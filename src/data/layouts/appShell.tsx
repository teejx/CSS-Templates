import React, { useState } from 'react';
import { LayoutTemplate, LayoutControlValues } from '../../types';

export const appShellLayout: LayoutTemplate = {
  id: 'app-shell-bottom-nav',
  title: 'App Navigation Shell (Rail & Bottom Bar)',
  category: 'navigation',
  description: 'Adaptive application shell that renders an ergonomic fixed bottom navigation bar on mobile devices and transforms smoothly into a compact left icon rail on desktop screens.',
  tags: ['Mobile First', 'Bottom Bar', 'Icon Rail', 'App Shell', 'Responsive Nav'],
  complexity: 'Intermediate',
  cssTechnique: 'Media query switching: fixed bottom-0 flex-row (mobile) to fixed left-0 flex-col (desktop)',
  controlConfig: {
    hasGapControl: true,
    minGap: 12,
    maxGap: 28,
    gapStep: 4,
  },
  defaultControls: {
    gap: 16,
  },
  renderPreview: (controls: LayoutControlValues, isDarkMode: boolean) => {
    const [activeTab, setActiveTab] = useState('Home');

    const tabs = [
      { name: 'Home', icon: '🏠' },
      { name: 'Search', icon: '🔍' },
      { name: 'Activity', icon: '⚡' },
      { name: 'Profile', icon: '👤' },
    ];

    return (
      <div className="w-full min-h-[460px] bg-slate-950 text-slate-100 rounded-lg overflow-hidden border border-slate-800 flex flex-col sm:flex-row relative text-xs">
        {/* Desktop Side Icon Rail */}
        <nav className="hidden sm:flex w-16 bg-slate-900 border-r border-slate-800 flex-col items-center py-4 justify-between shrink-0">
          <div className="space-y-6 flex flex-col items-center">
            <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center font-bold text-white shadow-lg shadow-violet-600/30">
              ⚡
            </div>
            <div className="space-y-3">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    activeTab === tab.name
                      ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                  title={tab.name}
                >
                  <span className="text-sm">{tab.icon}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] font-semibold text-slate-300">
            TJ
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 pb-16 sm:pb-0 bg-slate-950">
          <header className="h-12 border-b border-slate-800 px-4 flex items-center justify-between bg-slate-900/60 backdrop-blur">
            <div className="font-semibold text-white">{activeTab} View</div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-violet-500/10 text-violet-400 font-mono text-[10px] border border-violet-500/20">
                Responsive Nav
              </span>
            </div>
          </header>

          <main className="flex-1 p-4 overflow-y-auto space-y-3">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
              <h4 className="font-semibold text-white text-sm">Adaptive Viewport Switching</h4>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                Resize the preview to mobile width to see the left rail instantly adapt into an ergonomic thumb-friendly bottom bar.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-3">
                <span className="text-slate-500 text-[10px]">Mobile Mode</span>
                <div className="text-slate-200 font-semibold text-xs mt-0.5">Bottom Bar</div>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-3">
                <span className="text-slate-500 text-[10px]">Desktop Mode</span>
                <div className="text-slate-200 font-semibold text-xs mt-0.5">Left Rail</div>
              </div>
            </div>
          </main>
        </div>

        {/* Mobile Fixed Bottom Bar */}
        <nav className="sm:hidden absolute bottom-0 inset-x-0 h-14 bg-slate-900/95 backdrop-blur border-t border-slate-800 flex items-center justify-around px-2 z-20">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex flex-col items-center justify-center w-12 py-1 transition-colors ${
                activeTab === tab.name ? 'text-violet-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="text-sm">{tab.icon}</span>
              <span className="text-[9px] mt-0.5">{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>
    );
  },
  getCode: (framework, controls) => {
    if (framework === 'tailwind') {
      return {
        filename: 'AppNavShell.html',
        language: 'html',
        code: `<!-- App Shell with Mobile Bottom Bar & Desktop Rail - Tailwind CSS -->
<div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row pb-16 md:pb-0">
  <!-- Desktop Left Icon Rail -->
  <aside class="hidden md:flex w-20 bg-slate-900 border-r border-slate-800 flex-col items-center py-6 justify-between shrink-0">
    <div class="flex flex-col items-center gap-6">
      <div class="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center font-bold text-white">⚡</div>
      <nav class="flex flex-col gap-3">
        <a href="#" class="w-10 h-10 rounded-lg bg-violet-600/20 text-violet-400 flex items-center justify-center">🏠</a>
        <a href="#" class="w-10 h-10 rounded-lg text-slate-400 hover:bg-slate-800 flex items-center justify-center">🔍</a>
        <a href="#" class="w-10 h-10 rounded-lg text-slate-400 hover:bg-slate-800 flex items-center justify-center">👤</a>
      </nav>
    </div>
  </aside>

  <!-- Main View -->
  <main class="flex-1 p-6">
    <h1 class="text-2xl font-bold">Main Application View</h1>
  </main>

  <!-- Mobile Fixed Bottom Navigation -->
  <nav class="md:hidden fixed bottom-0 inset-x-0 h-16 bg-slate-900/95 backdrop-blur border-t border-slate-800 flex items-center justify-around z-50">
    <a href="#" class="flex flex-col items-center text-violet-400 text-xs"><span>🏠</span><span>Home</span></a>
    <a href="#" class="flex flex-col items-center text-slate-400 text-xs"><span>🔍</span><span>Search</span></a>
    <a href="#" class="flex flex-col items-center text-slate-400 text-xs"><span>👤</span><span>Profile</span></a>
  </nav>
</div>`,
      };
    }

    if (framework === 'react') {
      return {
        filename: 'AppNavShell.tsx',
        language: 'tsx',
        code: `import React, { useState } from 'react';

export const AppNavShell: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [active, setActive] = useState('home');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row pb-16 md:pb-0">
      {/* Desktop Rail */}
      <aside className="hidden md:flex w-20 bg-slate-900 border-r border-slate-800 flex-col items-center py-6 justify-between">
        <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center font-bold text-white">⚡</div>
        <nav className="flex flex-col gap-3">
          {['home', 'search', 'profile'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={\`w-10 h-10 rounded-xl flex items-center justify-center \${active === tab ? 'bg-violet-600 text-white' : 'text-slate-400 hover:bg-slate-800'}\`}
            >
              {tab[0].toUpperCase()}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Workspace */}
      <main className="flex-1 p-6">
        {children || <h1 className="text-2xl font-bold">Active Tab: {active}</h1>}
      </main>

      {/* Mobile Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 h-16 bg-slate-900 border-t border-slate-800 flex items-center justify-around z-50">
        {['home', 'search', 'profile'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={\`capitalize text-xs flex flex-col items-center \${active === tab ? 'text-violet-400 font-bold' : 'text-slate-400'}\`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default AppNavShell;`,
      };
    }

    if (framework === 'vue') {
      return {
        filename: 'AppNavShell.vue',
        language: 'vue',
        code: `<template>
  <div class="app-shell">
    <aside class="desktop-rail">
      <div class="logo">⚡</div>
      <nav>
        <button class="nav-btn active">Home</button>
        <button class="nav-btn">Search</button>
      </nav>
    </aside>

    <main class="page-content">
      <slot />
    </main>

    <nav class="mobile-bottom-bar">
      <button class="bar-btn active">Home</button>
      <button class="bar-btn">Search</button>
    </nav>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  background: #020617;
  color: #f8fafc;
}
.desktop-rail {
  width: 72px;
  background: #0f172a;
  border-right: 1px solid #1e293b;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0;
}
.page-content {
  flex: 1;
  padding: 2rem;
}
.mobile-bottom-bar {
  display: none;
}
@media (max-width: 768px) {
  .desktop-rail { display: none; }
  .page-content { padding-bottom: 5rem; }
  .mobile-bottom-bar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 56px;
    background: #0f172a;
    border-top: 1px solid #1e293b;
    justify-content: space-around;
    align-items: center;
  }
}
</style>`,
      };
    }

    if (framework === 'svelte') {
      return {
        filename: 'AppNavShell.svelte',
        language: 'svelte',
        code: `<div class="shell">
  <aside class="rail">
    <slot name="rail">Desktop Rail</slot>
  </aside>
  <main class="main">
    <slot />
  </main>
  <nav class="bottom-bar">
    <slot name="bottom">Mobile Bottom Bar</slot>
  </nav>
</div>

<style>
  .shell {
    display: flex;
    min-height: 100vh;
    background: #020617;
  }
  .rail {
    width: 64px;
    background: #0f172a;
    border-right: 1px solid #1e293b;
  }
  .main {
    flex: 1;
    padding: 1.5rem;
  }
  .bottom-bar {
    display: none;
  }
  @media (max-width: 768px) {
    .rail { display: none; }
    .bottom-bar {
      display: flex;
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 56px;
      background: #0f172a;
      border-top: 1px solid #1e293b;
    }
  }
</style>`,
      };
    }

    // Pure HTML / CSS
    return {
      filename: 'app-nav-shell.html',
      language: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>App Navigation Shell</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, sans-serif;
      background: #090d16;
      color: #f1f5f9;
      min-height: 100vh;
      display: flex;
    }
    .desktop-rail {
      width: 70px;
      background: #0f172a;
      border-right: 1px solid #1e293b;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.5rem 0;
    }
    .content-area {
      flex: 1;
      padding: 2rem;
    }
    .mobile-bar {
      display: none;
    }
    @media (max-width: 768px) {
      body { flex-direction: column; }
      .desktop-rail { display: none; }
      .content-area { padding-bottom: 5rem; }
      .mobile-bar {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 60px;
        background: #0f172a;
        border-top: 1px solid #1e293b;
        justify-content: space-around;
        align-items: center;
      }
    }
  </style>
</head>
<body>
  <aside class="desktop-rail">
    <div style="font-weight: bold; margin-bottom: 2rem;">⚡</div>
    <p>Nav</p>
  </aside>

  <main class="content-area">
    <h1>App Shell Navigation</h1>
    <p>Transforms from desktop left rail to fixed mobile bottom tab bar.</p>
  </main>

  <nav class="mobile-bar">
    <span>Home</span>
    <span>Search</span>
    <span>Profile</span>
  </nav>
</body>
</html>`,
    };
  },
};
