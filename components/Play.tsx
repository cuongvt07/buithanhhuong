'use client';

import React, { useRef, useState, useEffect } from 'react';

// === CONFIGURATION ===

interface PlayImageConfig {
  id: number;
  defaultSrc: string;
  hoverSrc?: string; // Ảnh hiển thị khi hover
  width: string;     // Kích thước (vd: "300px", "20vw")
  // Vị trí (theo px relative to center area)
  left?: number;
  top?: number;
  zIndex?: number;
  className?: string; // Class CSS tùy chỉnh thêm nếu cần
}

// TODO: USER_FILL_DATA
// Điền thông tin ảnh, vị trí, kích thước vào đây.
// Vị trí (top, left) tính từ điểm GỐC (center) của vùng content (FIXED_CONTENT_POSITION).
const PLAY_IMAGES: PlayImageConfig[] = [
  // Ví dụ 1: Ảnh lớn bên trái
  {
    id: 1,
    defaultSrc: "images/123.png",
    width: "279px",
    left: 440,
    top: -220,
    zIndex: 1
  },
  // Ví dụ 2: Voca Memo dots (thay bằng ảnh thật nếu có)
  {
    id: 2,
    defaultSrc: "images/Vocamemo1.png",
    width: "306px",
    left: -880,
    top: 0,
  },
  // Ví dụ 3: Logo xanh giữa
  {
    id: 3,
    defaultSrc: "images/547.png",
    hoverSrc: "images/548.png",
    width: "127px",
    left: -95, // Gần giữa
    top: 150,
  },
  // Ví dụ 4: Rice Landing Page bên phải
  {
    id: 4,
    defaultSrc: "images/123456.png",
    width: "306px",
    left: -640,
    top: 370
  },
  // Ví dụ 5: Scattered element (Pink circle)
  {
    id: 5,
    defaultSrc: "images/12345678.png",
    width: "191px",
    left: 0,
    top: 560
  },
  // Ví dụ 6: Scattered element (Blue rect)
  {
    id: 6,
    defaultSrc: "images/riceielts1.png",
    hoverSrc: "images/riceielts2.png",
    width: "532px",
    left: 525,
    top: 500
  },
];

// Helper component for individual images handling hover
const PlayImageItem: React.FC<{ config: PlayImageConfig }> = ({ config }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`absolute ${config.className || ''}`}
      style={{
        left: `${config.left || 0}px`,
        top: `${config.top || 0}px`,
        width: config.width,
        zIndex: config.zIndex || 1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={(isHovered && config.hoverSrc) ? config.hoverSrc : config.defaultSrc}
        alt={`Play item ${config.id}`}
        className="w-full h-auto object-contain pointer-events-none" // pointer-events-none để tránh việc drag ảnh thay vì drag canvas
      />
    </div>
  );
};

const Play: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [canvasSize, setCanvasSize] = useState({ width: 10000, height: 10000 });

  // Vị trí GỐC của nội dung chính (tính từ góc trên bên trái của canvas)
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

    // Check edges expansion logic for wheel (simpler version or reused)
    if (-newX + viewportWidth > canvasSize.width - threshold) {
      newWidth = canvasSize.width + 2000;
      needsExpansion = true;
    }

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
    <div className="w-full h-screen bg-[#FAF7F3] relative overflow-hidden">

      {/* Mobile Vertical Layout */}
      <div className="md:hidden w-full h-full overflow-y-auto pt-20 pb-24 px-0 flex flex-col items-center gap-8">
        {PLAY_IMAGES.map((config) => (
          <div key={config.id} className="w-full flex justify-center">
            <img
              src={config.defaultSrc}
              alt={`Play item ${config.id}`}
              className="w-full max-w-[300px] h-auto object-contain rounded-sm shadow-sm"
            />
          </div>
        ))}
      </div>

      {/* Desktop Infinite Canvas Layout */}
      <div
        className="hidden md:block fixed inset-0 overflow-hidden bg-[#FAF7F3] cursor-grab active:cursor-grabbing"
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
            left: `${FIXED_CONTENT_POSITION.x}px`, // Center point
            top: `${FIXED_CONTENT_POSITION.y}px`,
            // Note: transform logic removed here because individual items have their own relative offsets
          }}>

            {/* Render Images from Configuration */}
            {PLAY_IMAGES.map((config) => (
              <PlayImageItem key={config.id} config={config} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
