const pricePerPhone = 119.95;
const numberOfPhones = 30;
const taxRate = 5;
let fullpricewithtax = pricePerPhone+ (pricePerPhone / 100 * taxRate);
console.log('Total price for 30 phones is $'+ numberOfPhones * fullpricewithtax)