import React from 'react';
import { LayoutTemplate, LayoutControlValues } from '../../types';

export const pricingMatrixLayout: LayoutTemplate = {
  id: 'pricing-comparison-matrix',
  title: 'Pricing Matrix with Featured Tier',
  category: 'landing',
  description: 'Responsive 3-tier pricing table layout with a visually elevated center "Most Popular" card, feature checkmarks, and seamless stacking on tablet/mobile.',
  tags: ['Pricing', 'Tier Grid', 'Landing', 'Highlighted Card', 'Flexbox', 'Grid'],
  complexity: 'Intermediate',
  cssTechnique: 'CSS Grid with lg:scale-105 elevation and responsive 1-col mobile stacking',
  controlConfig: {
    hasGapControl: true,
    minGap: 12,
    maxGap: 36,
    gapStep: 4,
    hasContainerWidthControl: true,
  },
  defaultControls: {
    gap: 20,
    containerWidth: 'boxed',
  },
  renderPreview: (controls: LayoutControlValues, isDarkMode: boolean) => {
    const gap = controls.gap || 20;
    const isBoxed = controls.containerWidth === 'boxed';

    return (
      <div className={`w-full min-h-[480px] bg-slate-950 text-slate-100 rounded-lg p-4 sm:p-8 border border-slate-800 text-xs flex flex-col justify-center ${isBoxed ? 'max-w-4xl mx-auto' : ''}`}>
        <div className="text-center max-w-md mx-auto mb-6">
          <span className="text-[10px] font-mono text-brand-400 uppercase tracking-widest bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/20">
            Pricing Plans
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white mt-1">Predictable Plans for High-Velocity Teams</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center" style={{ gap: `${gap}px` }}>
          {/* Starter Plan */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between space-y-4">
            <div>
              <div className="text-slate-400 font-medium">Starter</div>
              <div className="text-2xl font-bold text-white mt-1">$0 <span className="text-xs font-normal text-slate-500">/mo</span></div>
              <p className="text-[11px] text-slate-400 mt-2">Essential layout components for personal open-source projects.</p>
              <ul className="space-y-1.5 mt-3 text-[11px] text-slate-300">
                <li className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> 15 Core CSS Layouts</li>
                <li className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> HTML & CSS Export</li>
                <li className="flex items-center gap-1.5"><span className="text-slate-600">✕</span> Multi-framework code</li>
              </ul>
            </div>
            <button className="w-full py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition">
              Get Started
            </button>
          </div>

          {/* Pro Plan (Elevated / Highlighted) */}
          <div className="bg-slate-900 border-2 border-brand-500 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-xl shadow-brand-500/10 relative md:-translate-y-2">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-slate-950 font-bold px-3 py-0.5 rounded-full text-[10px] tracking-wide uppercase">
              Most Popular
            </div>
            <div>
              <div className="text-brand-400 font-semibold">Pro Team</div>
              <div className="text-2xl font-bold text-white mt-1">$29 <span className="text-xs font-normal text-slate-500">/mo</span></div>
              <p className="text-[11px] text-slate-300 mt-2">Everything you need to deliver production web applications.</p>
              <ul className="space-y-1.5 mt-3 text-[11px] text-slate-200">
                <li className="flex items-center gap-1.5"><span className="text-brand-400">✓</span> All Layout Templates</li>
                <li className="flex items-center gap-1.5"><span className="text-brand-400">✓</span> React, Vue & Svelte Snippets</li>
                <li className="flex items-center gap-1.5"><span className="text-brand-400">✓</span> Component Library (Coming Soon)</li>
                <li className="flex items-center gap-1.5"><span className="text-brand-400">✓</span> Priority Design Requests</li>
              </ul>
            </div>
            <button className="w-full py-2 rounded-lg bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs transition shadow-md shadow-brand-500/20">
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between space-y-4">
            <div>
              <div className="text-slate-400 font-medium">Enterprise</div>
              <div className="text-2xl font-bold text-white mt-1">$99 <span className="text-xs font-normal text-slate-500">/mo</span></div>
              <p className="text-[11px] text-slate-400 mt-2">Custom design system tokens and dedicated layout consulting.</p>
              <ul className="space-y-1.5 mt-3 text-[11px] text-slate-300">
                <li className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> Unlimited Team Seats</li>
                <li className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> Custom Tokens Sync</li>
                <li className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> 24/7 Priority SLA</li>
              </ul>
            </div>
            <button className="w-full py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    );
  },
  getCode: (framework, controls) => {
    const gap = controls.gap || 20;

    if (framework === 'tailwind') {
      return {
        filename: 'PricingMatrix.html',
        language: 'html',
        code: `<!-- 3-Tier Pricing Layout with Featured Card - Tailwind CSS -->
<div class="max-w-6xl mx-auto p-6">
  <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-[${gap}px]">
    <!-- Starter Tier -->
    <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h3 class="font-bold text-white text-lg">Starter</h3>
      <div class="text-3xl font-extrabold text-white my-3">$0<span class="text-sm font-normal text-slate-400">/mo</span></div>
      <p class="text-slate-400 text-sm">Basic layouts for side projects.</p>
      <button class="w-full mt-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium">Get Started</button>
    </div>

    <!-- Featured Pro Tier (Elevated) -->
    <div class="bg-slate-900 border-2 border-emerald-500 rounded-3xl p-8 relative shadow-2xl md:-translate-y-2">
      <span class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 font-bold px-3 py-1 rounded-full text-xs uppercase">
        Most Popular
      </span>
      <h3 class="font-bold text-emerald-400 text-xl">Pro Team</h3>
      <div class="text-4xl font-extrabold text-white my-3">$29<span class="text-sm font-normal text-slate-400">/mo</span></div>
      <p class="text-slate-300 text-sm">Full access to all layout templates and framework snippets.</p>
      <button class="w-full mt-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition">
        Start Free Trial
      </button>
    </div>

    <!-- Enterprise Tier -->
    <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h3 class="font-bold text-white text-lg">Enterprise</h3>
      <div class="text-3xl font-extrabold text-white my-3">$99<span class="text-sm font-normal text-slate-400">/mo</span></div>
      <p class="text-slate-400 text-sm">Tailored design systems and dedicated support.</p>
      <button class="w-full mt-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium">Contact Us</button>
    </div>
  </div>
</div>`,
      };
    }

    if (framework === 'react') {
      return {
        filename: 'PricingMatrix.tsx',
        language: 'tsx',
        code: `import React from 'react';

export const PricingMatrix: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-[${gap}px]">
        {/* Starter */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="font-bold text-white">Starter</h3>
          <div className="text-3xl font-bold my-2">$0</div>
          <button className="w-full mt-4 py-2 rounded-lg bg-slate-800 text-white">Select</button>
        </div>

        {/* Featured */}
        <div className="bg-slate-900 border-2 border-emerald-500 rounded-3xl p-8 relative md:-translate-y-2">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-0.5 rounded-full">
            Featured
          </span>
          <h3 className="font-bold text-emerald-400 text-xl">Pro</h3>
          <div className="text-4xl font-extrabold my-2">$29</div>
          <button className="w-full mt-4 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold">
            Upgrade Now
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="font-bold text-white">Enterprise</h3>
          <div className="text-3xl font-bold my-2">$99</div>
          <button className="w-full mt-4 py-2 rounded-lg bg-slate-800 text-white">Select</button>
        </div>
      </div>
    </div>
  );
};

export default PricingMatrix;`,
      };
    }

    if (framework === 'vue') {
      return {
        filename: 'PricingMatrix.vue',
        language: 'vue',
        code: `<template>
  <div class="pricing-container">
    <div class="pricing-grid">
      <div class="tier-card">Starter</div>
      <div class="tier-card featured">Pro (Popular)</div>
      <div class="tier-card">Enterprise</div>
    </div>
  </div>
</template>

<style scoped>
.pricing-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
}
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${gap}px;
  align-items: center;
}
.tier-card {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 1rem;
  padding: 2rem;
}
.tier-card.featured {
  border-color: #10b981;
  transform: translateY(-8px);
}
@media (max-width: 768px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }
}
</style>`,
      };
    }

    if (framework === 'svelte') {
      return {
        filename: 'PricingMatrix.svelte',
        language: 'svelte',
        code: `<div class="pricing-wrap" style="gap: ${gap}px;">
  <div class="card">Starter</div>
  <div class="card featured">Pro</div>
  <div class="card">Enterprise</div>
</div>

<style>
  .pricing-wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1100px;
    margin: 0 auto;
    padding: 2rem;
    align-items: center;
  }
  .card {
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 1rem;
    padding: 2rem;
  }
  .featured {
    border-color: #10b981;
    transform: scale(1.04);
  }
  @media (max-width: 768px) {
    .pricing-wrap {
      grid-template-columns: 1fr;
    }
  }
</style>`,
      };
    }

    // Pure HTML / CSS
    return {
      filename: 'pricing-matrix.html',
      language: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Pricing Matrix</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, sans-serif;
      background: #090d16;
      color: #f8fafc;
      padding: 3rem 1.5rem;
    }
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: ${gap}px;
      max-width: 1050px;
      margin: 0 auto;
      align-items: center;
    }
    .card {
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 16px;
      padding: 2rem;
    }
    .card.featured {
      border: 2px solid #10b981;
      transform: scale(1.05);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
    }
    @media (max-width: 768px) {
      .pricing-grid {
        grid-template-columns: 1fr;
      }
      .card.featured {
        transform: none;
      }
    }
  </style>
</head>
<body>
  <div class="pricing-grid">
    <div class="card">
      <h3>Starter</h3>
      <p>$0 / month</p>
    </div>
    <div class="card featured">
      <h3>Pro Team (Featured)</h3>
      <p>$29 / month</p>
    </div>
    <div class="card">
      <h3>Enterprise</h3>
      <p>$99 / month</p>
    </div>
  </div>
</body>
</html>`,
    };
  },
};
