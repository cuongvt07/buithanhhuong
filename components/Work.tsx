import React from 'react';

const Work: React.FC = () => {
  const projects = [
    { title: 'thêu một mùa thu', img: '/images/1.avif', scale: 0.9, marginRight: 100 },
    { title: 'vgbc', img: '/images/2.avif', scale: 0.8, marginRight: 80 },
    { title: 'a seal imprint', img: '/images/3.avif', scale: 0.6, marginRight: 100 },
    { title: 'vnielts', img: '/images/4.avif', scale: 1, marginRight: 120 },
    { title: 'fishy feast', img: '/images/5.avif', scale: 0.5, marginRight: 20 },
    { title: 'What color was your day?', img: '/images/6.avif', scale: 0.7, marginRight: 80 },
    { title: 'vici dentia', img: '/images/7.avif', scale: 1.3, marginRight: 0 },
  ];

  return (
    <section className="h-full pt-20 px-0 w-full relative overflow-hidden flex flex-col justify-center">
      <div className="flex w-full px-8 sm:px-12 items-end justify-start">
        {/* Ghost Spacer to align first image with 'Bui,' */}
        <span className="font-stix text-[15px] italic text-transparent select-none whitespace-pre flex-shrink-0">Hi, I'm Thanh Huong </span>

        {projects.map((p, i) => (
          <div key={i} className="space-y-4 flex flex-col items-center group flex-shrink min-w-0" style={{ marginRight: `${p.marginRight}px`, width: `${p.scale * 100}%` }}>
            <div
              className="w-full bg-gray-50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 cursor-crosshair"
            >
              <img src={p.img} alt={p.title} className="w-full h-auto object-cover transition-all duration-1000" />
            </div>
            <p className="font-serif text-[13px] text-[#1d3413] italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap">{p.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
