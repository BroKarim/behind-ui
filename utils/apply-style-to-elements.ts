//Menyisipkan variabel CSS custom (seperti --background) ke elemen HTML sebagai inline style.

export function applyStyleToElement(element: HTMLElement, key: string, value: string) {
  element.setAttribute(`style`, `${element.getAttribute("style") || ""}--${key}: ${value};`);
}
