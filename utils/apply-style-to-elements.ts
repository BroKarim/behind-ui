

export const applyStyleToElement = (element: HTMLElement, key: string, value: string) => {
  element.style.setProperty(`--${key}`, value);
};

