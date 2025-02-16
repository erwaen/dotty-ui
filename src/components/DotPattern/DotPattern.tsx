import React from "react";

export interface DotPatternProps {
    pattern: string[];
    dotSize?: number;
    verticalSpacing?: number;
    className?: string;
    style?: React.CSSProperties;
    colors?: {
        [key: string]: string;
    };
}

const defaultColors = {
    Y: "#FFD700", //yellow
    B: "#0077FF", //blue
    R: "#D71921", // Red
    b: "#010101", // black 
    w: "#FFFFFF", // white
    O: "transparent", //empty

};

export const DotPattern: React.FC<DotPatternProps> = ({
    pattern,
    dotSize = 20,
    verticalSpacing,
    className = "",
    style = {},
    colors = {}, // customColors
}) => {
    // Combine colores default colors with selected
    const mergedColors = { ...defaultColors, ...colors };

    const defaultVerticalSpacing = dotSize * 0.5;
    const spacing =
        verticalSpacing !== undefined ? verticalSpacing : defaultVerticalSpacing;

    return (
        <div
            className={className}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: `${spacing}px`,
                ...style,
            }}
        >
            {pattern.map((line, rowIndex) => (
                <div
                    key={rowIndex}
                    style={{
                        display: "flex",
                        gap: "0px", // no horizontally space between circules
                    }}
                >
                    {Array.from(line).map((char, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            style={{
                                width: `${dotSize}px`,
                                height: `${dotSize}px`,
                                borderRadius: "50%",
                                backgroundColor:
                                    mergedColors[char as keyof typeof mergedColors] ||
                                    "transparent",
                                flexShrink: 0, // prevent wraped
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};


