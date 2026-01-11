import React from 'react';
import { COLORS, TYPOGRAPHY } from '../config/designTokens';

interface WannaTalkProps {
    onNavigate: (page: string) => void;
    className?: string;
    style?: React.CSSProperties;
    isActive?: boolean;
}

const WannaTalk: React.FC<WannaTalkProps> = ({ onNavigate, className = '', style = {}, isActive = false }) => {
    return (
        <div
            className={`z-50 flex justify-center py-[32px] md:py-0 ${className}`}
            style={{
                ...style
            }}
        >
            <button
                onClick={() => onNavigate('contact')}
                className={`
                    relative transition-none outline-none after:transition-all after:duration-300
                    ${isActive
                        ? ''
                        : "hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[0.5px] hover:after:bg-[#1d3413]"
                    }
                `}
                style={{
                    fontFamily: TYPOGRAPHY.fontFamily.stix,
                    fontSize: '16px',
                    fontWeight: TYPOGRAPHY.body.regular.fontWeight,
                    fontStyle: isActive ? 'italic' : 'normal',
                    transform: isActive ? 'scaleX(1.01)' : 'scaleX(1)',
                    lineHeight: '20px',
                    color: COLORS.textPrimary,
                    display: 'inline-block',
                    flexShrink: 0,
                    background: 'none',
                    border: 'none',
                    paddingLeft: '2px',
                    paddingRight: '2px',
                    paddingTop: 0,
                    paddingBottom: 0,
                    cursor: 'pointer'
                }}
            >
                wanna talk?
            </button>
        </div>
    );
};

export default WannaTalk;
