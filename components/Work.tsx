import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel, Keyboard, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

const Work: React.FC = () => {
  const projects = [
    { title: 'thêu một mùa thu', img: 'images/1.avif', scale: 0.1, marginRight: 100 },
    { title: 'vgbc', img: 'images/2.avif', scale: 0.1, marginRight: 80 },
    { title: 'a seal imprint', img: 'images/3.avif', scale: 0.1, marginRight: 100 },
    { title: 'vnielts', img: 'images/4.avif', scale: 0.1, marginRight: 120 },
    { title: 'fishy feast', img: 'images/5.avif', scale: 0.1, marginRight: 20 },
    { title: 'What color was your day?', img: 'images/6.avif', scale: 0.1, marginRight: 80 },
    { title: 'vici dentia', img: 'images/7.avif', scale: 0.1, marginRight: 100 },
    { title: 'vici dentia', img: 'images/8.png', scale: 0.1, marginRight: 0 },
  ];

  return (
    <section className="min-h-screen pt-20 px-0 w-full relative overflow-hidden flex flex-col justify-center">
      {/* Visual background alignment cue */}
      <div className="flex w-full items-end justify-start pointer-events-none absolute left-0 z-20 px-8 bottom-[20%]">
        <span className="font-stix text-[15px] italic text-transparent select-none whitespace-pre flex-shrink-0">Hi, I'm Thanh Huong </span>
      </div>

      <Swiper
        direction={'horizontal'}
        slidesPerView={'auto'}
        spaceBetween={0}
        freeMode={true}
        mousewheel={true}
        keyboard={true}
        scrollbar={{ draggable: true, hide: false }}
        modules={[FreeMode, Mousewheel, Keyboard, Scrollbar]}
        className="w-full h-full flex items-center swiper-work"
      >
        {/* Initial spacer slide */}
        <SwiperSlide style={{ width: 'auto' }} className="!flex items-end pl-8">
          <span className="font-stix text-[15px] italic text-transparent select-none whitespace-pre">Hi, I'm Thanh Huong </span>
        </SwiperSlide>

        {projects.map((p, i) => (
          <SwiperSlide key={i} style={{ width: 'auto', marginRight: `${p.marginRight}px` }} className="!flex items-end !h-auto pb-12">
            <div
              className="space-y-4 flex flex-col items-center group flex-shrink-0"
              style={{ width: `${p.scale * 100}vw` }}
            >
              <div className="w-full bg-gray-50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 cursor-crosshair">
                <img src={p.img} alt={p.title} className="w-full h-auto object-cover transition-all duration-1000" />
              </div>
              <p className="font-serif text-[13px] text-[#1d3413] italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap">
                {p.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
        {/* End padding slide */}
        <SwiperSlide style={{ width: '32px' }} />
      </Swiper>

      <style dangerouslySetInnerHTML={{
        __html: `
        .swiper-work .swiper-scrollbar {
          background: rgba(29, 52, 19, 0.1);
          height: 2px;
          bottom: 40px;
          left: 8% !important;
          width: 84% !important;
        }
        .swiper-work .swiper-scrollbar-drag {
          background: rgb(29, 52, 19);
        }
      `}} />
    </section>
  );
};

export default Work;
