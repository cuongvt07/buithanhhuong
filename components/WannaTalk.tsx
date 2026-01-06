import React from 'react';
import { COLORS, TYPOGRAPHY } from '../config/designTokens';

interface WannaTalkProps {
    onNavigate: (page: string) => void;
    className?: string;
    style?: React.CSSProperties;
}

const WannaTalk: React.FC<WannaTalkProps> = ({ onNavigate, className = '', style = {} }) => {
    return (
        <div
            className={`z-50 flex justify-center py-[32px] md:py-0 ${className}`}
            style={{
                ...style
            }}
        >
            <button
                onClick={() => onNavigate('contact')}
                className="relative transition-all duration-300 hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[0.5px] hover:after:bg-[#1d3413] outline-none"
                style={{
                    fontFamily: TYPOGRAPHY.fontFamily.stix,
                    fontSize: `${TYPOGRAPHY.body.regular.fontSize}px`,
                    fontWeight: TYPOGRAPHY.body.regular.fontWeight,
                    lineHeight: '20px',
                    color: COLORS.textPrimary,
                    display: 'inline-block',
                    flexShrink: 0,
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer'
                }}
            >
                wanna talk?
            </button>
        </div>
    );
};

export default WannaTalk;
