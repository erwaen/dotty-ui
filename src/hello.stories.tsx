import * as React from "react";
import { DotButton, DotPattern } from "./index";

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
