import ThemePresetSelect from "./editor/theme-select";
import { useThemePresetStore } from "@/store/theme-preset-store";
import { useEditorStore } from "@/store/editor-store";

const ThemeControlPanel = () => {
  const { applyThemePreset, themeState } = useEditorStore();
  const presets = useThemePresetStore((state) => state.getAllPresets());
  return (
    <>
      <ThemePresetSelect presets={presets} currentPreset={themeState.preset || null} onPresetChange={applyThemePreset} />
    </>
  );
};

export default ThemeControlPanel;
