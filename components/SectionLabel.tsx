import React from 'react';
import { BREAKPOINTS } from '../config/designTokens';

interface SectionLabelProps {
    text: string;
    width?: string;
    className?: string;
    style?: React.CSSProperties;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ text, width = 'auto', className = '', style = {} }) => {
    return (
        <div
            className={`section-label-container ${className}`}
            style={{
                display: 'flex',
                padding: '32px',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                width: width,
                boxSizing: 'content-box',
                position: 'absolute', // Default per request usage, can be overridden via className relative if needed? Actually user snippet had position absolute.
                ...style
            }}
        >
            <style>{`
        .section-label-text {
          font-family: 'STIX Two Text', serif;
          font-size: 17px;
          font-weight: 400;
          font-style: italic;
          line-height: 1;
          color: #1D3413;
        }
        @media (max-width: ${BREAKPOINTS.tablet - 1}px) {
          .section-label-text { font-size: 14px; }
          .section-label-container { gap: 60px !important; }
        }
      `}</style>
            <span className="section-label-text">(</span>
            <span className="section-label-text" style={{ whiteSpace: 'nowrap' }}>{text}</span>
            <span className="section-label-text">)</span>
        </div>
    );
};

export default SectionLabel;
