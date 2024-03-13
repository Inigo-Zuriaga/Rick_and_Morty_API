import React from "react";

interface Props {
  type: "primary" | "secondary";
  children: React.ReactNode;
  show: boolean;
}

const Badge: React.FC<Props> = ({ type, children, show }) => {
  //Conditonal rendering
  return (
    <div className="container">
      {children}
      {show && (
        <button
          className={`badge ${type === "primary" ? "primary" : "secondary"}`}
        >
          {type === "primary" ? "Primary" : "Secondary"}
        </button>
      )}
    </div>
  );
};

const css = `
.container {
  position: relative;
}
.badge {
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
}
.primary {
  background-color: green;
  border: 1px solid green;
  color: white;
}
.secondary {
  background-color: red;
  border: 1px solid red;
  color: white;
}
`;

const styleElement = document.createElement("style");
styleElement.innerHTML = css;
document.head.appendChild(styleElement);

export default Badge;
