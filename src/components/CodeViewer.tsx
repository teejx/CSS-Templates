import { useState } from 'react';
import { Check, Copy, Download, FileCode } from 'lucide-react';
import { FrameworkType } from '../types';

interface CodeViewerProps {
  framework: FrameworkType;
  setFramework: (framework: FrameworkType) => void;
  codeData: {
    code: string;
    language: string;
    filename: string;
  };
}

export const CodeViewer: React.FC<CodeViewerProps> = ({
  framework,
  setFramework,
  codeData,
}) => {
  const [copied, setCopied] = useState(false);

  const frameworks: { id: FrameworkType; label: string; badge: string }[] = [
    { id: 'html-css', label: 'HTML & CSS', badge: 'Vanilla' },
    { id: 'tailwind', label: 'Tailwind CSS', badge: 'Utility' },
    { id: 'react', label: 'React (TSX)', badge: 'React 18+' },
    { id: 'vue', label: 'Vue 3', badge: 'SFC' },
    { id: 'svelte', label: 'Svelte', badge: 'v4/v5' },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeData.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([codeData.code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = codeData.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const lines = codeData.code.split('\n');

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden flex flex-col shadow-xl">
      {/* Top Header Bar: Framework tabs & Actions */}
      <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Framework Tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          {frameworks.map((f) => (
            <button
              key={f.id}
              onClick={() => setFramework(f.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                framework === f.id
                  ? 'bg-brand-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/80'
              }`}
            >
              <span>{f.label}</span>
              <span
                className={`text-[9px] px-1 rounded ${
                  framework === f.id ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {f.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Filename and Actions */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400">
            <FileCode className="w-3.5 h-3.5 text-brand-400" />
            <span>{codeData.filename}</span>
          </div>

          <button
            onClick={handleCopy}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              copied
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
            }`}
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy Code'}</span>
          </button>

          <button
            onClick={handleDownload}
            title="Download file"
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-700 transition"
          >
            <Download className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Code Text Area with Line Numbers */}
      <div className="relative overflow-x-auto max-h-[380px] p-4 font-mono text-xs leading-relaxed bg-[#0b0f19]">
        <div className="flex">
          {/* Line Numbers */}
          <div className="select-none pr-4 text-slate-600 text-right border-r border-slate-800/80 shrink-0 font-mono text-[11px] space-y-0.5">
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Syntax Code */}
          <pre className="pl-4 text-slate-200 overflow-x-auto font-mono text-xs flex-1 selection:bg-brand-500 selection:text-slate-950">
            <code>{codeData.code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
