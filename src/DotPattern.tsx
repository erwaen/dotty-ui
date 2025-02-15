import React from 'react';

export interface DotPatternProps {
    pattern: string;
    dotSize?: number;
    verticalSpacing?: number;
    className?: string;
    style?: React.CSSProperties;
}

type ColorMap = {
    [key: string]: string;
};

export const DotPattern: React.FC<DotPatternProps> = ({
    pattern,
    dotSize = 20,
    verticalSpacing,
    className = '',
    style = {},
}) => {
    const defaultVerticalSpacing = dotSize * 0.5; // Adjust multiplier as needed
    const spacing = verticalSpacing !== undefined ? verticalSpacing : defaultVerticalSpacing;

    const lines = pattern.split('\n').filter(line => line.trim());

    const colorMap: ColorMap = {
        Y: '#FFD700',
        B: '#0077FF', 
        O: 'transparent', 
    };

    return (
        <div
            className={className}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: `${spacing}px`,
                ...style,
            }}
        >
            {lines.map((line, rowIndex) => (
                <div
                    key={rowIndex}
                    style={{
                        display: 'flex',
                        gap: '0px', // no space between circles (horizontally) 
                    }}
                >
                    {Array.from(line).map((char, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            style={{
                                width: `${dotSize}px`,
                                height: `${dotSize}px`,
                                borderRadius: '50%',
                                backgroundColor: colorMap[char] || 'transparent',
                                flexShrink: 0, //prevents circles from warping
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

