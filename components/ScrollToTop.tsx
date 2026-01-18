import React from 'react';

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const checkScroll = () => {
            const mainElement = document.querySelector('main');
            if (mainElement) {
                // Show button if scrolled down more than 200px
                setIsVisible(mainElement.scrollTop > 200);
            }
        };

        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.addEventListener('scroll', checkScroll);
            // Check initially in case we land on a scrolled position
            checkScroll();
        }

        return () => {
            if (mainElement) {
                mainElement.removeEventListener('scroll', checkScroll);
            }
        };
    }, []);

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
            className={`fixed bottom-[13px] right-4 md:hidden z-[9999] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] cursor-pointer active:scale-95 transition-all duration-300 flex items-center justify-center p-0 ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
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
