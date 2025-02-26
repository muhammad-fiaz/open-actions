let idCounter = 0;

/**
 * Generates a unique ID.
 *
 * @param prefix - An optional prefix for the ID.
 * @returns A unique ID string.
 */
export function generateId(prefix: string = ''): string {
    idCounter += 1;
    return `${prefix}${idCounter}`;
}