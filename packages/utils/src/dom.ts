import { generateId } from './generateId';

/**
 * Sets the inner HTML of a specified element.
 *
 * @param selector - The CSS selector of the element to update.
 * @param html - The HTML string to inject into the element.
 */
export function setInnerHTML(selector: string, html: string): void {
    const element = document.querySelector(selector);
    if (element) {
        element.innerHTML = html;
    } else {
        console.error(`Element not found for selector: ${selector}`);
    }
}

/**
 * Sets the CSS styles of a specified element.
 *
 * @param selector - The CSS selector of the element to update.
 * @param styles - An object containing CSS properties and values.
 */
export function setCSS(selector: string, styles: { [key: string]: string }): void {
    const element = document.querySelector(selector);
    if (element) {
        Object.keys(styles).forEach(property => {
            (element as HTMLElement).style[property as any] = styles[property];
        });
    } else {
        console.error(`Element not found for selector: ${selector}`);
    }
}

/**
 * Adds a unique ID to a specified element.
 *
 * @param selector - The CSS selector of the element to update.
 * @param prefix - An optional prefix for the ID.
 * @returns The unique ID assigned to the element.
 */
export function addId(selector: string, prefix: string = ''): string {
    const element = document.querySelector(selector);
    if (element) {
        const id = generateId(prefix);
        element.id = id;
        return id;
    } else {
        console.error(`Element not found for selector: ${selector}`);
        return '';
    }
}

/**
 * Updates the value of a specified input element.
 *
 * @param selector - The CSS selector of the input element to update.
 * @param value - The value to set on the input element.
 */
export function updateValue(selector: string, value: string): void {
    const element = document.querySelector<HTMLInputElement>(selector);
    if (element) {
        element.value = value;
    } else {
        console.error(`Element not found for selector: ${selector}`);
    }
}