import { useState } from 'react';
import { LayoutTemplate, LayoutControlValues, FrameworkType, ViewportMode } from '../types';
import { ViewportSwitcher } from './ViewportSwitcher';
import { CodeViewer } from './CodeViewer';
import { X, Sliders, Maximize2, Minimize2, RotateCcw, HelpCircle } from 'lucide-react';

interface LayoutInspectorProps {
  layout: LayoutTemplate;
  onClose: () => void;
  isDarkMode: boolean;
  onOpenGuide?: () => void;
}

export const LayoutInspector: React.FC<LayoutInspectorProps> = ({
  layout,
  onClose,
  isDarkMode,
  onOpenGuide,
}) => {
  const [controls, setControls] = useState<LayoutControlValues>({
    ...layout.defaultControls,
  });
  const [framework, setFramework] = useState<FrameworkType>('tailwind');
  const [viewportMode, setViewportMode] = useState<ViewportMode>('desktop');
  const [customWidth, setCustomWidth] = useState<number>(1280);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Compute live code based on active controls and framework
  const activeCodeData = layout.getCode(framework, controls);

  const resetControls = () => {
    setControls({ ...layout.defaultControls });
    setViewportMode('desktop');
    setCustomWidth(1280);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto`}>
      <div
        className={`bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 w-full ${
          isFullscreen ? 'fixed inset-2 z-50' : 'max-w-6xl max-h-[92vh]'
        }`}
      >
        {/* Top Studio Bar */}
        <div className="bg-slate-950 px-4 sm:px-6 py-3.5 border-b border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center font-bold text-sm shrink-0">
              ⚡
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-white text-base truncate">{layout.title}</h2>
                <span className="text-[10px] font-mono text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/20 hidden sm:inline-block">
                  {layout.category}
                </span>
              </div>
              <p className="text-slate-400 text-xs truncate hidden sm:block">{layout.cssTechnique}</p>
            </div>
          </div>

          {/* Top Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {onOpenGuide && (
              <button
                onClick={onOpenGuide}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs transition"
                title="View How to Use Guide"
              >
                <HelpCircle className="w-3.5 h-3.5 text-brand-400" />
                <span className="hidden sm:inline">Guide</span>
              </button>
            )}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition"
              title={isFullscreen ? 'Exit Fullscreen' : 'Expand Fullscreen'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 hover:bg-rose-500/20 hover:text-rose-300 text-slate-400 border border-slate-800 transition"
              title="Close Studio (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Viewport Control Bar */}
        <div className="bg-slate-950/70 px-4 sm:px-6 py-2.5 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <ViewportSwitcher
            mode={viewportMode}
            setMode={setViewportMode}
            customWidth={customWidth}
            setCustomWidth={setCustomWidth}
          />

          <button
            onClick={resetControls}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-slate-400 hover:text-slate-200 transition"
            title="Reset parameters to defaults"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Settings</span>
          </button>
        </div>

        {/* Interactive Workspace Body: Live Preview & Settings */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Controls Bar / Customization Knobs */}
          <div className="bg-slate-950/80 border border-slate-800/90 rounded-xl p-4 flex flex-wrap items-center gap-6 text-xs">
            <div className="flex items-center gap-2 text-slate-300 font-semibold">
              <Sliders className="w-4 h-4 text-brand-400" />
              <span>Interactive Knobs:</span>
            </div>

            {/* Gap Slider */}
            {layout.controlConfig.hasGapControl && (
              <div className="flex items-center gap-3">
                <span className="text-slate-400 font-medium">Gap / Spacing:</span>
                <input
                  type="range"
                  min={layout.controlConfig.minGap || 8}
                  max={layout.controlConfig.maxGap || 48}
                  step={layout.controlConfig.gapStep || 4}
                  value={controls.gap}
                  onChange={(e) => setControls({ ...controls, gap: Number(e.target.value) })}
                  className="w-24 sm:w-32 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <span className="font-mono text-brand-400 font-medium">{controls.gap}px</span>
              </div>
            )}

            {/* Columns Slider */}
            {layout.controlConfig.hasColumnsControl && (
              <div className="flex items-center gap-3">
                <span className="text-slate-400 font-medium">Columns / Width:</span>
                <input
                  type="range"
                  min={layout.controlConfig.minColumns || 2}
                  max={layout.controlConfig.maxColumns || 4}
                  step={layout.controlConfig.minColumns && layout.controlConfig.minColumns > 10 ? 20 : 1}
                  value={controls.columns || layout.controlConfig.minColumns}
                  onChange={(e) => setControls({ ...controls, columns: Number(e.target.value) })}
                  className="w-24 sm:w-28 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <span className="font-mono text-brand-400 font-medium">
                  {controls.columns}
                  {controls.columns && controls.columns > 10 ? 'px' : ' cols'}
                </span>
              </div>
            )}

            {/* Sidebar Position Toggle */}
            {layout.controlConfig.hasSidebarPositionControl && (
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-medium">Orientation:</span>
                <div className="flex rounded-lg bg-slate-900 border border-slate-800 p-0.5">
                  <button
                    onClick={() => setControls({ ...controls, sidebarPosition: 'left' })}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition ${
                      controls.sidebarPosition !== 'right'
                        ? 'bg-brand-500 text-slate-950 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Left
                  </button>
                  <button
                    onClick={() => setControls({ ...controls, sidebarPosition: 'right' })}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition ${
                      controls.sidebarPosition === 'right'
                        ? 'bg-brand-500 text-slate-950 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Right
                  </button>
                </div>
              </div>
            )}

            {/* Container Boxed vs Fluid */}
            {layout.controlConfig.hasContainerWidthControl && (
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-medium">Container:</span>
                <div className="flex rounded-lg bg-slate-900 border border-slate-800 p-0.5">
                  <button
                    onClick={() => setControls({ ...controls, containerWidth: 'boxed' })}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition ${
                      controls.containerWidth === 'boxed'
                        ? 'bg-brand-500 text-slate-950 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Boxed
                  </button>
                  <button
                    onClick={() => setControls({ ...controls, containerWidth: 'fluid' })}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition ${
                      controls.containerWidth !== 'boxed'
                        ? 'bg-brand-500 text-slate-950 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Full Width
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Responsive Live Preview Stage */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center overflow-x-auto min-h-[380px]">
            <div className="text-[11px] text-slate-500 mb-2 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live Interactive Preview ({viewportMode === 'fluid' ? '100% Fluid' : `${customWidth}px viewport`})
            </div>

            {/* Simulated Device Frame */}
            <div
              className="mx-auto shadow-2xl rounded-xl border border-slate-800/80 overflow-hidden transition-all duration-150"
              style={{
                width: viewportMode === 'fluid' ? '100%' : `${customWidth}px`,
                maxWidth: '100%',
              }}
            >
              {layout.renderPreview(controls, isDarkMode)}
            </div>
          </div>

          {/* Multi-Framework Code Snippet Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white text-sm flex items-center gap-2">
                <span>Code Snippet Generator</span>
                <span className="text-[10px] text-slate-400 font-normal">
                  (Dynamically updates with your interactive knob changes)
                </span>
              </h3>
            </div>

            <CodeViewer
              framework={framework}
              setFramework={setFramework}
              codeData={activeCodeData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
