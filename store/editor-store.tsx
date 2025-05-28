import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ThemeEditorState } from "@/types/editor";
import { defaultThemeState } from "@/config/theme";
import { getPresetThemeStyles } from "@/utils/theme-preset-helper";


interface EditorStore {
  themeState: ThemeEditorState;
  themeCheckpoint: ThemeEditorState | null;
  setThemeState: (state: ThemeEditorState) => void;
  applyThemePreset: (preset: string) => void;
  saveThemeCheckpoint: () => void;
  restoreThemeCheckpoint: () => void;
  resetToCurrentPreset: () => void;
}


export const useEditorStore = create<EditorStore>()(
  persist(
    (set, get) => ({
      themeState: defaultThemeState,
      themeCheckpoint: null,
      setThemeState: (state: ThemeEditorState) => {
        console.log("Store updating theme state:", state.currentMode);
        set({ themeState: state });
      },
      applyThemePreset: (preset: string) => {
        const themeState = get().themeState;
        const newStyles = getPresetThemeStyles(preset);
        const newThemeState: ThemeEditorState = {
          ...themeState,
          preset,
          styles: newStyles,
          hslAdjustments: defaultThemeState.hslAdjustments,
        };
        const updates: Partial<EditorStore> & { themeState: ThemeEditorState } = {
          themeState: newThemeState,
          themeCheckpoint: newThemeState,
        };
        set(updates);
      },
      saveThemeCheckpoint: () => {
        set({ themeCheckpoint: get().themeState });
      },
      restoreThemeCheckpoint: () => {
        const checkpoint = get().themeCheckpoint;
        if (checkpoint) {
          set({
            themeState: {
              ...checkpoint,
              currentMode: get().themeState.currentMode,
            },
          });
        } else {
          console.warn("No theme checkpoint available to restore to.");
        }
      },
      resetToCurrentPreset: () => {
        const themeState = get().themeState;
        const presetThemeStyles = getPresetThemeStyles(themeState.preset ?? "default");
        const newThemeState: ThemeEditorState = {
          ...themeState,
          styles: presetThemeStyles,
          preset: themeState.preset,
          hslAdjustments: defaultThemeState.hslAdjustments,
        };
        set({
          themeState: newThemeState,
          themeCheckpoint: newThemeState,
        });
      },
    }),
    {
      name: "editor-storage",
    }
  )
);
