import React from 'react';
import { LayoutTemplate, LayoutControlValues } from '../../types';

export const dashboardLayout: LayoutTemplate = {
  id: 'dashboard-admin',
  title: 'Admin Dashboard Layout',
  category: 'application',
  description: 'Production-ready dashboard layout featuring a collapsible sidebar, sticky header with search/actions, multi-metric KPI cards, and responsive data panels.',
  tags: ['CSS Grid', 'Flexbox', 'Responsive Sidebar', 'Admin', 'Dashboard'],
  complexity: 'Intermediate',
  cssTechnique: 'CSS Grid & Flexbox with sticky header and responsive sidebar collapse',
  controlConfig: {
    hasGapControl: true,
    minGap: 12,
    maxGap: 32,
    gapStep: 4,
    hasColumnsControl: true,
    minColumns: 2,
    maxColumns: 4,
    hasSidebarPositionControl: true,
    hasStickyHeaderControl: true,
  },
  defaultControls: {
    gap: 16,
    columns: 4,
    sidebarPosition: 'left',
    stickyHeader: true,
  },
  renderPreview: (controls: LayoutControlValues, isDarkMode: boolean) => {
    const isSidebarLeft = controls.sidebarPosition !== 'right';
    const gapPx = controls.gap || 16;
    const cols = controls.columns || 4;

    return (
      <div className={`w-full min-h-[480px] flex ${isSidebarLeft ? 'flex-row' : 'flex-row-reverse'} bg-slate-900 text-slate-100 rounded-lg overflow-hidden border border-slate-800 text-xs`}>
        {/* Sidebar */}
        <aside className="w-48 bg-slate-950 border-r border-slate-800 p-4 flex flex-col justify-between shrink-0 hidden sm:flex">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded bg-brand-500 flex items-center justify-center font-bold text-slate-950 text-xs">A</div>
              <span className="font-semibold text-white tracking-wide">ApexAdmin</span>
            </div>
            <nav className="space-y-1">
              {['Overview', 'Analytics', 'Customers', 'Inventory', 'Settings'].map((item, idx) => (
                <div
                  key={item}
                  className={`px-3 py-2 rounded font-medium flex items-center gap-2 cursor-pointer transition-colors ${
                    idx === 0
                      ? 'bg-brand-500/10 text-brand-400 border border-brand-500/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-brand-400' : 'bg-slate-600'}`} />
                  {item}
                </div>
              ))}
            </nav>
          </div>
          <div className="pt-4 border-t border-slate-800 text-slate-500 text-[11px] flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700"></div>
            <span className="truncate">dev@studio.io</span>
          </div>
        </aside>

        {/* Main Workspace */}
        <div className="flex-1 flex flex-col min-w-0 bg-slate-900">
          {/* Topbar */}
          <header className={`h-12 border-b border-slate-800 px-4 flex items-center justify-between bg-slate-950/70 backdrop-blur ${controls.stickyHeader ? 'sticky top-0 z-10' : ''}`}>
            <div className="flex items-center gap-3">
              <span className="sm:hidden text-slate-400 font-bold">☰</span>
              <div className="h-7 px-3 bg-slate-900 border border-slate-800 rounded flex items-center text-slate-400 text-[11px] w-36 sm:w-48">
                Search dashboard...
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-brand-500/20 text-brand-300 rounded text-[10px] font-mono font-medium">LIVE</span>
              <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 font-semibold text-[11px]">TJ</div>
            </div>
          </header>

          {/* Main Body */}
          <main className="flex-1 p-4 overflow-y-auto space-y-4">
            {/* KPI Metrics Grid */}
            <div
              className="grid"
              style={{
                gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                gap: `${gapPx}px`,
              }}
            >
              {[
                { title: 'Total Revenue', val: '$84,230', change: '+14.2%', up: true },
                { title: 'Active Users', val: '14,892', change: '+8.1%', up: true },
                { title: 'Conversion Rate', val: '3.64%', change: '-0.4%', up: false },
                { title: 'Server Uptime', val: '99.98%', change: '+0.01%', up: true },
              ].slice(0, cols).map((metric, i) => (
                <div key={i} className="bg-slate-950/80 border border-slate-800/80 p-3 rounded-lg shadow-sm">
                  <div className="text-slate-400 text-[11px]">{metric.title}</div>
                  <div className="text-base font-bold text-white mt-1">{metric.val}</div>
                  <div className={`text-[10px] mt-1 font-medium ${metric.up ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {metric.change} vs last month
                  </div>
                </div>
              ))}
            </div>

            {/* Split Content: Main Chart + Activity feed */}
            <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: `${gapPx}px` }}>
              <div className="lg:col-span-2 bg-slate-950/80 border border-slate-800/80 rounded-lg p-4 min-h-[160px] flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
                  <span className="font-semibold text-slate-200">Traffic & Revenue Velocity</span>
                  <span className="text-[10px] text-slate-400">Last 30 Days</span>
                </div>
                {/* Simulated Chart Bars */}
                <div className="h-24 flex items-end gap-1.5 sm:gap-2 pt-3">
                  {[35, 60, 45, 80, 65, 90, 75, 95, 85, 100, 70, 88].map((h, idx) => (
                    <div key={idx} className="flex-1 bg-slate-800 hover:bg-brand-500/80 rounded-t transition-all" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>

              <div className="bg-slate-950/80 border border-slate-800/80 rounded-lg p-4">
                <div className="font-semibold text-slate-200 pb-2 border-b border-slate-800/60 mb-2">Recent Activities</div>
                <div className="space-y-2">
                  {['Invoice #1049 paid', 'New user registered', 'Deployment #285 live', 'Backup snapshot saved'].map((act, idx) => (
                    <div key={idx} className="flex items-center justify-between text-[11px] text-slate-300 py-1 border-b border-slate-800/40 last:border-0">
                      <span>{act}</span>
                      <span className="text-[9px] text-slate-500">{idx + 2}m ago</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  },
  getCode: (framework, controls) => {
    const gap = controls.gap || 16;
    const cols = controls.columns || 4;
    const isSidebarLeft = controls.sidebarPosition !== 'right';

    if (framework === 'tailwind') {
      return {
        filename: 'DashboardLayout.html',
        language: 'html',
        code: `<!-- Responsive Dashboard Layout with Tailwind CSS -->
<div class="min-h-screen bg-slate-900 text-slate-100 flex flex-col md:flex-row ${isSidebarLeft ? '' : 'md:flex-row-reverse'}">
  <!-- Sidebar -->
  <aside class="w-full md:w-64 bg-slate-950 border-r border-slate-800 p-6 flex flex-col justify-between shrink-0">
    <div>
      <div class="flex items-center gap-3 mb-8">
        <div class="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-slate-950">A</div>
        <span class="font-bold text-lg text-white">ApexAdmin</span>
      </div>
      <nav class="space-y-1">
        <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 font-medium">Overview</a>
        <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900">Analytics</a>
        <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900">Customers</a>
        <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900">Settings</a>
      </nav>
    </div>
    <div class="pt-4 border-t border-slate-800 text-sm text-slate-400">User profile</div>
  </aside>

  <!-- Main Content Area -->
  <div class="flex-1 flex flex-col min-w-0">
    <!-- Header -->
    <header class="h-16 border-b border-slate-800 px-6 flex items-center justify-between bg-slate-950/60 backdrop-blur sticky top-0 z-10">
      <div class="font-medium text-slate-200">Dashboard Overview</div>
      <div class="flex items-center gap-4">
        <button class="px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-md">Notifications</button>
        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">TJ</div>
      </div>
    </header>

    <!-- Main Section -->
    <main class="flex-1 p-6 space-y-6 overflow-y-auto">
      <!-- Metric Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${cols} gap-[${gap}px]">
        <div class="bg-slate-950 border border-slate-800 p-5 rounded-xl">
          <span class="text-sm text-slate-400">Total Revenue</span>
          <div class="text-2xl font-bold text-white mt-2">$84,230</div>
          <span class="text-xs text-emerald-400 font-medium">+14.2% this month</span>
        </div>
        <div class="bg-slate-950 border border-slate-800 p-5 rounded-xl">
          <span class="text-sm text-slate-400">Active Subscribers</span>
          <div class="text-2xl font-bold text-white mt-2">14,892</div>
          <span class="text-xs text-emerald-400 font-medium">+8.1% this month</span>
        </div>
        <div class="bg-slate-950 border border-slate-800 p-5 rounded-xl">
          <span class="text-sm text-slate-400">Conversion Rate</span>
          <div class="text-2xl font-bold text-white mt-2">3.64%</div>
          <span class="text-xs text-rose-400 font-medium">-0.4% this month</span>
        </div>
        <div class="bg-slate-950 border border-slate-800 p-5 rounded-xl">
          <span class="text-sm text-slate-400">Server Uptime</span>
          <div class="text-2xl font-bold text-white mt-2">99.98%</div>
          <span class="text-xs text-emerald-400 font-medium">+0.01% this month</span>
        </div>
      </div>

      <!-- Content Panels -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-[${gap}px]">
        <div class="lg:col-span-2 bg-slate-950 border border-slate-800 rounded-xl p-6 min-h-[300px]">
          <h3 class="font-semibold text-white mb-4">Performance Velocity</h3>
          <div class="h-48 flex items-center justify-center text-slate-500 border border-dashed border-slate-800 rounded-lg">
            Analytics Chart Canvas
          </div>
        </div>
        <div class="bg-slate-950 border border-slate-800 rounded-xl p-6">
          <h3 class="font-semibold text-white mb-4">Recent Events</h3>
          <ul class="space-y-3 text-sm text-slate-300">
            <li class="flex justify-between"><span>Database backup complete</span><span class="text-slate-500 text-xs">2m ago</span></li>
            <li class="flex justify-between"><span>New customer onboarding</span><span class="text-slate-500 text-xs">15m ago</span></li>
            <li class="flex justify-between"><span>Stripe webhook received</span><span class="text-slate-500 text-xs">1h ago</span></li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</div>`,
      };
    }

    if (framework === 'react') {
      return {
        filename: 'DashboardLayout.tsx',
        language: 'tsx',
        code: `import React, { useState } from 'react';

export interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col md:flex-row ${isSidebarLeft ? '' : 'md:flex-row-reverse'}">
      {/* Sidebar for Desktop / Mobile Drawer */}
      <aside className={\`\${sidebarOpen ? 'block' : 'hidden'} md:block w-full md:w-64 bg-slate-950 border-r border-slate-800 p-6 flex flex-col justify-between shrink-0\`}>
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-slate-950">A</div>
              <span className="font-bold text-lg text-white">ApexAdmin</span>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="md:hidden text-slate-400">✕</button>
          </div>
          <nav className="space-y-1">
            <a href="#overview" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 font-medium">Overview</a>
            <a href="#analytics" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900">Analytics</a>
            <a href="#customers" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900">Customers</a>
            <a href="#settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900">Settings</a>
          </nav>
        </div>
        <div className="pt-4 border-t border-slate-800 text-sm text-slate-400">dev@apex.io</div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-slate-800 px-6 flex items-center justify-between bg-slate-950/80 backdrop-blur sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden p-2 rounded bg-slate-900 border border-slate-800">
              ☰
            </button>
            <h1 className="font-semibold text-white">Dashboard Overview</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-semibold flex items-center justify-center text-xs">TJ</div>
          </div>
        </header>

        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          {children || (
            <>
              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${cols} gap-[${gap}px]">
                <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl">
                  <div className="text-sm text-slate-400">Total Revenue</div>
                  <div className="text-2xl font-bold text-white mt-1">$84,230</div>
                  <div className="text-xs text-emerald-400 mt-2 font-medium">+14.2% from last month</div>
                </div>
                <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl">
                  <div className="text-sm text-slate-400">Active Users</div>
                  <div className="text-2xl font-bold text-white mt-1">14,892</div>
                  <div className="text-xs text-emerald-400 mt-2 font-medium">+8.1% from last month</div>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;`,
      };
    }

    if (framework === 'vue') {
      return {
        filename: 'DashboardLayout.vue',
        language: 'vue',
        code: `<script setup lang="ts">
import { ref } from 'vue';

const isSidebarOpen = ref(false);
</script>

<template>
  <div class="dashboard-root ${isSidebarLeft ? '' : 'sidebar-right'}">
    <!-- Sidebar -->
    <aside class="sidebar" :class="{ 'is-open': isSidebarOpen }">
      <div class="sidebar-top">
        <div class="brand">
          <span class="brand-icon">A</span>
          <span class="brand-name">ApexAdmin</span>
        </div>
        <button class="mobile-close" @click="isSidebarOpen = false">✕</button>
      </div>
      <nav class="nav-links">
        <a href="#" class="nav-item active">Overview</a>
        <a href="#" class="nav-item">Analytics</a>
        <a href="#" class="nav-item">Settings</a>
      </nav>
      <div class="sidebar-footer">dev@apex.io</div>
    </aside>

    <!-- Main Workspace -->
    <div class="workspace">
      <header class="topbar">
        <button class="mobile-toggle" @click="isSidebarOpen = !isSidebarOpen">☰</button>
        <h2>Dashboard</h2>
      </header>
      <main class="content-body" :style="{ gap: '${gap}px' }">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
.dashboard-root {
  display: flex;
  min-height: 100vh;
  background-color: #0f172a;
  color: #f8fafc;
}
.dashboard-root.sidebar-right {
  flex-direction: row-reverse;
}
.sidebar {
  width: 256px;
  background-color: #020617;
  border-right: 1px solid #1e293b;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.workspace {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.topbar {
  height: 64px;
  border-bottom: 1px solid #1e293b;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  background: rgba(2, 6, 23, 0.7);
  backdrop-filter: blur(8px);
}
.content-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    inset: 0 auto 0 0;
    z-index: 50;
    transform: translateX(-100%);
    transition: transform 0.2s ease;
  }
  .sidebar.is-open {
    transform: translateX(0);
  }
}
</style>`,
      };
    }

    if (framework === 'svelte') {
      return {
        filename: 'DashboardLayout.svelte',
        language: 'svelte',
        code: `<script lang="ts">
  let isSidebarOpen = false;
</script>

<div class="dashboard-shell ${isSidebarLeft ? '' : 'sidebar-right'}">
  <aside class="sidebar {isSidebarOpen ? 'open' : ''}">
    <div class="logo">
      <span>ApexAdmin</span>
    </div>
    <nav>
      <a href="/dashboard" class="active">Overview</a>
      <a href="/analytics">Analytics</a>
      <a href="/settings">Settings</a>
    </nav>
  </aside>

  <div class="main-column">
    <header class="header">
      <button on:click={() => (isSidebarOpen = !isSidebarOpen)} class="menu-btn">☰</button>
      <h3>Dashboard</h3>
    </header>
    <main class="page-content" style="gap: ${gap}px;">
      <slot />
    </main>
  </div>
</div>

<style>
  .dashboard-shell {
    display: flex;
    min-height: 100vh;
    background: #090d16;
    color: #e2e8f0;
  }
  .sidebar-right {
    flex-direction: row-reverse;
  }
  .sidebar {
    width: 260px;
    background: #030712;
    border-right: 1px solid #1f2937;
    padding: 1.5rem;
  }
  .main-column {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .header {
    height: 60px;
    border-bottom: 1px solid #1f2937;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
  }
  .page-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 768px) {
    .sidebar {
      display: none;
    }
    .sidebar.open {
      display: block;
      position: fixed;
      inset: 0 auto 0 0;
      z-index: 50;
    }
  }
</style>`,
      };
    }

    // Pure HTML / CSS
    return {
      filename: 'dashboard.html',
      language: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Dashboard Layout</title>
  <style>
    :root {
      --bg-main: #0b1120;
      --bg-sidebar: #020617;
      --border-color: #1e293b;
      --text-main: #f1f5f9;
      --text-muted: #94a3b8;
      --accent: #10b981;
      --gap: ${gap}px;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; background: var(--bg-main); color: var(--text-main); }

    .app-container {
      display: grid;
      grid-template-columns: ${isSidebarLeft ? '260px 1fr' : '1fr 260px'};
      min-height: 100vh;
    }

    .sidebar {
      background: var(--bg-sidebar);
      border-${isSidebarLeft ? 'right' : 'left'}: 1px solid var(--border-color);
      padding: 1.5rem;
      ${isSidebarLeft ? 'order: 1;' : 'order: 2;'}
    }

    .main-wrapper {
      display: flex;
      flex-direction: column;
      min-width: 0;
      ${isSidebarLeft ? 'order: 2;' : 'order: 1;'}
    }

    .header {
      height: 64px;
      border-bottom: 1px solid var(--border-color);
      padding: 0 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      background: rgba(2, 6, 23, 0.85);
      backdrop-filter: blur(8px);
    }

    .content {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: var(--gap);
    }

    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: var(--gap);
    }

    .card {
      background: #0f172a;
      border: 1px solid var(--border-color);
      border-radius: 10px;
      padding: 1.25rem;
    }

    .card h4 { color: var(--text-muted); font-size: 0.85rem; font-weight: normal; }
    .card .val { font-size: 1.5rem; font-weight: bold; margin-top: 0.5rem; color: #fff; }

    @media (max-width: 768px) {
      .app-container {
        grid-template-columns: 1fr;
      }
      .sidebar {
        display: none;
      }
    }
  </style>
</head>
<body>
  <div class="app-container">
    <aside class="sidebar">
      <h2>ApexAdmin</h2>
      <nav style="margin-top: 2rem;">
        <p><a href="#" style="color: var(--accent); text-decoration: none;">Overview</a></p>
        <p style="margin-top: 1rem;"><a href="#" style="color: var(--text-muted); text-decoration: none;">Analytics</a></p>
      </nav>
    </aside>

    <div class="main-wrapper">
      <header class="header">
        <h3>Dashboard Overview</h3>
        <span>Account</span>
      </header>

      <main class="content">
        <div class="metrics-grid">
          <div class="card">
            <h4>Total Revenue</h4>
            <div class="val">$84,230</div>
          </div>
          <div class="card">
            <h4>Active Users</h4>
            <div class="val">14,892</div>
          </div>
          <div class="card">
            <h4>Uptime</h4>
            <div class="val">99.98%</div>
          </div>
        </div>
      </main>
    </div>
  </div>
</body>
</html>`,
    };
  },
};
