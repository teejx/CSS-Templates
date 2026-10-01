import { Layout, Sun, Moon, Search, Layers, Github, HelpCircle } from 'lucide-react';

interface HeaderProps {
  activeTab: 'layouts' | 'components';
  setActiveTab: (tab: 'layouts' | 'components') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  totalLayouts: number;
  onOpenGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  isDarkMode,
  setIsDarkMode,
  totalLayouts,
  onOpenGuide,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('layouts')}>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-500 to-emerald-400 p-[1.5px] shadow-lg shadow-brand-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-brand-400">
                  <Layout className="w-5 h-5" />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-white flex items-center gap-1.5">
                  Craft<span className="text-brand-400">Layout</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded font-mono font-normal bg-brand-500/10 text-brand-400 border border-brand-500/20">
                    CSS Studio
                  </span>
                </span>
                <p className="text-[10px] text-slate-400 hidden sm:block">Production-ready CSS layouts for developers</p>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab('layouts')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'layouts'
                    ? 'bg-brand-500 text-slate-950 shadow-md shadow-brand-500/20'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layout className="w-3.5 h-3.5" />
                Layouts
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${activeTab === 'layouts' ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                  {totalLayouts}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('components')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'components'
                    ? 'bg-brand-500 text-slate-950'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                Components
                <span className="text-[9px] px-1.5 py-0.5 rounded-full font-medium bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  Soon
                </span>
              </button>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md hidden sm:block">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search templates (e.g. holy grail, grid, dashboard, flexbox)..."
                className="w-full pl-9 pr-4 py-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 focus:border-brand-500 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenGuide}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-500/10 hover:bg-brand-500/20 text-brand-400 border border-brand-500/30 text-xs font-semibold transition shadow-sm"
              title="How to Use Guide"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">How to Use</span>
            </button>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              title={isDarkMode ? 'Switch to Light preview theme' : 'Switch to Dark preview theme'}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
            </button>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition hidden md:flex items-center"
              title="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
