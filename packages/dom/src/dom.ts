type StateSetter<T> = (newValue: T) => void;
type EffectCallback = () => void;

let previousDeps: any[] = [];

export function useState<T>(initialValue: T): [T, StateSetter<T>] {
    let value = initialValue;
    const setValue: StateSetter<T> = (newValue: T) => {
        value = newValue;
        render();
    };
    return [value, setValue];
}

export function useEffect(callback: EffectCallback, dependencies: any[]): void {
    const hasChanged = dependencies.some((dep, i) => dep !== previousDeps[i]);
    if (hasChanged) {
        callback();
        previousDeps = dependencies;
    }
}

function render(): void {
    // Placeholder for re-rendering the DOM
    console.error('Render function is not implemented. Please implement it in your project.');
}