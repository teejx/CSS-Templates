import { futureComponentCategories } from '../data/layouts';
import { Layers, Sparkles } from 'lucide-react';

export const ComponentsPreview: React.FC = () => {
  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="text-center space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Stage 2 Roadmap</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Component Templates Coming Soon
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
          The foundation is ready! Soon you will be able to browse and customize modular UI components (buttons, navbars, modals, cards, forms) with the same multi-framework code snippets.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {futureComponentCategories.map((cat) => (
          <div
            key={cat.id}
            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300">
                  <Layers className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-[10px] font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  Coming Soon
                </span>
              </div>
              <h3 className="font-bold text-white text-lg">{cat.name}</h3>
              <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                Responsive, accessible micro-components with tailored React, Tailwind, Vue, and vanilla CSS code snippets.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
              <span>Status: In Design</span>
              <span className="text-slate-400 flex items-center gap-1">Phase 2 →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
