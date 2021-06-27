import { waitFor } from "@testing-library/react";

export const delay = (miliseconds: number) =>
  waitFor(
    () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(0), miliseconds);
      }),
    {
      timeout: miliseconds + 100,
    }
  );
