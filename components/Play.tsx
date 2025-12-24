
import React from 'react';

const Play: React.FC = () => {
  return (
    <section className="min-h-screen pt-40 pb-48 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-32 items-start">
          
          {/* Cột trái - Voca Memo studies */}
          <div className="md:col-span-4 space-y-32">
             <div className="aspect-[1.2/1] bg-gray-50 flex items-center justify-center p-8 shadow-sm">
                <img src="https://picsum.photos/seed/cards/600/400" className="w-full h-auto object-contain" alt="Process work" />
             </div>
             <div className="aspect-square w-full bg-white flex flex-col items-center justify-center space-y-6 shadow-sm p-12">
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-green-500 border-2 border-orange-400 flex items-center justify-center overflow-hidden">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] tracking-widest text-gray-300 uppercase">Voca Memo studies</p>
             </div>
          </div>

          {/* Cột giữa - Blue Logo & Voca Memo Variants */}
          <div className="md:col-span-4 md:mt-64 space-y-32">
             <div className="aspect-square bg-[#0052ff] flex items-center justify-center shadow-2xl transform -rotate-1 group hover:rotate-0 transition-transform">
                <div className="text-white text-6xl font-bold flex flex-col items-center">
                   <div className="flex gap-2">
                     <div className="w-3 h-3 bg-white"></div>
                     <div className="w-3 h-3 bg-white"></div>
                   </div>
                   <div className="flex gap-2 mt-1">
                     <div className="w-3 h-3 bg-white"></div>
                     <div className="w-3 h-8 bg-white"></div>
                     <div className="w-3 h-3 bg-white"></div>
                   </div>
                </div>
             </div>
             <div className="aspect-[4/5] bg-[#7a88ff] p-12 flex flex-col items-center justify-center shadow-md">
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full border border-orange-400"></div>
                    <span className="text-white text-[10px] font-bold">VOCA MEMO</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full border border-orange-400"></div>
                    <span className="text-white text-[10px] font-bold">VOCA MEMO</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full border border-orange-400"></div>
                    <span className="text-white text-[10px] font-bold opacity-70">VOCA MEMO</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full border border-orange-400"></div>
                    <span className="text-white text-[10px] font-bold opacity-70">VOCA MEMO</span>
                  </div>
                </div>
             </div>
          </div>

          {/* Cột phải - Rice Landing Page */}
          <div className="md:col-span-4 space-y-20">
             <div className="aspect-[1.4/1] bg-[#002884] p-6 shadow-2xl relative overflow-hidden group">
                <div className="bg-white rounded-lg p-6 h-full flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold text-blue-900">rice</span>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <h4 className="text-xl font-bold leading-tight text-blue-900">Get your <span className="underline decoration-red-500">IELTS</span></h4>
                    <h4 className="text-xl font-bold leading-tight text-blue-900">Touch your <span className="border-2 border-red-500 rounded-full px-2">dreams</span></h4>
                  </div>
                  <div className="flex gap-2 mb-8">
                    <div className="px-3 py-1 bg-blue-900 text-[8px] text-white rounded-sm">Free test</div>
                    <div className="px-3 py-1 bg-teal-400 text-[8px] text-white rounded-sm">Register now</div>
                  </div>
                  <div className="flex gap-4 flex-1">
                    <div className="flex-1 bg-red-400 rounded-tr-[40px] p-4 flex flex-col justify-end">
                      <span className="text-white text-[8px] font-bold">IELTS URGENTLY</span>
                    </div>
                    <div className="flex-1 bg-teal-400 p-4 flex flex-col justify-end">
                      <span className="text-white text-[8px] font-bold">IELTS 1 VS 1</span>
                    </div>
                  </div>
                </div>
             </div>
          </div>

        </div>

        {/* Final CTA */}
        <div className="mt-80 text-center">
          <div className="font-serif italic text-gray-400 mb-8 text-[15px] tracking-tight">| wanna talk?</div>
          <a href="mailto:hello@buithanhhuong.com" className="text-6xl md:text-[120px] font-light hover:italic transition-all border-b border-black/5 pb-4 inline-block tracking-tighter leading-none text-[#2d3a2d]">
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

export default Play;
