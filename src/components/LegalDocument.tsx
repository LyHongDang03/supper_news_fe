import React from 'react';

interface LegalDocumentProps {
  title: string;
  children: React.ReactNode;
}

const LegalDocument: React.FC<LegalDocumentProps> = ({ title, children }) => {
  return (
    <div className="min-min-h-screen bg-gray-100 py-10 px-4 md:px-0">
      <main className="max-w-4xl mx-auto bg-white shadow-lg p-8 md:p-16 border border-gray-200">
        <div className="font-sans text-gray-900 
          [&_h2]:font-bold [&_h2]:text-xl [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:uppercase
          [&_h3]:font-bold [&_h3]:text-lg [&_h3]:mt-6 [&_h3]:mb-3
          [&_p]:mb-4 [&_p]:text-justify [&_p]:leading-relaxed
          [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4
          [&_li]:mb-2
          [&_blockquote]:border-l-4 [&_blockquote]:border-gray-200 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-6
          [&_strong]:font-bold
          print:shadow-none print:border-none print:max-w-full print:p-0">
          <h1 className="text-2xl md:text-3xl font-bold text-center uppercase mb-12 tracking-tight">
            {title}
          </h1>
          <div className="legal-content">
            {children}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between text-sm text-gray-500 print:mt-8">
            <div>
              <p className="!mb-0">Tập đoàn Bưu chính Viễn thông Việt Nam (VNPT)</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LegalDocument;
