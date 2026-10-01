import React from 'react';
import { Smartphone, Tablet, Laptop, Monitor, Maximize2, RotateCcw, Minus, Plus } from 'lucide-react';
import { ViewportMode } from '../types';

interface ViewportSwitcherProps {
  mode: ViewportMode;
  setMode: (mode: ViewportMode) => void;
  customWidth: number;
  setCustomWidth: (width: number) => void;
}

export const ViewportSwitcher: React.FC<ViewportSwitcherProps> = ({
  mode,
  setMode,
  customWidth,
  setCustomWidth,
}) => {
  const presets = [
    { mode: 'mobile' as ViewportMode, label: 'Mobile', width: 375, icon: Smartphone },
    { mode: 'tablet' as ViewportMode, label: 'Tablet', width: 768, icon: Tablet },
    { mode: 'desktop' as ViewportMode, label: 'Laptop', width: 1024, icon: Laptop },
    { mode: 'desktop' as ViewportMode, label: 'Desktop', width: 1280, icon: Monitor },
  ];

  const handlePresetSelect = (presetMode: ViewportMode, width: number) => {
    setMode(presetMode);
    setCustomWidth(width);
  };

  const handleSliderChange = (newWidth: number) => {
    setCustomWidth(newWidth);
    if (newWidth <= 480) {
      setMode('mobile');
    } else if (newWidth <= 900) {
      setMode('tablet');
    } else {
      setMode('desktop');
    }
  };

  const nudgeWidth = (delta: number) => {
    const updated = Math.min(1440, Math.max(320, customWidth + delta));
    handleSliderChange(updated);
  };

  // Determine current screen classification
  const getDeviceLabel = () => {
    if (mode === 'fluid') return 'Full 100%';
    if (customWidth < 640) return 'Mobile View';
    if (customWidth < 1024) return 'Tablet View';
    if (customWidth < 1280) return 'Laptop View';
    return 'Desktop View';
  };

  return (
    <div className="w-full flex flex-wrap items-center justify-between gap-3 bg-slate-950 p-2 sm:p-2.5 rounded-xl border border-slate-800 text-xs">
      {/* Preset Viewport Buttons */}
      <div className="flex flex-wrap items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800/80">
        {presets.map((p) => {
          const Icon = p.icon;
          const isSelected = mode !== 'fluid' && customWidth === p.width;
          return (
            <button
              key={`${p.label}-${p.width}`}
              onClick={() => handlePresetSelect(p.mode, p.width)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-all ${
                isSelected
                  ? 'bg-brand-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{p.label}</span>
              <span className={`text-[10px] font-mono ${isSelected ? 'text-slate-950/80 font-bold' : 'text-slate-500'}`}>
                {p.width}px
              </span>
            </button>
          );
        })}

        {/* 100% Fluid Full Width Preset */}
        <button
          onClick={() => setMode('fluid')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-md font-medium transition-all ${
            mode === 'fluid'
              ? 'bg-brand-500 text-slate-950 font-semibold shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
          }`}
          title="100% Full Container Width"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Full Width</span>
        </button>
      </div>

      {/* Interactive Pixel Width Slider (Always Visible & Fully Functional) */}
      <div className="flex items-center gap-3 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800/80">
        <div className="flex items-center gap-1.5">
          <span className="text-slate-400 font-medium hidden sm:inline">Viewport:</span>
          <span className="font-mono text-brand-400 font-bold px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px]">
            {mode === 'fluid' ? '100% Fluid' : `${customWidth}px`}
          </span>
          <span className="text-[10px] text-slate-500 font-medium hidden md:inline">
            ({getDeviceLabel()})
          </span>
        </div>

        {/* Nudge minus */}
        <button
          onClick={() => nudgeWidth(-50)}
          className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          title="Decrease width by 50px"
        >
          <Minus className="w-3 h-3" />
        </button>

        {/* Draggable Pixel Range Slider */}
        <input
          type="range"
          min={320}
          max={1440}
          step={4}
          value={mode === 'fluid' ? 1280 : customWidth}
          onChange={(e) => handleSliderChange(Number(e.target.value))}
          className="w-24 sm:w-36 md:w-48 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
          title="Drag to resize viewport in pixels"
        />

        {/* Nudge plus */}
        <button
          onClick={() => nudgeWidth(50)}
          className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          title="Increase width by 50px"
        >
          <Plus className="w-3 h-3" />
        </button>

        {/* Reset to 1280px */}
        <button
          onClick={() => handlePresetSelect('desktop', 1280)}
          title="Reset to 1280px Desktop"
          className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
        >
          <RotateCcw className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
