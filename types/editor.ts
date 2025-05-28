import { ThemeStyles } from "./theme";

// Base interface for any editor's state
export interface BaseEditorState {
  styles: ThemeStyles;
}




export interface ThemeEditorState extends BaseEditorState {
  preset?: string;
  styles: ThemeStyles;
  currentMode: "light" | "dark";
  hslAdjustments?: {
    hueShift: number;
    saturationScale: number;
    lightnessScale: number;
  };
}

// Type for available editors
export type EditorType = "button" | "input" | "card" | "dialog" | "theme";

// Interface for editor configuration
export interface EditorConfig {
  type: EditorType;
  name: string;
  description: string;
  defaultState: BaseEditorState;
  controls: React.ComponentType<any>;
  preview: React.ComponentType<any>;
}
