import React, { useState } from "react";

interface DotButtonProps {
    width: number; 
    dotSize?: number;
    color?: string; 
    hoverColor?: string;
    children?: React.ReactNode;
    className?: string; 
    style?: React.CSSProperties; 
    onClick?: () => void;
}

export const DotButton: React.FC<DotButtonProps> = ({
    width,
    dotSize = 8,
    color = "#FFFFFF",
    hoverColor = "#FFD700", 
    children,
    className = "",
    style = {},
    onClick,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const horizontalDots = Math.max(1, Math.floor(width / dotSize)); 

    return (
        <div
            className={className}
            style={{
                position: "relative",
                width: `${width}px`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                ...style,
            }}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
        >
            {/* upper line */}
            <div
                style={{
                    display: "flex",
                    gap: "0px", 
                    marginBottom: `${dotSize * 0.5}px`, 
                }}
            >
                {Array.from({ length: horizontalDots }).map((_, index) => (
                    <div
                        key={`top-${index}`}
                        style={{
                            width: `${dotSize}px`,
                            height: `${dotSize}px`,
                            borderRadius: "50%",
                            backgroundColor: isHovered ? hoverColor : color, 
                            transition: "background-color 0.3s ease", 
                        }}
                    />
                ))}
            </div>

            {/* children content */}
            <div
                style={{
                    textAlign: "center",
                    color: "#fff", 
                    fontSize: "1.2rem", 
                    zIndex: 1,
                }}
            >
                {children}
            </div>

            {/* bottom line */}
            <div
                style={{
                    display: "flex",
                    gap: "0px", 
                    marginTop: `${dotSize * 0.5}px`, 
                }}
            >
                {Array.from({ length: horizontalDots }).map((_, index) => (
                    <div
                        key={`bottom-${index}`}
                        style={{
                            width: `${dotSize}px`,
                            height: `${dotSize}px`,
                            borderRadius: "50%",
                            backgroundColor: isHovered ? hoverColor : color,
                            transition: "background-color 0.3s ease", 
                        }}
                    />
                ))}
            </div>
        </div>
    );
};
