export function CalculateLateFee(daysLate: number): number {
    return daysLate * .25;
}

export function MaxBooksAllowed(age: number) {
    if (age < 12) {
        return 3;
    }
    else {
        return 10;
    }
}

function privateFunc(): void {
    console.log('This is a private function');
}

/* Generics: Code that work with multiple types by accepting type parameters for each instance
    used for classes, interfaces and functions. Represented as T: e.g. Arrat<T> */

// Generic Function:
export function Purge<T>(inventory: Array<T>): Array<T>{
    return inventory.splice(2, inventory.length);
}
