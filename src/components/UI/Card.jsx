import React from "react";
import theme from "../../theme";

export default function Card({ children, style = {} }) {
  return (
    <div
      style={{
        background: theme.colors.card,
        border: `1px solid ${theme.colors.cardBorder}`,
        padding: theme.spacing.md,
        borderRadius: theme.radius.md,
        marginBottom: theme.spacing.md,
        ...style
      }}
    >
      {children}
    </div>
  );
}
