import React from 'react';
import { LayoutTemplate, LayoutControlValues } from '../../types';

export const centeredAuthLayout: LayoutTemplate = {
  id: 'centered-auth-card',
  title: 'Centered Minimalist Auth Card',
  category: 'application',
  description: 'Flawless dead-center viewport layout using display: grid; place-items: center. Built for login forms, registration screens, checkout modals, and single-purpose dialogs.',
  tags: ['Centered', 'Auth', 'Login', 'place-items: center', 'CSS Grid', 'Modal'],
  complexity: 'Beginner',
  cssTechnique: 'CSS Grid with place-items: center and min-height: 100vh',
  controlConfig: {
    hasGapControl: true,
    minGap: 8,
    maxGap: 24,
    gapStep: 4,
  },
  defaultControls: {
    gap: 16,
  },
  renderPreview: (controls: LayoutControlValues, isDarkMode: boolean) => {
    const gap = controls.gap || 16;

    return (
      <div className="w-full min-h-[480px] bg-slate-950 text-slate-100 rounded-lg p-4 sm:p-8 border border-slate-800 flex items-center justify-center relative overflow-hidden text-xs">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-sm bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl p-6 shadow-2xl relative z-10 space-y-4">
          <div className="text-center space-y-1">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-500 to-emerald-400 text-slate-950 font-bold flex items-center justify-center mx-auto shadow-md shadow-brand-500/20 text-sm">
              🔑
            </div>
            <h3 className="text-base font-bold text-white pt-2">Welcome Back</h3>
            <p className="text-slate-400 text-xs">Enter your credentials to access your account</p>
          </div>

          <div className="space-y-3" style={{ gap: `${gap}px` }}>
            <div>
              <label className="text-[11px] font-medium text-slate-300 block mb-1">Email Address</label>
              <input
                type="email"
                disabled
                value="developer@agency.io"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-300 text-xs focus:outline-none"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-medium text-slate-300">Password</label>
                <span className="text-[10px] text-brand-400 cursor-pointer">Forgot?</span>
              </div>
              <input
                type="password"
                disabled
                value="••••••••••••"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-300 text-xs focus:outline-none"
              />
            </div>
          </div>

          <button className="w-full py-2 bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold rounded-lg text-xs transition shadow-lg shadow-brand-500/20">
            Sign In to Studio
          </button>

          <div className="text-center text-[11px] text-slate-400 pt-1">
            Don't have an account? <span className="text-brand-400 cursor-pointer font-medium">Sign up</span>
          </div>
        </div>
      </div>
    );
  },
  getCode: (framework, controls) => {
    if (framework === 'tailwind') {
      return {
        filename: 'CenteredAuth.html',
        language: 'html',
        code: `<!-- Centered Auth Card with Tailwind CSS -->
<div class="min-h-screen bg-slate-950 text-slate-100 grid place-items-center p-4">
  <div class="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
    <div class="text-center mb-8">
      <div class="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center font-bold text-slate-950 text-xl mx-auto mb-4">
        🔑
      </div>
      <h1 class="text-2xl font-bold text-white">Welcome Back</h1>
      <p class="text-slate-400 text-sm mt-1">Please sign in to continue</p>
    </div>

    <form class="space-y-4">
      <div>
        <label class="block text-xs font-medium text-slate-300 mb-1">Email</label>
        <input type="email" class="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:border-emerald-500 focus:outline-none" />
      </div>
      <div>
        <label class="block text-xs font-medium text-slate-300 mb-1">Password</label>
        <input type="password" class="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:border-emerald-500 focus:outline-none" />
      </div>
      <button type="button" class="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition">
        Sign In
      </button>
    </form>
  </div>
</div>`,
      };
    }

    if (framework === 'react') {
      return {
        filename: 'CenteredAuthLayout.tsx',
        language: 'tsx',
        code: `import React from 'react';

export interface CenteredAuthProps {
  children?: React.ReactNode;
}

export const CenteredAuthLayout: React.FC<CenteredAuthProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 grid place-items-center p-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        {children || (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Centered Container</h2>
            <p className="text-slate-400 text-sm mt-2">Perfect vertical & horizontal centering with CSS Grid.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CenteredAuthLayout;`,
      };
    }

    if (framework === 'vue') {
      return {
        filename: 'CenteredAuth.vue',
        language: 'vue',
        code: `<template>
  <div class="centered-viewport">
    <div class="card-modal">
      <slot>
        <h2>Centered Card</h2>
        <p>Uses display: grid; place-items: center;</p>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.centered-viewport {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: #020617;
}
.card-modal {
  width: 100%;
  max-width: 420px;
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
</style>`,
      };
    }

    if (framework === 'svelte') {
      return {
        filename: 'CenteredAuth.svelte',
        language: 'svelte',
        code: `<div class="viewport">
  <div class="card">
    <slot>Centered content</slot>
  </div>
</div>

<style>
  .viewport {
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 1rem;
    background: #030712;
  }
  .card {
    max-width: 440px;
    width: 100%;
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 1rem;
    padding: 2rem;
  }
</style>`,
      };
    }

    // Pure HTML / CSS
    return {
      filename: 'centered-auth.html',
      language: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Centered Modal / Auth Layout</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, sans-serif;
      background: #090d16;
      color: #f8fafc;
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 1.5rem;
    }
    .auth-card {
      width: 100%;
      max-width: 400px;
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
    }
  </style>
</head>
<body>
  <div class="auth-card">
    <h2>Dead Center Layout</h2>
    <p style="color: #94a3b8; margin-top: 0.5rem;">
      Achieved with 2 lines of CSS: <br>
      <code>display: grid; place-items: center;</code>
    </p>
  </div>
</body>
</html>`,
    };
  },
};
