import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

const Work: React.FC = () => {
  const originalProjects = [
    { title: 'vgbc', img: 'images/2.avif', scale: 0.1, marginRight: 85 },
    { title: 'a seal imprint', img: 'images/3.avif', scale: 0.07, marginRight: 155 },
    { title: 'vnielts', img: 'images/4.avif', scale: 0.15, marginRight: 120 },
    { title: 'fishy feast', img: 'images/5.avif', scale: 0.05, marginRight: 30 },
    { title: 'What color was your day?', img: 'images/6.avif', scale: 0.07, marginRight: 80 },
    { title: 'vici dentia', img: 'images/7.avif', scale: 0.18, marginRight: 100 },
    { title: 'kickstart', img: 'images/8.png', scale: 0.1, marginRight: 50 },
    { title: 'thêu một mùa thu', img: 'images/1.avif', scale: 0.1, marginRight: 110 },
  ];

  const projects = Array(10).fill(originalProjects).flat();

  return (
    <section className="min-h-screen md:min-h-0 md:h-screen py-0 md:py-[210px] px-0 w-full relative overflow-hidden flex flex-col justify-end">

      {/* Mobile Vertical Layout */}
      <div className="md:hidden w-full flex flex-col items-center px-4 pt-20 pb-24 space-y-12 overflow-y-auto">
        {originalProjects.map((p, i) => (
          <div key={i} className="flex flex-col items-center w-full space-y-4">
            <div className="w-full max-w-[300px] overflow-hidden rounded-sm shadow-sm">
              <img src={p.img} alt={p.title} className="w-full h-auto object-cover" />
            </div>
            <p className="font-serif text-[15px] text-[#1d3413] italic">{p.title}</p>
          </div>
        ))}
      </div>

      {/* Desktop Swiper Layout */}
      <div className="hidden md:block w-full h-full relative">
        <div className="flex w-full items-end justify-start pointer-events-none absolute left-0 z-20 px-8 bottom-[20%]">
          {/* ... keeping original absolute spacer label if needed, or remove if unused ... */}
        </div>

        <Swiper
          direction="horizontal"
          slidesPerView="auto"
          spaceBetween={0}
          loop={true}
          loopedSlides={8}
          speed={800}
          grabCursor={true}
          freeMode={{
            enabled: true,
            momentum: true,
            momentumRatio: 0.8,
            momentumVelocityRatio: 1,
            momentumBounce: false,
          }}
          mousewheel={{
            sensitivity: 1.2,
            forceToAxis: false,
          }}
          slidesOffsetBefore={32}
          keyboard={true}
          modules={[FreeMode, Mousewheel, Keyboard]}
          className="w-full h-full flex items-end swiper-work"
        >
          {projects.map((p, i) => (
            <SwiperSlide
              key={i}
              style={{ width: 'auto', paddingRight: `${p.marginRight}px` }}
              className="!flex items-end !h-auto"
            >
              <div
                className="space-y-4 flex flex-col items-center group flex-shrink-0"
                style={{ width: `${p.scale * 100}vw` }}
              >
                <div className="w-full overflow-hidden transition-all duration-700 cursor-crosshair max-h-[244px]">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-all duration-1000"
                  />
                </div>
                <p className="font-serif text-[13px] text-[#1d3413] italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap">
                  {p.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide style={{ width: '32px' }} />
        </Swiper>
      </div>
    </section>
  );
};

export default Work;
