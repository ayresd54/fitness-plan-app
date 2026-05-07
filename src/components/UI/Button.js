import React from "react";
import theme from "../../theme";

export default function Button({ children, onClick, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        padding: "12px 0",
        background: theme.colors.orange,
        border: "none",
        borderRadius: theme.radius.sm,
        color: "#fff",
        fontWeight: 600,
        cursor: "pointer",
        ...style
      }}
    >
      {children}
    </button>
  );
}
