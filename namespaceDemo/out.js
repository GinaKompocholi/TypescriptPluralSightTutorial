var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function CalculateLateFee(daysLate) {
            return daysLate * .25;
        }
        Fees.CalculateLateFee = CalculateLateFee;
        function MaxBooksAllowed(age) {
            if (age < 12) {
                return 3;
            }
            else {
                return 10;
            }
        }
        Fees.MaxBooksAllowed = MaxBooksAllowed;
        function privateFunc() {
            console.log('This is a private function');
        }
    })(Fees = Utility.Fees || (Utility.Fees = {}));
})(Utility || (Utility = {}));
/// <reference path="utilityFunctions.ts"/>
var util = Utility.Fees;
var fee = util.CalculateLateFee(10);
console.log("Fee: $" + fee);
// tsc --target ES5 app.ts
// compiles both files since there is a reference to this file inside app.ts
