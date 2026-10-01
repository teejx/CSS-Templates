import { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { LayoutCard } from './components/LayoutCard';
import { LayoutInspector } from './components/LayoutInspector';
import { ComponentsPreview } from './components/ComponentsPreview';
import { HowToUseModal } from './components/HowToUseModal';
import { allLayouts, layoutCategories } from './data/layouts';
import { LayoutTemplate, LayoutCategory } from './types';
import { Sparkles, CheckCircle2, LayoutGrid, BookOpen } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<'layouts' | 'components'>('layouts');
  const [selectedCategory, setSelectedCategory] = useState<LayoutCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLayout, setSelectedLayout] = useState<LayoutTemplate | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  // Sync dark class on html root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle ESC key to close modal or inspector
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isGuideOpen) {
          setIsGuideOpen(false);
        } else if (selectedLayout) {
          setSelectedLayout(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedLayout, isGuideOpen]);

  // Filtered layouts based on category and search query
  const filteredLayouts = useMemo(() => {
    return allLayouts.filter((layout) => {
      const matchesCategory =
        selectedCategory === 'all' || layout.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        layout.title.toLowerCase().includes(q) ||
        layout.description.toLowerCase().includes(q) ||
        layout.cssTechnique.toLowerCase().includes(q) ||
        layout.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'} flex flex-col font-sans transition-colors duration-200`}>
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        totalLayouts={allLayouts.length}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      {/* Main Content View */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'components' ? (
          <ComponentsPreview />
        ) : (
          <div className="space-y-8">
            {/* Hero Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

              <div className="relative z-10 max-w-3xl space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Production CSS Layout Studio</span>
                  </div>

                  <button
                    onClick={() => setIsGuideOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white text-xs font-medium transition cursor-pointer shadow-sm"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-brand-400" />
                    <span>How to Use Guide</span>
                  </button>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                  Responsive CSS Layouts with <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-emerald-300 to-teal-400">
                    Turnkey Framework Snippets
                  </span>
                </h1>

                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Stop reinventing layout boilerplate. Browse battle-tested responsive layouts, test them dynamically with mobile & tablet viewports, tune spacing knobs live, and copy snippets for{' '}
                  <strong className="text-slate-200 font-medium">HTML/CSS</strong>,{' '}
                  <strong className="text-slate-200 font-medium">Tailwind CSS</strong>,{' '}
                  <strong className="text-slate-200 font-medium">React TSX</strong>,{' '}
                  <strong className="text-slate-200 font-medium">Vue</strong>, and{' '}
                  <strong className="text-slate-200 font-medium">Svelte</strong>.
                </p>

                {/* Feature highlights bar */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-400" />
                    <span>12 Responsive Layouts</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-400" />
                    <span>5 Languages & Frameworks</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-400" />
                    <span>Interactive Viewport Resizer</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-400" />
                    <span>Live Parameter Controls</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter and Category Navigation */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                {layoutCategories.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  const count =
                    cat.id === 'all'
                      ? allLayouts.length
                      : allLayouts.filter((l) => l.category === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id as LayoutCategory)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                        isSelected
                          ? 'bg-brand-500 text-slate-950 shadow-md shadow-brand-500/20'
                          : 'bg-slate-900/80 hover:bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                          isSelected ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-500'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Layout count indicator */}
              <div className="text-xs text-slate-400 font-mono flex items-center gap-2 self-end md:self-auto">
                <LayoutGrid className="w-3.5 h-3.5 text-slate-500" />
                <span>Showing {filteredLayouts.length} of {allLayouts.length} layouts</span>
              </div>
            </div>

            {/* Layouts Grid */}
            {filteredLayouts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLayouts.map((layout) => (
                  <LayoutCard
                    key={layout.id}
                    layout={layout}
                    onSelect={(l) => setSelectedLayout(l)}
                    isDarkMode={isDarkMode}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-slate-400 text-xl">
                  🔍
                </div>
                <h3 className="text-lg font-bold text-white">No layouts found</h3>
                <p className="text-slate-400 text-xs max-w-sm mx-auto">
                  No layout templates match "{searchQuery}". Try searching for terms like "grid", "hero", "dashboard", or clear your search filter.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-4 py-2 rounded-xl bg-brand-500 text-slate-950 font-bold text-xs shadow-md"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/80 py-8 mt-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300">CraftLayout</span>
            <span>— Responsive CSS Templates Studio</span>
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <span>Vanilla CSS</span>
            <span>Tailwind CSS</span>
            <span>React</span>
            <span>Vue</span>
            <span>Svelte</span>
          </div>
        </div>
      </footer>

      {/* Interactive Studio Modal / Inspector */}
      {selectedLayout && (
        <LayoutInspector
          layout={selectedLayout}
          onClose={() => setSelectedLayout(null)}
          isDarkMode={isDarkMode}
          onOpenGuide={() => setIsGuideOpen(true)}
        />
      )}

      {/* How to Use Guide Modal */}
      <HowToUseModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
}

export default App;
