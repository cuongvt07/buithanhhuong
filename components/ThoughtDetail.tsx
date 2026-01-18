import React, { useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { DEFAULT_ARTICLE, ContentBlock } from '../data/thought-content';
import ScrollToTop from './ScrollToTop';

interface ThoughtInfo {
    text: string;
    image?: {
        src: string;
    };
}

interface ThoughtDetailProps {
    isOpen: boolean;
    onClose: () => void;
    data: ThoughtInfo | null;
}

// Inner component to handle scroll logic safely when mounted
const ThoughtDetailContent: React.FC<{ data: ThoughtInfo; onClose: () => void }> = ({ data, onClose }) => {
    // We don't need useScroll anymore for the structural movement
    // The structure itself provides the behavior:
    // Scroll Container (100vh) -> spacers (15vh) + content

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return (
        <>
            {/* Scrollable Overlay Container */}
            <motion.div
                ref={scrollContainerRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9990] overflow-y-auto no-scrollbar scroll-smooth"
            >
                {/* Backdrop (fixed relative to screen, not scrolling) */}
                {/* Note: This might be covered by the container itself, but kept for visual blur */}
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
                />

                {/* Layout Wrapper: Spans full scrollable height */}
                {/* Added onClick={onClose} to handle clicks outside the card */}
                <div
                    className="min-h-full flex flex-col items-center cursor-pointer"
                    onClick={onClose}
                >

                    {/* Top Spacer: 15% of viewport initially */}
                    <div className="h-[15vh] w-full shrink-0" />

                    {/* Modal Card */}
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 200, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="bg-white shadow-2xl overflow-hidden relative shrink-0 cursor-auto modal-card"
                        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside card
                        style={{
                            width: 'calc(100% - (var(--popup-margin-x) * 2))',
                            marginLeft: 'var(--popup-margin-x)',
                            marginRight: 'var(--popup-margin-x)',
                            minHeight: '85vh', // Ensure it fills at least the "visible" part initially
                        }}
                    >
                        {/* Close Button - Absolute inside Modal */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 p-4 bg-[#FFFFFF99] hover:bg-white rounded-full transition-colors backdrop-blur-md md:hidden"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>

                        {/* Part 1: Full Width Image */}
                        {data.image && (
                            <div className="w-full shrink-0">
                                <img
                                    src={data.image.src}
                                    alt={data.text}
                                    className="w-full object-fill"
                                    style={{
                                        height: 'auto',
                                        maxHeight: '70vh',
                                        minHeight: '400px'
                                    }}
                                />
                            </div>
                        )}

                        {/* Part 2: Content Block */}
                        <div
                            className="flex flex-col md:mt-[56px] w-full box-border content-block"
                            style={{
                                paddingLeft: 'var(--content-padding-x)',
                                paddingRight: 'var(--content-padding-x)',
                                paddingBottom: '80px'
                            }}
                        >
                            {/* Title */}
                            <h2
                                className="text-gray-900 mb-8 mobile-title"
                                style={{
                                    fontFamily: '"Overused Grotesk", "Inter", sans-serif',
                                    fontWeight: 350,
                                    fontSize: '60px',
                                    lineHeight: '60px',
                                    letterSpacing: '0%',
                                    fontStyle: 'normal',
                                }}
                            >
                                {data.text}
                            </h2>

                            <div className="prose prose-xl max-w-none mobile-body">
                                {/* Dynamic Intro */}
                                <p className="text-gray-900 mb-12 font-stix text-3xl leading-relaxed italic border-l-4 border-[#1d3413] pl-8">
                                    {DEFAULT_ARTICLE.intro}
                                </p>

                                <div className="space-y-12 text-gray-700 font-inter leading-relaxed text-lg">
                                    {/* Dynamic Blocks */}
                                    {DEFAULT_ARTICLE.blocks.map((block: ContentBlock, index: number) => {
                                        if (block.type === 'paragraph' && block.content) {
                                            return <p key={index}>{block.content}</p>;
                                        }
                                        if (block.type === 'grid' && block.items) {
                                            return (
                                                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                    {block.items.map((item, idx) => (
                                                        <div key={idx} className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm">
                                                            <h4 className="text-xl font-bold mb-4 text-[#1d3413]">{item.title}</h4>
                                                            <p className="text-gray-600">{item.desc}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}

                                    {/* Mobile Bottom Close Button */}
                                    <div className="flex justify-center w-full md:hidden box-border" style={{ padding: '32px 32px 48px 32px' }}>
                                        <button
                                            onClick={onClose}
                                            className="hover:opacity-70 transition-opacity"
                                        >
                                            <img src="/images/Vector-close.svg" alt="Close" width="32" height="32" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Spacer: 15% padding at the end */}
                    <div className="h-[15vh] w-full shrink-0" />
                </div>
            </motion.div>

            {/* Internal ScrollToTop Button */}
            <ScrollToTop containerRef={scrollContainerRef} />

            <style>{`
        @font-face {
            font-family: 'Overused Grotesk';
            src: url('https://cdn.jsdelivr.net/npm/@fontsource/overused-grotesk@latest/files/overused-grotesk-book-350-normal.woff2') format('woff2');
            font-weight: 350;
            font-style: normal;
        }

        :root {
            /* 
              Fluid Scaling from 1440px to 1905px
              
              Popup Margin:
              - 1440px: 162px
              - 1905px: 290px
              - Formula: 162px + (290 - 162) * (100vw - 1440px) / (1905 - 1440)
              - Slope: 0.27526... -> ~27.53vw
              - Intercept: -234.38px
              - Clamp: min 162px, max 290px
              
              Content Padding:
              - 1440px: 178px
              - 1905px: 284px
              - Formula: 178px + (284 - 178) * (100vw - 1440px) / (1905 - 1440)
              - Slope: 0.22795... -> ~22.8vw
              - Intercept: -150.25px
              - Clamp: min 178px, max 284px
            */
            --popup-margin-x: clamp(162px, 27.53vw - 234px, 290px);
            --content-padding-x: clamp(178px, 22.8vw - 150px, 284px);
        }
        
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        /* Mobile Responsive Overrides */
        @media (max-width: 1024px) {
           :root {
                --popup-margin-x: 0px;
                --content-padding-x: 24px;
           }
           .modal-card {
                width: 100% !important;
                margin: 0 !important;
                border-radius: 0 !important;
                min-height: 100vh;
           }
           .h-\\[15vh\\] {
               height: 0 !important;
               display: none;
           }
           /* Reset content padding on mobile */
           .content-block {
               padding-top: 32px !important;
               padding-left: 24px !important;
               padding-right: 24px !important;
               margin-top: 0 !important; /* Remove any top margin relative to image */
           }
           
           /* Typography Overrides */
           .mobile-title {
               font-weight: 400 !important;
               font-size: 36px !important;
               line-height: 42px !important;
           }
           
           .mobile-body p, .mobile-body div {
               font-weight: 400 !important;
               font-size: 18px !important;
               line-height: 1.2 !important; 
           }
        }
      `}</style>
        </>
    );
};

const ThoughtDetail: React.FC<ThoughtDetailProps> = ({ isOpen, onClose, data }) => {
    return (
        <AnimatePresence>
            {isOpen && data && (
                <ThoughtDetailContent data={data} onClose={onClose} />
            )}
        </AnimatePresence>
    );
};

export default ThoughtDetail;
