import { DotPattern } from "./DotPattern";



export const DotPatternStory: React.FC = () => {
    const pattern = `
    YOOOB
    BBOOB
    BOBOB
    BOOBB
    BOOOB
    `;

    return <DotPattern pattern={pattern} dotSize={20} />;
};
