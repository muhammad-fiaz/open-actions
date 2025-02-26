/**
 * Deep clones an object or array.
 *
 * @param obj - The object or array to clone.
 * @returns A deep clone of the input object or array.
 */
export function clone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}