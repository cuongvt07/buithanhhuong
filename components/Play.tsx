'use client';

import React, { useRef, useState, useEffect } from 'react';

const Play: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [canvasSize, setCanvasSize] = useState({ width: 10000, height: 10000 });

  // Vị trí cố định của nội dung chính (tính từ góc trên bên trái của canvas)
  const FIXED_CONTENT_POSITION = {
    x: 5000, // Giữa canvas theo chiều ngang
    y: 2000  // Cách top 2000px
  };

  useEffect(() => {
    // Căn giữa nội dung chính khi load trang
    if (canvasRef.current) {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      setPosition({
        x: -(FIXED_CONTENT_POSITION.x - viewportWidth / 2),
        y: -(FIXED_CONTENT_POSITION.y - viewportHeight / 2 + 200)
      });
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const newX = e.clientX - startPos.x;
    const newY = e.clientY - startPos.y;

    setPosition({ x: newX, y: newY });

    // Expand canvas if approaching edges
    const threshold = 500;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let newWidth = canvasSize.width;
    let newHeight = canvasSize.height;
    let needsExpansion = false;

    // Check right edge
    if (-newX + viewportWidth > canvasSize.width - threshold) {
      newWidth = canvasSize.width + 2000;
      needsExpansion = true;
    }

    // Check bottom edge
    if (-newY + viewportHeight > canvasSize.height - threshold) {
      newHeight = canvasSize.height + 2000;
      needsExpansion = true;
    }

    // Check left edge
    if (-newX < threshold) {
      newWidth = canvasSize.width + 2000;
      setPosition({ x: newX - 2000, y: newY });
      needsExpansion = true;
    }

    // Check top edge
    if (-newY < threshold) {
      newHeight = canvasSize.height + 2000;
      setPosition({ x: newX, y: newY - 2000 });
      needsExpansion = true;
    }

    if (needsExpansion) {
      setCanvasSize({ width: newWidth, height: newHeight });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Xử lý lăn chuột để scroll ngang
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();

    // Lăn chuột sẽ scroll ngang
    const scrollSpeed = 1.5; // Tốc độ scroll
    const newX = position.x - (e.deltaY * scrollSpeed);
    const newY = position.y;

    setPosition({ x: newX, y: newY });

    // Expand canvas if approaching edges
    const threshold = 500;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let newWidth = canvasSize.width;
    let newHeight = canvasSize.height;
    let needsExpansion = false;

    // Check right edge (scroll sang phải)
    if (-newX + viewportWidth > canvasSize.width - threshold) {
      newWidth = canvasSize.width + 2000;
      needsExpansion = true;
    }

    // Check left edge (scroll sang trái)
    if (-newX < threshold) {
      newWidth = canvasSize.width + 2000;
      setPosition({ x: newX - 2000, y: newY });
      needsExpansion = true;
    }

    if (needsExpansion) {
      setCanvasSize({ width: newWidth, height: newHeight });
    }
  };

  return (
    <div
      className="fixed inset-0 overflow-hidden bg-white cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onWheel={handleWheel}
      style={{ userSelect: 'none' }}
    >
      <div
        ref={canvasRef}
        className="absolute"
        style={{
          width: `${canvasSize.width}px`,
          height: `${canvasSize.height}px`,
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: isDragging ? 'none' : 'transform 0.1s ease-out',
        }}
      >
        {/* Content positioned absolutely within the infinite canvas */}
        <div className="absolute" style={{
          left: `${FIXED_CONTENT_POSITION.x}px`,
          top: `${FIXED_CONTENT_POSITION.y}px`,
          transform: 'translateX(-50%)'
        }}>
          <div className="max-w-7xl mx-auto px-8 md:px-24">
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
        </div>

        {/* Additional scattered elements for infinite canvas effect - Vị trí cố định */}
        <div className="absolute" style={{
          left: `${FIXED_CONTENT_POSITION.x - 800}px`,
          top: `${FIXED_CONTENT_POSITION.y - 400}px`
        }}>
          <div className="w-32 h-32 bg-pink-200 rounded-full opacity-50"></div>
        </div>
        <div className="absolute" style={{
          left: `${FIXED_CONTENT_POSITION.x + 600}px`,
          top: `${FIXED_CONTENT_POSITION.y + 200}px`
        }}>
          <div className="w-24 h-24 bg-blue-200 rounded-lg opacity-50"></div>
        </div>
        <div className="absolute" style={{
          left: `${FIXED_CONTENT_POSITION.x + 400}px`,
          top: `${FIXED_CONTENT_POSITION.y - 300}px`
        }}>
          <div className="w-40 h-40 bg-yellow-200 opacity-50 transform rotate-45"></div>
        </div>
        <div className="absolute" style={{
          left: `${FIXED_CONTENT_POSITION.x - 600}px`,
          top: `${FIXED_CONTENT_POSITION.y + 800}px`
        }}>
          <div className="w-28 h-28 bg-green-200 rounded-full opacity-50"></div>
        </div>
      </div>

      {/* Position indicator */}
      <div className="fixed bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg text-xs font-mono">
        x: {Math.round(-position.x)} | y: {Math.round(-position.y)}
      </div>
    </div>
  );
};

export default Play;
