import React from 'react';
import {
  X,
  Smartphone,
  Sliders,
  Code2,
  Copy,
  Layers,
  Sparkles,
  Monitor,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';

interface HowToUseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HowToUseModal: React.FC<HowToUseModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const steps = [
    {
      step: '01',
      title: 'Browse & Filter Layouts',
      icon: Layers,
      color: 'from-blue-500/20 to-cyan-500/10 text-cyan-400 border-cyan-500/30',
      description:
        'Explore 12 production-tested layouts across Dashboards, Landing Pages, Masonry Grids, Sticky Docs, and App Navigation Shells. Use category tabs or search keywords like "grid", "hero", or "sticky".',
      tip: 'Click any card to open the interactive studio workspace.',
    },
    {
      step: '02',
      title: 'Test Responsiveness & Viewports',
      icon: Smartphone,
      color: 'from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30',
      description:
        'Test how layouts adapt at different screen widths. Click quick presets for Mobile (375px), Tablet (768px), and Desktop (1200px), or drag the smooth pixel width slider (320px – 1440px) to inspect breakpoint transitions.',
      tip: 'Notice how sidebars transform into drawers or bottom bars automatically!',
    },
    {
      step: '03',
      title: 'Tweak Live Knobs (Gap, Columns, Orientation)',
      icon: Sliders,
      color: 'from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30',
      description:
        'Customize spacing gaps, column counts, sidebar placement (Left vs Right), and container width (Boxed vs Full Width) with interactive controls.',
      tip: 'Every knob tweak immediately recalculates both the visual preview AND the generated code!',
    },
    {
      step: '04',
      title: 'Export Multi-Framework Code',
      icon: Code2,
      color: 'from-purple-500/20 to-pink-500/10 text-purple-400 border-purple-500/30',
      description:
        'Select your preferred format: Pure HTML5/CSS, Tailwind CSS, React (TSX), Vue 3 (SFC), or Svelte. All snippets are production-ready, clean, and self-contained.',
      tip: 'Click "Copy Code" for instant clipboard copy, or "Download" to save the file.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-slate-950 px-6 py-5 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-500/10 border border-brand-500/30 text-brand-400 flex items-center justify-center font-bold">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                How to Use CraftLayout Studio
                <span className="text-[10px] font-mono bg-brand-500/10 text-brand-400 border border-brand-500/20 px-2 py-0.5 rounded-full">
                  Quick Guide
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Master responsive layouts, real-time viewport testing, and code export
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-200 text-xs sm:text-sm">
          {/* Quick Summary Banner */}
          <div className="bg-gradient-to-r from-brand-500/10 via-emerald-500/5 to-transparent border border-brand-500/20 rounded-2xl p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-500 text-slate-950 flex items-center justify-center font-extrabold text-base shrink-0 shadow-md shadow-brand-500/20">
              ⚡
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              CraftLayout provides modern, responsive CSS layout primitives for your applications and landing pages with one-click code generation for <strong>HTML/CSS</strong>, <strong>Tailwind</strong>, <strong>React</strong>, <strong>Vue</strong>, and <strong>Svelte</strong>.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-slate-700 transition"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${s.color} border flex items-center justify-center`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-500">
                        STEP {s.step}
                      </span>
                    </div>

                    <h3 className="font-bold text-white text-sm">{s.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{s.description}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-brand-300/90 flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                    <span>{s.tip}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Frameworks & Shortcuts Reference */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4">
            <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-2">
              <Code2 className="w-4 h-4 text-brand-400" />
              <span>Supported Frameworks & Formats</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {[
                { name: 'HTML & CSS', desc: 'Modern CSS Grid & Flexbox' },
                { name: 'Tailwind CSS', desc: 'Utility classes & responsive variants' },
                { name: 'React (TSX)', desc: 'TypeScript components & props' },
                { name: 'Vue 3', desc: 'Single File Components (SFC)' },
                { name: 'Svelte', desc: 'Scoped CSS & slots' },
              ].map((fw) => (
                <div key={fw.name} className="bg-slate-900 border border-slate-800/80 rounded-xl p-2.5 text-center">
                  <div className="font-semibold text-white text-xs">{fw.name}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5 leading-snug">{fw.desc}</div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-slate-300">Keyboard Shortcuts:</span>
                <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-mono text-[11px] text-slate-300">
                  Esc
                </span>
                <span>Close modal</span>
              </div>
              <div className="text-[11px] text-amber-400/90 font-medium">
                Stage 2: Modular UI Components coming next!
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs shadow-lg shadow-brand-500/20 transition"
          >
            Got it, Let's Build!
          </button>
        </div>
      </div>
    </div>
  );
};
