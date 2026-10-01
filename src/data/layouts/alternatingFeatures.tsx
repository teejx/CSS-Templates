import React from 'react';
import { LayoutTemplate, LayoutControlValues } from '../../types';

export const alternatingFeaturesLayout: LayoutTemplate = {
  id: 'feature-alternating-z',
  title: 'Alternating Feature List (Z-Pattern)',
  category: 'landing',
  description: 'Landing page product feature showcase using alternating left-right visual/copy pairs that naturally stack into consistent logical reading blocks on mobile screens.',
  tags: ['Landing', 'Z-Pattern', 'Alternating', 'Flexbox', 'Marketing'],
  complexity: 'Beginner',
  cssTechnique: 'Flexbox / CSS Grid with nth-child(even) direction flipping and responsive collapse',
  controlConfig: {
    hasGapControl: true,
    minGap: 24,
    maxGap: 64,
    gapStep: 8,
    hasContainerWidthControl: true,
  },
  defaultControls: {
    gap: 32,
    containerWidth: 'boxed',
  },
  renderPreview: (controls: LayoutControlValues, isDarkMode: boolean) => {
    const gap = controls.gap || 32;
    const isBoxed = controls.containerWidth === 'boxed';

    const features = [
      {
        badge: 'Zero Latency',
        title: 'Instant Layout Streaming',
        desc: 'Pure CSS implementations ensure maximum paint velocity without JavaScript recalculations.',
        color: 'from-emerald-500/20 to-teal-500/10',
        borderColor: 'border-emerald-500/30',
        accentText: 'text-emerald-400',
      },
      {
        badge: 'Universal Compatibility',
        title: 'Multi-Framework Code Generation',
        desc: 'One layout template produces turnkey snippets for Tailwind, React TSX, Vue SFCs, and Svelte.',
        color: 'from-blue-500/20 to-indigo-500/10',
        borderColor: 'border-blue-500/30',
        accentText: 'text-blue-400',
      },
    ];

    return (
      <div className={`w-full min-h-[460px] bg-slate-950 text-slate-100 rounded-lg p-4 sm:p-8 border border-slate-800 text-xs ${isBoxed ? 'max-w-4xl mx-auto' : ''}`}>
        <div className="text-center max-w-lg mx-auto mb-6">
          <span className="text-[10px] font-mono text-brand-400 uppercase tracking-widest bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/20">
            Layout Features
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white mt-1">Engineered for Peak Developer Ergonomics</h2>
        </div>

        <div className="space-y-6">
          {features.map((f, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                style={{ gap: `${gap}px` }}
              >
                {/* Text Block */}
                <div className="flex-1 space-y-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${f.accentText}`}>
                    {f.badge}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white">{f.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{f.desc}</p>
                  <div className="pt-1">
                    <span className="text-white hover:text-brand-400 cursor-pointer text-[11px] font-semibold flex items-center gap-1">
                      Explore architecture →
                    </span>
                  </div>
                </div>

                {/* Graphic Mockup Block */}
                <div className="flex-1 w-full">
                  <div className={`h-36 sm:h-40 rounded-xl bg-gradient-to-br ${f.color} border ${f.borderColor} p-4 flex flex-col justify-between shadow-lg`}>
                    <div className="flex items-center justify-between">
                      <span className="w-2 h-2 rounded-full bg-slate-600" />
                      <span className="text-[10px] font-mono text-slate-400">feature-preview-{idx + 1}.tsx</span>
                    </div>
                    <div className="space-y-2">
                      <div className="w-2/3 h-2 bg-slate-700/60 rounded" />
                      <div className="w-1/2 h-2 bg-slate-700/40 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
  getCode: (framework, controls) => {
    const gap = controls.gap || 32;

    if (framework === 'tailwind') {
      return {
        filename: 'AlternatingFeatures.html',
        language: 'html',
        code: `<!-- Alternating Feature Sections with Tailwind CSS -->
<section class="max-w-6xl mx-auto p-6 space-y-[${gap}px]">
  <!-- Feature 1 (Text left, Image right) -->
  <div class="flex flex-col md:flex-row items-center gap-8">
    <div class="flex-1 space-y-4">
      <span class="text-xs font-bold text-emerald-400 uppercase">Performance</span>
      <h3 class="text-2xl font-bold text-white">Sub-Millisecond Rendering</h3>
      <p class="text-slate-400 leading-relaxed">Pure CSS rules compiled directly with zero runtime overhead.</p>
    </div>
    <div class="flex-1 w-full bg-slate-900 border border-slate-800 rounded-2xl h-64 p-6">
      <span class="text-slate-500 text-xs">Visual Component #1</span>
    </div>
  </div>

  <!-- Feature 2 (Reversed: Image left, Text right) -->
  <div class="flex flex-col md:flex-row-reverse items-center gap-8">
    <div class="flex-1 space-y-4">
      <span class="text-xs font-bold text-cyan-400 uppercase">Portability</span>
      <h3 class="text-2xl font-bold text-white">Cross-Framework Ready</h3>
      <p class="text-slate-400 leading-relaxed">Turnkey snippets for React, Vue, Svelte, and vanilla HTML.</p>
    </div>
    <div class="flex-1 w-full bg-slate-900 border border-slate-800 rounded-2xl h-64 p-6">
      <span class="text-slate-500 text-xs">Visual Component #2</span>
    </div>
  </div>
</section>`,
      };
    }

    if (framework === 'react') {
      return {
        filename: 'AlternatingFeatures.tsx',
        language: 'tsx',
        code: `import React from 'react';

export interface FeatureItem {
  id: string;
  badge: string;
  title: string;
  description: string;
}

export const AlternatingFeatures: React.FC<{ features?: FeatureItem[] }> = ({ features = [] }) => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {features.map((f, i) => (
        <div
          key={f.id}
          className={\`flex flex-col md:flex-row items-center gap-8 \${i % 2 === 1 ? 'md:flex-row-reverse' : ''}\`}
        >
          <div className="flex-1 space-y-3">
            <span className="text-xs font-bold text-emerald-400 uppercase">{f.badge}</span>
            <h3 className="text-2xl font-bold text-white">{f.title}</h3>
            <p className="text-slate-400 leading-relaxed">{f.description}</p>
          </div>
          <div className="flex-1 w-full bg-slate-900 border border-slate-800 rounded-2xl h-64 flex items-center justify-center text-slate-500">
            Preview Mockup
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlternatingFeatures;`,
      };
    }

    if (framework === 'vue') {
      return {
        filename: 'AlternatingFeatures.vue',
        language: 'vue',
        code: `<template>
  <div class="features-section">
    <div
      v-for="(f, i) in features"
      :key="i"
      class="feature-row"
      :class="{ reversed: i % 2 === 1 }"
    >
      <div class="text-col">
        <h3>{{ f.title }}</h3>
        <p>{{ f.desc }}</p>
      </div>
      <div class="visual-col">
        <div class="mockup-box">Feature Image</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  features: Array<{ title: string; desc: string }>;
}>();
</script>

<style scoped>
.features-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: ${gap}px;
}
.feature-row {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.feature-row.reversed {
  flex-direction: row-reverse;
}
.text-col, .visual-col {
  flex: 1;
}
.mockup-box {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 1rem;
  height: 240px;
}
@media (max-width: 768px) {
  .feature-row, .feature-row.reversed {
    flex-direction: column;
  }
}
</style>`,
      };
    }

    if (framework === 'svelte') {
      return {
        filename: 'AlternatingFeatures.svelte',
        language: 'svelte',
        code: `<section class="features">
  <div class="row">
    <div class="text">
      <h2>Feature One</h2>
      <p>Clean responsive presentation.</p>
    </div>
    <div class="visual">Preview</div>
  </div>

  <div class="row reversed">
    <div class="text">
      <h2>Feature Two</h2>
      <p>Reversed direction on desktop.</p>
    </div>
    <div class="visual">Preview</div>
  </div>
</section>

<style>
  .features {
    max-width: 1100px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .row {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  .reversed {
    flex-direction: row-reverse;
  }
  @media (max-width: 768px) {
    .row, .reversed {
      flex-direction: column;
    }
  }
</style>`,
      };
    }

    // Pure HTML / CSS
    return {
      filename: 'alternating-features.html',
      language: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alternating Feature Sections</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, sans-serif;
      background: #090d16;
      color: #f1f5f9;
      padding: 2rem;
    }
    .feature-list {
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: ${gap}px;
    }
    .feature-row {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    .feature-row:nth-child(even) {
      flex-direction: row-reverse;
    }
    .col { flex: 1; }
    .mockup {
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 12px;
      height: 220px;
    }
    @media (max-width: 768px) {
      .feature-row, .feature-row:nth-child(even) {
        flex-direction: column;
      }
    }
  </style>
</head>
<body>
  <div class="feature-list">
    <div class="feature-row">
      <div class="col">
        <h2>Modern Z-Pattern Layout</h2>
        <p>Directs the reader's eye naturally down the landing page.</p>
      </div>
      <div class="col mockup"></div>
    </div>
    <div class="feature-row">
      <div class="col">
        <h2>Mobile-First Stacking</h2>
        <p>Flips naturally so text always precedes graphics on smaller viewports.</p>
      </div>
      <div class="col mockup"></div>
    </div>
  </div>
</body>
</html>`,
    };
  },
};
