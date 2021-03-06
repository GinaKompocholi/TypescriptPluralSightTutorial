"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purge = exports.MaxBooksAllowed = exports.CalculateLateFee = void 0;
function CalculateLateFee(daysLate) {
    return daysLate * .25;
}
exports.CalculateLateFee = CalculateLateFee;
function MaxBooksAllowed(age) {
    if (age < 12) {
        return 3;
    }
    else {
        return 10;
    }
}
exports.MaxBooksAllowed = MaxBooksAllowed;
function privateFunc() {
    console.log('This is a private function');
}
/* Generics: Code that work with multiple types by accepting type parameters for each instance
    used for classes, interfaces and functions. Represented as T: e.g. Arrat<T> */
// Generic Function:
function Purge(inventory) {
    return inventory.splice(2, inventory.length);
}
exports.Purge = Purge;
