import React from 'react';

const Hero: React.FC = () => {
  interface ImageConfig {
    src: string;
    width: string;
    x: number;
    y: number;
  }

  const wordImages: Record<string, ImageConfig> = {
    earth: { src: '/images/earth.avif', width: '250px', x: 0, y: 0 },
    news: { src: '/images/news.avif', width: '150px', x: -350, y: 0 },
    pat: { src: '/images/pat.avif', width: '200px', x: 400, y: 10 },
    flowers: { src: '/images/theflower.avif', width: '300px', x: 0, y: 0 },
  };

  const renderLine = (text: string) => {
    return text.split(' ').map((word, index) => {
      const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
      const config = wordImages[cleanWord];

      if (config) {
        return (
          <span key={index} className="group relative inline-block cursor-help mx-1 first:ml-0 last:mr-0">
            {word}
            {/* Position Wrapper */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
              style={{
                width: config.width,
                marginLeft: `${config.x}px`,
                marginTop: `${config.y}px`
              }}
            >
              <img
                src={config.src}
                alt={word}
                className="w-full h-auto object-cover opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-center shadow-xl rounded-sm"
              />
            </div>
          </span>
        );
      }
      return <span key={index} className="mx-1 first:ml-0 last:mr-0">{word}</span>;
    });
  };

  return (
    <section className="h-full flex flex-col justify-center items-center px-6 relative overflow-hidden">

      <div className="flex flex-col z-10 select-none w-fit mx-auto space-y-4 translate-x-[50px]">
        <div className="w-fit text-left ml-[340px] relative z-20 hover:z-10">
          <h1 className="hero-title">{renderLine("I WALK")}</h1>
        </div>
        <div className="w-fit text-left ml-[100px] relative z-20 hover:z-10">
          <h1 className="hero-title">{renderLine("THIS EARTH,")}</h1>
        </div>
        <div className="w-fit text-left ml-[280px] !mb-[15px] relative z-20 hover:z-10">
          <h1 className="hero-title">{renderLine("WATER THE FLOWERS,")}</h1>
        </div>
        <div className="w-fit text-left -ml-[100px] !mb-[15px] relative z-20 hover:z-10">
          <h1 className="hero-title">{renderLine("PAT THE LITTLE PUPPIES,")}</h1>
        </div>
        <div className="w-fit flex items-baseline space-x-6 ml-[260px] !mb-[15px] relative z-20 hover:z-10">
          <h1 className="relative hero-title">
            {renderLine("SEW,")}
            <div className="light-leak absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.96] pointer-events-none opacity-100"></div>
          </h1>
          <h1 className="hero-title">{renderLine("GROW RICE, AND")}</h1>
        </div>
        <div className="w-fit text-left ml-[90px] !mb-[15px] relative z-20 hover:z-10">
          <h1 className="hero-title">{renderLine("READ ARCHITECTURE NEWS")}</h1>
        </div>
      </div>

      <div className="absolute bottom-12 w-full flex justify-center items-center space-x-12 bottom-text">
        <span>(</span>
        <span className="tracking-wide">or mostly just breathe</span>
        <span>)</span>
      </div>
    </section>
  );
};

export default Hero;