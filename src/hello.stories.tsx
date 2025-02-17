import * as React from "react";
import { DotButton, DotPattern, PixelArt } from "./index";

export const World = () => {
    return (
        <DotButton
            width={140}
            color="#1B1D1F"
            hoverColor="#FFFFFF"
            onClick={() => alert("Botón presionado!")}
        >
            <span style={{ color: "red" }}>Go there</span>
        </DotButton>
    );
};

export const DotPatternStory = () => {
    return <DotPattern dotSize={20} pattern={["www", " w "]}></DotPattern>;
};

export const PixelGenerator: React.FC = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Pixel Art Generator</h1>
      <p>
        Sube una imagen y conviértela en un patrón de círculos coloreados.
      </p>

      {/* Componente PixelArt */}
      <PixelArt maxDotSize={1} maxPixels={500} />
    </div>
  );
};

