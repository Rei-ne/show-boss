import { useTheme } from "../../hooks/useTheme";

import "./ThemeSelector.css";

const themeColors = ["#F1244F", "#58037C", "#000000"];

export default function ThemeSelector() {
  const { changeColor } = useTheme();

  return (
    <div className="themeselector">
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
