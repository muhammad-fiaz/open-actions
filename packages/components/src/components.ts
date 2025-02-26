type Component = () => HTMLElement;

/**
 * Renders a component to the specified container.
 *
 * @param component - The component function to render.
 * @param container - The DOM element to render the component into.
 */
export function renderComponent(component: Component, container: HTMLElement): void {
    container.innerHTML = '';
    container.appendChild(component());
}

/**
 * Creates an HTML element with the specified tag, properties, and children.
 *
 * @param tag - The HTML tag to create.
 * @param props - An object containing properties to set on the element.
 * @param children - An array of children elements to append to the created element.
 * @returns The created HTML element.
 */
export function createElement(tag: string, props: { [key: string]: any } = {}, ...children: HTMLElement[]): HTMLElement {
    const element = document.createElement(tag);

    // Set properties
    Object.keys(props).forEach(key => {
        if (key.startsWith('on') && typeof props[key] === 'function') {
            element.addEventListener(key.substring(2).toLowerCase(), props[key]);
        } else {
            element.setAttribute(key, props[key]);
        }
    });

    // Append children
    children.forEach(child => element.appendChild(child));

    return element;
}