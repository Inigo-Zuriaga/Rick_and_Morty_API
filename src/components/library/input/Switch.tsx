import "./Switch.css";

interface SwitchProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export const Switch = ({ primary = false, size = "medium" }: SwitchProps) => {
  const mode = primary ? "slider" : "slider--secondary";

  const check = primary ? "check" : "check--secondary";

  return (
    <label className={["switch", `storybook-switch--${size}`].join(" ")}>
      <input type="checkbox"></input>
      <span
        className={["slider round", `storybook-slider--${size}`, mode].join(
          " "
        )}
      >
        <svg
          className={["check", `storybook-check--${size}`, check].join(" ")}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
    </label>
  );
};
