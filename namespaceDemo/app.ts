/// <reference path="utilityFunctions.ts"/>
import util = Utility.Fees;

let fee = util.CalculateLateFee(10);
console.log(`Fee: $${fee}`);

/*
-> Compile
tsc --target ES5 app.ts
compiles both files since there is a reference to this file inside app.ts
-> Run
tsc --target ES5 app.ts --outFile out.js
node out.js
*/