import { LayoutTemplate } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface LayoutCardProps {
  layout: LayoutTemplate;
  onSelect: (layout: LayoutTemplate) => void;
  isDarkMode: boolean;
}

export const LayoutCard: React.FC<LayoutCardProps> = ({
  layout,
  onSelect,
  isDarkMode,
}) => {
  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Beginner':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'Intermediate':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'Advanced':
        return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      default:
        return 'text-slate-400 bg-slate-800 border-slate-700';
    }
  };

  return (
    <div
      onClick={() => onSelect(layout)}
      className="group bg-slate-900/70 hover:bg-slate-900 border border-slate-800/80 hover:border-brand-500/50 rounded-2xl p-4 sm:p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/5 flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Live Miniature Preview Container */}
        <div className="w-full h-44 bg-slate-950 rounded-xl overflow-hidden border border-slate-800/60 p-2.5 relative mb-4 pointer-events-none group-hover:border-slate-700 transition">
          <div className="w-[140%] h-[140%] origin-top-left scale-[0.71] select-none">
            {layout.renderPreview(layout.defaultControls, isDarkMode)}
          </div>
          {/* Overlay gradient & quick button */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-3 pointer-events-auto">
            <span className="px-2.5 py-1 rounded-lg bg-brand-500 text-slate-950 font-bold text-[11px] shadow-lg flex items-center gap-1">
              Customize <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Header: Title & Badges */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-white text-base group-hover:text-brand-300 transition-colors">
            {layout.title}
          </h3>
          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getComplexityColor(
              layout.complexity
            )}`}
          >
            {layout.complexity}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-3">
          {layout.description}
        </p>

        {/* Technique Badge */}
        <div className="text-[11px] text-slate-400 font-mono bg-slate-950/60 border border-slate-800/80 px-2.5 py-1 rounded-lg mb-3 truncate">
          <span className="text-slate-500">Tech:</span> {layout.cssTechnique}
        </div>
      </div>

      {/* Footer: Tags & Action */}
      <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-6">
          {layout.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800"
            >
              {tag}
            </span>
          ))}
          {layout.tags.length > 3 && (
            <span className="text-[10px] text-slate-500 px-1">+{layout.tags.length - 3}</span>
          )}
        </div>

        <div className="flex items-center gap-1.5 shrink-0 text-brand-400 text-xs font-semibold group-hover:translate-x-0.5 transition-transform">
          <span>Open Studio</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
};
