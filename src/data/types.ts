// src/data/types.ts
export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}

export type ButtonVariant = 'primary' | 'secondary';
