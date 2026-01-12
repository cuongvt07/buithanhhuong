import React from 'react';
import { BREAKPOINTS } from '../config/designTokens';

interface SectionLabelProps {
    text: string;
    width?: string;
    mobileWidth?: string;
    className?: string;
    style?: React.CSSProperties;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ text, width = 'auto', mobileWidth, className = '', style = {} }) => {
    const effectiveMobileWidth = mobileWidth || width;

    return (
        <div
            className={`section-label-container ${className}`}
            style={{
                display: 'flex',
                padding: '32px',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                boxSizing: 'content-box',
                '--label-width': width,
                '--label-mobile-width': effectiveMobileWidth,
                ...style
            } as React.CSSProperties}
        >
            <style>{`
        .section-label-container {
             width: var(--label-width);
        }
        .section-label-text {
          font-family: 'STIX Two Text', serif;
          font-size: 17px;
          font-weight: 400;
          font-style: italic;
          line-height: 20px;
          color: #1D3413;
        }
        @media (max-width: ${BREAKPOINTS.tablet - 1}px) {
          .section-label-container {
             width: var(--label-mobile-width) !important;
          }
        }
      `}</style>
            <span className="section-label-text">(</span>
            <span className="section-label-text" style={{ whiteSpace: 'nowrap' }}>{text}</span>
            <span className="section-label-text">)</span>
        </div>
    );
};

export default SectionLabel;
