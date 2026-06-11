import React, { useState } from 'react';
import { allLearningSections } from '../data/learning-guide';

interface LearnPageProps {
  language: 'bn' | 'en';
}

const LearnPage: React.FC<LearnPageProps> = ({ language }) => {
  const [selectedSection, setSelectedSection] = useState<string>('introduction');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentSection = allLearningSections.find(s => s.id === selectedSection) || allLearningSections[0];

  const renderMarkdown = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeContent = '';

    lines.forEach((line, index) => {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre key={`code-${index}`} className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm">
              {codeContent}
            </pre>
          );
          codeContent = '';
        }
        inCodeBlock = !inCodeBlock;
        return;
      }

      if (inCodeBlock) {
        codeContent += line + '\n';
        return;
      }

      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">
            {line.slice(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-gray-800 mt-6 mb-3 border-b border-gray-200 pb-2">
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-xl font-semibold text-gray-700 mt-4 mb-2">
            {line.slice(4)}
          </h3>
        );
      } else if (line.startsWith('#### ')) {
        elements.push(
          <h4 key={index} className="text-lg font-semibold text-gray-600 mt-3 mb-2">
            {line.slice(5)}
          </h4>
        );
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={index} className="ml-4 text-gray-700 mb-1">
            • {line.slice(2)}
          </li>
        );
      } else if (line.match(/^\d+\./)) {
        elements.push(
          <li key={index} className="ml-4 text-gray-700 mb-1">
            {line}
          </li>
        );
      } else if (line.includes('**')) {
        const parts = line.split(/\*\*(.+?)\*\*/g);
        elements.push(
          <p key={index} className="text-gray-700 mb-2">
            {parts.map((part, i) => 
              i % 2 === 1 ? <strong key={i} className="font-semibold">{part}</strong> : part
            )}
          </p>
        );
      } else if (line.startsWith('✅') || line.startsWith('❌')) {
        elements.push(
          <div key={index} className="flex items-center gap-2 mb-1 text-gray-700">
            {line}
          </div>
        );
      } else if (line.startsWith('|')) {
        elements.push(
          <div key={index} className="overflow-x-auto my-1">
            <code className="text-sm bg-gray-100 px-2 py-1 rounded block">{line}</code>
          </div>
        );
      } else if (line.trim()) {
        elements.push(
          <p key={index} className="text-gray-700 mb-3 leading-relaxed">
            {line}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed bottom-4 right-4 z-50 w-14 h-14 bg-purple-600 text-white rounded-full shadow-lg flex items-center justify-center"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <aside className={`
          fixed lg:sticky top-16 lg:top-0 left-0 h-[calc(100vh-4rem)] lg:h-screen w-72 bg-white shadow-lg overflow-y-auto z-40
          transform transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              📖 {language === 'bn' ? 'বিষয়সূচি' : 'Contents'}
            </h2>
            <p className="text-xs text-gray-500 mb-4">
              {language === 'bn' ? `${allLearningSections.length}টি অধ্যায়` : `${allLearningSections.length} Chapters`}
            </p>
            <nav className="space-y-1">
              {allLearningSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setSelectedSection(section.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm ${
                    selectedSection === section.id
                      ? 'bg-purple-100 text-purple-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {language === 'bn' ? section.titleBn : section.titleEn}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
          />
        )}

        <main className="flex-1 min-h-screen">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
              <span>{language === 'bn' ? 'শিখুন' : 'Learn'}</span>
              <span>›</span>
              <span className="text-purple-600 font-medium">
                {language === 'bn' ? currentSection.titleBn : currentSection.titleEn}
              </span>
            </div>

            <article className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="prose prose-lg max-w-none">
                {renderMarkdown(language === 'bn' ? currentSection.contentBn : currentSection.contentEn)}
              </div>
            </article>

            <div className="mt-8 flex justify-between">
              {(() => {
                const currentIndex = allLearningSections.findIndex(s => s.id === selectedSection);
                const prevSection = currentIndex > 0 ? allLearningSections[currentIndex - 1] : null;
                const nextSection = currentIndex < allLearningSections.length - 1 ? allLearningSections[currentIndex + 1] : null;

                return (
                  <>
                    {prevSection ? (
                      <button
                        onClick={() => setSelectedSection(prevSection.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                      >
                        ◀ {language === 'bn' ? prevSection.titleBn : prevSection.titleEn}
                      </button>
                    ) : <div />}
                    {nextSection && (
                      <button
                        onClick={() => setSelectedSection(nextSection.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                      >
                        {language === 'bn' ? nextSection.titleBn : nextSection.titleEn} ▶
                      </button>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LearnPage;
