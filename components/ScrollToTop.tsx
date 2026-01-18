import React from 'react';

const ScrollToTop: React.FC = () => {
    const scrollToTop = () => {
        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    return (
        <button
            onClick={scrollToTop}
            // Fixed: bg-white, z-index 9999, always visible (no conditionals)
            className="fixed bottom-[13px] right-4 md:hidden z-[9999] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] cursor-pointer active:scale-95 transition-transform flex items-center justify-center p-0"
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
