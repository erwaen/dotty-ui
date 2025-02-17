import React, { useState } from "react";

export interface PixelArtProps {
  maxDotSize?: number;
  maxPixels?: number;
}

export const PixelArt: React.FC<PixelArtProps> = ({
  maxDotSize = 20,
  maxPixels = 50,
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [dotSize, setDotSize] = useState<number>(maxDotSize);
  const [pixels, setPixels] = useState<string[][]>([]); 

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderPixelArt = () => {
    if (!imageSrc) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = imageSrc;

    img.onload = () => {
      const scale = Math.min(maxPixels / img.width, maxPixels / img.height);
      const scaledWidth = Math.floor(img.width * scale);
      const scaledHeight = Math.floor(img.height * scale);

      canvas.width = scaledWidth;
      canvas.height = scaledHeight;

      ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight);
      const imageData = ctx.getImageData(0, 0, scaledWidth, scaledHeight).data;

      const rows: string[][] = [];
      for (let y = 0; y < scaledHeight; y++) {
        const row: string[] = [];
        for (let x = 0; x < scaledWidth; x++) {
          const index = (y * scaledWidth + x) * 4;
          const r = imageData[index];
          const g = imageData[index + 1];
          const b = imageData[index + 2];
          const a = imageData[index + 3];
          const color = `rgba(${r}, ${g}, ${b}, ${a / 255})`;
          row.push(color);
        }
        rows.push(row);
      }

      setDotSize(Math.max(1, Math.floor(maxDotSize / scale)));
      setPixels(rows); 
    };
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imageSrc && (
        <button onClick={renderPixelArt}>Render Pixel Art</button>
      )}
      {pixels.length > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: `${dotSize * 0.5}px`,
          }}
        >
          {pixels.map((row, rowIndex) => (
            <div
              key={rowIndex}
              style={{
                display: "flex",
                gap: "0px",
              }}
            >
              {row.map((color, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  style={{
                    width: `${dotSize}px`,
                    height: `${dotSize}px`,
                    borderRadius: "50%",
                    backgroundColor: color,
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
