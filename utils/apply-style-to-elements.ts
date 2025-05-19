//Menyisipkan variabel CSS custom (seperti --background) ke elemen HTML sebagai inline style.

// export function applyStyleToElement(element: HTMLElement, key: string, value: string) {
//   element.setAttribute(`style`, `${element.getAttribute("style") || ""}--${key}: ${value};`);
// }

export const applyStyleToElement = (element: HTMLElement, key: string, value: string) => {
  // Use setProperty instead of setAttribute to avoid overriding existing styles
  element.style.setProperty(`--${key}`, value);
};

