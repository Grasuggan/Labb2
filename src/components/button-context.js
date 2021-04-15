import React from "react";

export const btnInfo = {
  disabled: {
    color: "red",
    text: "Disabled",
  },
  enabled: {
    color: "green",
    text: "Enabled",
  },
};

export const ButtonContext = React.createContext(btnInfo.disabled);
