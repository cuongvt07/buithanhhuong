import React from 'react';

interface ScrollToTopProps {
    containerRef?: React.RefObject<HTMLElement>;
    className?: string; // Optional className to allow positioning overrides
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ containerRef, className }) => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const getContainer = () => containerRef?.current || document.querySelector('main');

        const checkScroll = () => {
            const container = getContainer();
            if (container) {
                // Show button if scrolled down more than 200px
                setIsVisible(container.scrollTop > 200);
            }
        };

        const container = getContainer();
        if (container) {
            container.addEventListener('scroll', checkScroll);
            // Check initially
            checkScroll();
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', checkScroll);
            }
        };
    }, [containerRef]);

    const scrollToTop = () => {
        const container = containerRef?.current || document.querySelector('main');
        if (container) {
            container.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-[13px] right-4 md:hidden z-[9999] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] cursor-pointer active:scale-95 transition-all duration-300 flex items-center justify-center p-0 ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
                } ${className || ''}`}
            aria-label="Scroll to top"
            style={{
                padding: '32px 24px', // Explicit padding as requested
                borderRadius: '50px', // Explicit block
            }}
        >
            <img
                src="/images/Vector-up.svg"
                alt="Scroll Up"
                className="w-auto h-auto"
            />
        </button>
    );
};

export default ScrollToTop;
