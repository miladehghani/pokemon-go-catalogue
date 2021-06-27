import React, { useState } from "react";

export const useInput = (initialState: string) => {
  const [value, setValue] = useState(initialState);

  return {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value),
  };
};
